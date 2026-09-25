import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { 
  Car, Clock, AlertTriangle, ShieldAlert, Award, 
  ChevronRight, ChevronLeft, RotateCcw, Volume2, VolumeX,
  HelpCircle, BookOpen, CheckCircle2, CheckSquare, 
  X, AlertOctagon, Sparkles, Send, Flame, RefreshCw,
  Search, Image as ImageIcon, Check, Layers, Target
} from 'lucide-react';
import { Question, UserAnswer, SimulatorMode, QuestionCategory, TestHistoryItem } from './types/quiz';
import { QUESTION_BANK, generateConasetExam, shuffleArray } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavigator } from './components/QuestionNavigator';
import { LegalInstructionsModal } from './components/LegalInstructionsModal';
import { RecentExamsSummary } from './components/RecentExamsSummary';
import { UniqueProgressTracker } from './components/UniqueProgressTracker';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeToggle } from './components/ThemeToggle';
import { playSound } from './utils/sound';
import { getRecentExams, clearStoredExamHistory } from './utils/examHistory';
import { 
  computePracticeProgress, 
  recordQuestionAnswered, 
  recordBatchQuestionsAnswered, 
  resetPracticeProgress, 
  getUnansweredQuestionIds, 
  PracticeProgressState 
} from './utils/practiceProgress';

const ExamResults = lazy(() =>
  import('./components/ExamResults').then((m) => ({ default: m.ExamResults }))
);
const QuestionBankExplorer = lazy(() =>
  import('./components/QuestionBankExplorer').then((m) => ({ default: m.QuestionBankExplorer }))
);

const ComponentLoadingFallback = () => (
  <div className="w-full max-w-4xl mx-auto py-20 flex flex-col items-center justify-center space-y-4 animate-fade-in">
    <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
    <p className="text-sm font-semibold text-slate-500">Cargando módulo de examen...</p>
  </div>
);

const TEST_DURATION_SECONDS = 45 * 60; // 45 minutos oficiales

export default function App() {
  const [appState, setAppState] = useState<'welcome' | 'exam' | 'practice' | 'results' | 'explorer'>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [timeRemaining, setTimeRemaining] = useState(TEST_DURATION_SECONDS);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isSubmitConfirmOpen, setIsSubmitConfirmOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [examSessionId, setExamSessionId] = useState<string>(() => 'exam-' + Date.now());
  const [recentExams, setRecentExams] = useState<TestHistoryItem[]>(() => getRecentExams(5));
  const [practiceProgress, setPracticeProgress] = useState<PracticeProgressState>(() => computePracticeProgress());

  // Recargar los últimos 5 exámenes y progreso de práctica al volver a la pantalla de bienvenida
  useEffect(() => {
    if (appState === 'welcome') {
      setRecentExams(getRecentExams(5));
      setPracticeProgress(computePracticeProgress());
    }
  }, [appState]);

  const handleClearHistory = () => {
    clearStoredExamHistory();
    setRecentExams([]);
  };

  const handleResetPracticeProgress = () => {
    const cleared = resetPracticeProgress();
    setPracticeProgress(cleared);
  };

  // Estados específicos para Modo Práctica
  const [practiceCategory, setPracticeCategory] = useState<string>('all');
  const [practiceChecked, setPracticeChecked] = useState(false);
  const [practiceScore, setPracticeScore] = useState({ correct: 0, total: 0, points: 0 });

  // Temporizador para Modo Examen
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (appState === 'exam' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            playSound('finish', isMuted);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [appState, timeRemaining, isMuted]);

  // Iniciar Examen Oficial
  const handleStartExam = () => {
    const examQuestions = generateConasetExam();
    setExamSessionId('exam-' + Date.now());
    setQuestions(examQuestions);
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(TEST_DURATION_SECONDS);
    setAppState('exam');
    playSound('click', isMuted);
  };

  // Iniciar Modo Práctica
  const handleStartPractice = (category = 'all') => {
    setPracticeCategory(category);
    let pool = [...QUESTION_BANK];
    if (category === 'critical') {
      pool = pool.filter((q) => q.isCritical);
    } else if (category === 'images') {
      pool = pool.filter((q) => Boolean(q.illustrationType));
    } else if (category !== 'all') {
      pool = pool.filter((q) => q.category === category);
    }
    const shuffled = shuffleArray(pool).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setQuestions(shuffled);
    setUserAnswers({});
    setCurrentIndex(0);
    setPracticeChecked(false);
    setPracticeScore({ correct: 0, total: 0, points: 0 });
    setAppState('practice');
    playSound('click', isMuted);
  };

  // Iniciar Modo Práctica con preguntas no vistas aún
  const handleStartPracticeUnanswered = () => {
    const unansweredIds = getUnansweredQuestionIds();
    if (unansweredIds.length === 0) {
      handleStartPractice('all');
      return;
    }
    setPracticeCategory('unanswered');
    const pool = QUESTION_BANK.filter((q) => unansweredIds.includes(q.id));
    const shuffled = shuffleArray(pool).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setQuestions(shuffled);
    setUserAnswers({});
    setCurrentIndex(0);
    setPracticeChecked(false);
    setPracticeScore({ correct: 0, total: 0, points: 0 });
    setAppState('practice');
    playSound('click', isMuted);
  };

  // Manejar selección de opción
  const handleSelectOption = (optionIndex: number) => {
    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    playSound('click', isMuted);

    const prevAnswer = userAnswers[currentQ.id] || {
      questionId: currentQ.id,
      selectedOptionIndices: [],
      isFlaggedForReview: false,
    };

    let newIndices: number[];
    if (currentQ.isMultiple) {
      if (prevAnswer.selectedOptionIndices.includes(optionIndex)) {
        newIndices = prevAnswer.selectedOptionIndices.filter((i) => i !== optionIndex);
      } else {
        newIndices = [...prevAnswer.selectedOptionIndices, optionIndex];
      }
    } else {
      newIndices = [optionIndex];
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prevAnswer,
        selectedOptionIndices: newIndices,
      },
    }));
  };

  // Alternar marca para revisión
  const handleToggleFlag = (index: number) => {
    const q = questions[index];
    if (!q) return;

    setUserAnswers((prev) => {
      const existing = prev[q.id] || {
        questionId: q.id,
        selectedOptionIndices: [],
        isFlaggedForReview: false,
      };
      return {
        ...prev,
        [q.id]: {
          ...existing,
          isFlaggedForReview: !existing.isFlaggedForReview,
        },
      };
    });
  };

  // Comprobar respuesta en Modo Práctica
  const handlePracticeCheck = () => {
    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    const ans = userAnswers[currentQ.id]?.selectedOptionIndices || [];
    if (ans.length === 0) return;

    const correctIndices = currentQ.options
      .map((opt, i) => (opt.isCorrect ? i : -1))
      .filter((i) => i !== -1);

    const isFullyCorrect =
      correctIndices.length === ans.length && ans.every((i) => correctIndices.includes(i));

    if (isFullyCorrect) {
      playSound('correct', isMuted);
      setPracticeScore((prev) => ({
        correct: prev.correct + 1,
        total: prev.total + 1,
        points: prev.points + currentQ.points,
      }));
    } else {
      playSound('wrong', isMuted);
      setPracticeScore((prev) => ({
        ...prev,
        total: prev.total + 1,
      }));
    }

    // Registrar en el progreso acumulado de preguntas únicas
    const updated = recordQuestionAnswered(
      currentQ.id,
      isFullyCorrect,
      currentQ.category,
      currentQ.isCritical
    );
    setPracticeProgress(updated);

    setPracticeChecked(true);
  };

  // Siguiente en Modo Práctica
  const handlePracticeNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setPracticeChecked(false);
    } else {
      // Barajar nuevo set
      if (practiceCategory === 'unanswered') {
        handleStartPracticeUnanswered();
      } else {
        handleStartPractice(practiceCategory);
      }
    }
  };

  // Anterior en Modo Práctica
  const handlePracticePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setPracticeChecked(false);
    }
  };

  // Finalizar Examen Oficial
  const finishExam = () => {
    setIsSubmitConfirmOpen(false);

    // Registrar en lote las preguntas respondidas en el examen
    const batch = questions
      .filter((q) => (userAnswers[q.id]?.selectedOptionIndices || []).length > 0)
      .map((q) => {
        const sel = userAnswers[q.id].selectedOptionIndices;
        const correct = q.options.map((opt, i) => (opt.isCorrect ? i : -1)).filter((i) => i !== -1);
        const isCorrect = correct.length === sel.length && sel.every((i) => correct.includes(i));
        return {
          questionId: q.id,
          isCorrect,
          category: q.category,
          isCritical: q.isCritical,
        };
      });

    if (batch.length > 0) {
      const updated = recordBatchQuestionsAnswered(batch);
      setPracticeProgress(updated);
    }

    setAppState('results');
    playSound('finish', isMuted);
  };

  const handleConfirmSubmit = () => {
    const answeredCount = Object.values(userAnswers).filter(
      (a) => a.selectedOptionIndices.length > 0
    ).length;

    if (answeredCount < questions.length) {
      setIsSubmitConfirmOpen(true);
    } else {
      finishExam();
    }
  };

  // Formato de tiempo MM:SS
  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentIndex];
  const currentAnswer = currentQ ? userAnswers[currentQ.id] : undefined;
  const selectedIndices = currentAnswer ? currentAnswer.selectedOptionIndices : [];

  const answeredTotal = useMemo(() => {
    return Object.values(userAnswers).filter((a) => a.selectedOptionIndices.length > 0).length;
  }, [userAnswers]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Navbar Superior Oficial */}
      <header className="bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-white border-b-2 border-blue-600 sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo y Título */}
          <div 
            onClick={() => setAppState('welcome')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-500 transition-colors">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white">
                  Simulador Clase B Chile
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                  280 Preguntas
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Banco Oficial CONASET con Imágenes y Preguntas Críticas
              </p>
            </div>
          </div>

          {/* Botones de Navegación Rápida */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setAppState('welcome')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                appState === 'welcome'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => setAppState('explorer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                appState === 'explorer'
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
              title="Explorar las 280 preguntas con soluciones e ilustraciones"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden md:inline">Banco 280 Preguntas</span>
              <span className="md:hidden">Banco 280</span>
            </button>

            <button
              onClick={() => setIsLegalModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              title="Instrucciones Legales"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Legal</span>
            </button>

            {/* Selector de Tema Claro/Oscuro/Auto */}
            <ThemeToggle />

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              title={isMuted ? 'Activar sonido' : 'Silenciar'}
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-slate-300" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:py-8 flex flex-col">
        {/* ============================================================== */}
        {/* PANTALLA 1: BIENVENIDA & INSTRUCCIONES OFICIALES */}
        {/* ============================================================== */}
        {appState === 'welcome' && (
          <div className="max-w-4xl mx-auto w-full space-y-8 animate-fade-in">
            {/* Header Hero */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-800">
              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  Base Oficial de 280 Preguntas con Imágenes
                </div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Examen Teórico Licencia Clase B Chile
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Prepárate con la base íntegra de <strong>280 preguntas oficiales</strong> con ilustraciones, señales de tránsito, preguntas críticas de doble puntaje (Alcohol, Velocidad, Seguridad Infantil) y la normativa vigente de la Ley de Tránsito 18.290 de CONASET.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={handleStartExam}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center gap-2 text-sm"
                  >
                    <span>Rendir Examen Oficial (35 Preguntas)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setAppState('explorer')}
                    className="px-6 py-3 bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-bold rounded-xl border border-slate-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Search className="w-4 h-4 text-blue-400" />
                    <span>Ver las 280 Preguntas</span>
                  </button>
                </div>
              </div>

              {/* Decorative vehicle graphic */}
              <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none hidden md:block">
                <Car className="w-72 h-72 text-white" />
              </div>
            </div>

            {/* Componente de Seguimiento de Progreso de Preguntas Únicas */}
            <UniqueProgressTracker
              progress={practiceProgress}
              onPracticeCategory={handleStartPractice}
              onPracticeUnanswered={handleStartPracticeUnanswered}
              onExploreBank={() => setAppState('explorer')}
              onResetProgress={handleResetPracticeProgress}
            />

            {/* Reglas Claves Oficiales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    35
                  </div>
                  <span>Preguntas y 45 Minutos</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  En el simulacro oficial se seleccionan 35 preguntas aleatorias del banco de 280. Tiempo límite: 45 minutos.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    3
                  </div>
                  <span>Preguntas Críticas (2 Pts)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  3 preguntas tienen <strong className="text-slate-800 dark:text-slate-100">doble puntaje</strong> obligatorio en temas críticos: Alcohol/Drogas, Velocidad y Retención Infantil.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    33
                  </div>
                  <span>Puntos para Aprobar</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  Total de 38 puntos en juego. Se exige un mínimo de <strong className="text-emerald-600 dark:text-emerald-400">33 puntos (86,8%)</strong> para aprobar el examen teórico.
                </p>
              </div>
            </div>

            {/* Historial de los Últimos 5 Exámenes (Guardado en localStorage) */}
            <RecentExamsSummary
              exams={recentExams}
              onStartExam={handleStartExam}
              onClearHistory={handleClearHistory}
            />

            {/* Selector de Modo Principal: 3 Tarjetas Claras */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {/* Tarjeta 1: Examen Oficial */}
              <div className="bg-white dark:bg-slate-900 border-2 border-blue-600 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-800">
                      Simulacro Oficial
                    </span>
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Modo Examen Real CONASET
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    Test estricto como en la Dirección de Tránsito: 35 preguntas aleatorias, 45 minutos cronometrados y entrega de informe con puntaje sobre 38 pts.
                  </p>
                </div>
                <button
                  onClick={handleStartExam}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>Iniciar Examen</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tarjeta 2: Modo Práctica Guiada */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                      Estudio Activo
                    </span>
                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Modo Práctica Guiada
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    Pregunta por pregunta con comprobación y retroalimentación inmediata, explicaciones técnicas y artículos de la Ley de Tránsito.
                  </p>
                </div>
                <button
                  onClick={() => handleStartPractice('all')}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>Practicar Ahora</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tarjeta 3: Explorador Banco 280 */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-800">
                      Banco Completo
                    </span>
                    <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Explorador 280 Preguntas
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    Consulta el cuestionario completo con buscador por texto o número (ej: #38, #142, #242), ilustraciones, soluciones oficiales y progreso de dominio.
                  </p>
                </div>
                <button
                  onClick={() => setAppState('explorer')}
                  className="w-full py-3 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <span>Explorar 280 Preguntas</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Accesos rápidos de estudio por categoría */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Práctica Directa por Temario Específico (280 Preguntas)
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleStartPractice('images')}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors flex items-center gap-1.5"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Preguntas con Ilustraciones y Señales</span>
                </button>
                <button
                  onClick={() => handleStartPractice('critical')}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors flex items-center gap-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Preguntas Críticas (Alcohol / Velocidad / SRI)</span>
                </button>
                <button
                  onClick={() => handleStartPractice('alcohol')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Alcohol, Drogas y Medicamentos
                </button>
                <button
                  onClick={() => handleStartPractice('velocidad')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Velocidad, Frenado y Detención
                </button>
                <button
                  onClick={() => handleStartPractice('infantil')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Sistemas Retención Infantil
                </button>
                <button
                  onClick={() => handleStartPractice('mecanica')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Mecánica y Mantenimiento
                </button>
                <button
                  onClick={() => handleStartPractice('senales')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Señales y Demarcaciones
                </button>
                <button
                  onClick={() => handleStartPractice('seguridad')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Seguridad y Convivencia Vial
                </button>
                <button
                  onClick={() => handleStartPractice('clima')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Clima Adverso y Noche
                </button>
                <button
                  onClick={() => handleStartPractice('accidentes')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Accidentes y Primeros Auxilios
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PANTALLA: EXPLORADOR DEL BANCO DE 280 PREGUNTAS */}
        {/* ============================================================== */}
        {appState === 'explorer' && (
          <Suspense fallback={<ComponentLoadingFallback />}>
            <QuestionBankExplorer onBackToHome={() => setAppState('welcome')} />
          </Suspense>
        )}

        {/* ============================================================== */}
        {/* PANTALLA 2: MODO EXAMEN OFICIAL (CONASET 35 PREGUNTAS) */}
        {/* ============================================================== */}
        {appState === 'exam' && currentQ && (
          <div className="w-full space-y-6 animate-fade-in flex flex-col flex-1">
            {/* Barra de Control y Temporizador */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Progreso */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  <span>
                    Pregunta {currentIndex + 1} de {questions.length}
                  </span>
                  <span>{answeredTotal} de {questions.length} respondidas</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Cronómetro y Entregar */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <div
                  className={`px-4 py-2 rounded-xl font-mono font-bold text-sm sm:text-base flex items-center gap-2 border ${
                    timeRemaining < 300
                      ? 'bg-rose-50 dark:bg-rose-950/70 border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 animate-pulse'
                      : timeRemaining < 600
                      ? 'bg-amber-50 dark:bg-amber-950/70 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300'
                      : 'bg-slate-900 dark:bg-slate-800 border-slate-800 dark:border-slate-700 text-white'
                  }`}
                  title="Tiempo restante para el examen"
                >
                  <Clock className="w-4 h-4" />
                  <span>{formatTimer(timeRemaining)}</span>
                </div>

                <button
                  onClick={handleConfirmSubmit}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Entregar Examen</span>
                </button>
              </div>
            </div>

            {/* Layout Principal: Pregunta + Navegador */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-start">
              {/* Tarjeta de la Pregunta */}
              <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col min-h-[500px]">
                <QuestionCard
                  question={currentQ}
                  currentIndex={currentIndex}
                  totalQuestions={questions.length}
                  selectedIndices={selectedIndices}
                  onSelectOption={handleSelectOption}
                  isChecked={false}
                  isPracticeMode={false}
                />

                {/* Botones de Navegación Anterior / Siguiente */}
                <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {currentIndex < questions.length - 1 ? (
                      <button
                        onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                        className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleConfirmSubmit}
                        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow transition-colors flex items-center gap-1.5"
                      >
                        <span>Finalizar Examen</span>
                        <Send className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Navegador Lateral de Preguntas */}
              <div className="lg:col-span-4 sticky top-20">
                <QuestionNavigator
                  questions={questions}
                  currentIndex={currentIndex}
                  userAnswers={userAnswers}
                  onSelectIndex={(idx) => setCurrentIndex(idx)}
                  onToggleFlag={handleToggleFlag}
                />
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PANTALLA 3: MODO PRÁCTICA / ESTUDIO GUIADO */}
        {/* ============================================================== */}
        {appState === 'practice' && currentQ && (
          <div className="max-w-3xl mx-auto w-full space-y-6 animate-fade-in flex flex-col flex-1">
            {/* Header de Modo Práctica */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-800 dark:text-white">
                    Modo Estudio Guiado
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Pregunta {currentIndex + 1} de {questions.length} · Retroalimentación inmediata
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
                <div 
                  className="hidden sm:flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 px-3 py-1.5 rounded-lg"
                  title="Preguntas únicas respondidas sobre el total de 280 oficiales"
                >
                  <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Cobertura: {practiceProgress.percentageAnswered}% ({practiceProgress.totalUniqueAnswered}/280)</span>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-200">
                  Aciertos: <span className="text-emerald-600 dark:text-emerald-400 font-bold">{practiceScore.correct}</span> / {practiceScore.total}
                </div>
                <button
                  onClick={() => setAppState('welcome')}
                  className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-colors"
                >
                  Salir
                </button>
              </div>
            </div>

            {/* Tarjeta de Pregunta en Modo Práctica */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col flex-1">
              <QuestionCard
                question={currentQ}
                currentIndex={currentIndex}
                totalQuestions={questions.length}
                selectedIndices={selectedIndices}
                onSelectOption={handleSelectOption}
                isChecked={practiceChecked}
                isPracticeMode={true}
                showExplanationsImmediately={true}
              />

              {/* Botones de Navegación en Práctica */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={handlePracticePrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                {!practiceChecked ? (
                  <button
                    onClick={handlePracticeCheck}
                    disabled={selectedIndices.length === 0}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                      selectedIndices.length === 0
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    }`}
                  >
                    Comprobar Respuesta
                  </button>
                ) : (
                  <button
                    onClick={handlePracticeNext}
                    className="px-8 py-3 rounded-xl font-bold text-sm bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-md transition-all flex items-center gap-2"
                  >
                    <span>{currentIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Comenzar Otra Ronda'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PANTALLA 4: RESULTADOS DETALLADOS DEL EXAMEN */}
        {/* ============================================================== */}
        {appState === 'results' && (
          <Suspense fallback={<ComponentLoadingFallback />}>
            <ExamResults
              questions={questions}
              userAnswers={userAnswers}
              timeSpentSeconds={TEST_DURATION_SECONDS - timeRemaining}
              examSessionId={examSessionId}
              onRestart={handleStartExam}
              onGoHome={() => setAppState('welcome')}
            />
          </Suspense>
        )}
      </main>

      {/* Modal de Confirmación si faltan preguntas por responder al entregar */}
      {isSubmitConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-7 h-7" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Preguntas sin responder
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Has respondido <strong className="text-slate-900 dark:text-white">{answeredTotal}</strong> de{' '}
              <strong className="text-slate-900 dark:text-white">{questions.length}</strong> preguntas. Tienes{' '}
              <strong className="text-rose-600 dark:text-rose-400">{questions.length - answeredTotal}</strong> preguntas en blanco que se computarán con 0 puntos.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aún te quedan <strong className="text-slate-800 dark:text-slate-200">{formatTimer(timeRemaining)}</strong> para completar el examen.
            </p>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setIsSubmitConfirmOpen(false)}
                className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-sm transition-colors"
              >
                Seguir respondiendo
              </button>
              <button
                onClick={finishExam}
                className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
              >
                Entregar de todos modos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Instrucciones Legales */}
      <LegalInstructionsModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />

      {/* Footer Oficial */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-6 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-300">Simulador Examen Teórico Clase B Chile</span>
            <span>·</span>
            <span>Base Oficial Completa de 280 Preguntas</span>
          </div>
          <div className="text-slate-400 dark:text-slate-500">
            Libro del Nuevo Conductor de CONASET · Ley de Tránsito 18.290 y Ley Tolerancia Cero
          </div>
        </div>
      </footer>
    </div>
    </ErrorBoundary>
  );
}
