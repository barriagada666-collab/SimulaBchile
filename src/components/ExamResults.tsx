import React, { useState } from 'react';
import { 
  CheckCircle2, XCircle, RotateCcw, Award, AlertTriangle, 
  Clock, ShieldAlert, BookOpen, ChevronDown, ChevronUp, ArrowRight,
  Filter, Check, X
} from 'lucide-react';
import { Question, UserAnswer, QuestionCategory } from '../types/quiz';
import { TrafficIllustration } from './TrafficIllustration';

interface ExamResultsProps {
  questions: Question[];
  userAnswers: Record<number, UserAnswer>;
  timeSpentSeconds: number;
  onRestart: () => void;
  onGoHome: () => void;
}

const CATEGORY_NAMES: Record<QuestionCategory, string> = {
  alcohol: 'Alcohol y Drogas (Crítica)',
  velocidad: 'Velocidad y Frenado (Crítica)',
  infantil: 'Sistemas Retención Infantil (Crítica)',
  mecanica: 'Mecánica y Mantenimiento',
  normativa: 'Normas y Ley de Tránsito',
  senales: 'Señalización y Semáforos',
  seguridad: 'Seguridad Vial y Conducta',
  clima: 'Clima y Conducción Nocturna',
  accidentes: 'Siniestros y Primeros Auxilios',
};

export const ExamResults: React.FC<ExamResultsProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  onRestart,
  onGoHome,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<'all' | 'mistakes' | 'critical'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  // Calcular puntajes oficiales CONASET
  let totalScore = 0;
  let correctCount = 0;
  let criticalTotal = 0;
  let criticalCorrect = 0;
  let criticalScoreEarned = 0;

  const mistakes: { question: Question; userAnswer: UserAnswer }[] = [];

  const categoryStats: Record<string, { total: number; correct: number; points: number; maxPoints: number }> = {};

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    const selected = ans ? ans.selectedOptionIndices : [];
    const correctIndices = q.options.map((opt, i) => (opt.isCorrect ? i : -1)).filter((i) => i !== -1);

    const isFullyCorrect =
      correctIndices.length === selected.length &&
      selected.every((idx) => correctIndices.includes(idx));

    if (q.isCritical) {
      criticalTotal++;
      if (isFullyCorrect) {
        criticalCorrect++;
        criticalScoreEarned += 2;
      }
    }

    if (isFullyCorrect) {
      totalScore += q.points;
      correctCount++;
    } else {
      mistakes.push({ question: q, userAnswer: ans || { questionId: q.id, selectedOptionIndices: [] } });
    }

    // Category stats
    const cat = q.category;
    if (!categoryStats[cat]) {
      categoryStats[cat] = { total: 0, correct: 0, points: 0, maxPoints: 0 };
    }
    categoryStats[cat].total++;
    categoryStats[cat].maxPoints += q.points;
    if (isFullyCorrect) {
      categoryStats[cat].correct++;
      categoryStats[cat].points += q.points;
    }
  });

  const isApproved = totalScore >= 33;
  const percentage = Math.round((totalScore / 38) * 100);

  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const formatMinutes = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  // Filtrado para la revisión detallada
  const filteredQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id];
    const selected = ans ? ans.selectedOptionIndices : [];
    const correctIndices = q.options.map((opt, i) => (opt.isCorrect ? i : -1)).filter((i) => i !== -1);
    const isCorrect = correctIndices.length === selected.length && selected.every((i) => correctIndices.includes(i));

    if (selectedCategoryFilter === 'mistakes') return !isCorrect;
    if (selectedCategoryFilter === 'critical') return q.isCritical;
    return true;
  });

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Banner Principal de Resultado */}
      <div
        className={`rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 ${
          isApproved
            ? 'bg-gradient-to-r from-emerald-600 to-teal-700'
            : 'bg-gradient-to-r from-rose-600 to-red-700'
        }`}
      >
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {isApproved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>Examen Oficial Aprobado</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-200" />
                <span>Examen Oficial Reprobado</span>
              </>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {isApproved ? '¡FELICITACIONES, APROBADO!' : 'NO ALCANZASTE EL PUNTAJE'}
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-lg leading-relaxed">
            {isApproved
              ? 'Has superado el puntaje mínimo legal de 33 puntos exigido por la Ley de Tránsito y CONASET para la Licencia Clase B.'
              : 'Se exige un mínimo legal de 33 puntos para aprobar (has obtenido ' +
                totalScore +
                ' pts). Revisa tus errores y vuelve a intentarlo con un nuevo test barajado.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-white/90 font-medium justify-center md:justify-start">
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5" />
              Tiempo: {formatMinutes(timeSpentSeconds)} de 45m
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
              Críticas: {criticalCorrect}/{criticalTotal} correctas ({criticalScoreEarned}/6 pts)
            </span>
          </div>
        </div>

        {/* Circular Donut Gauge */}
        <div className="relative flex items-center justify-center w-40 h-40 shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="12"
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-3xl sm:text-4xl font-black text-white">{totalScore}</span>
            <span className="text-xs uppercase font-bold text-white/80">/ 38 Puntos</span>
            <span className="text-[11px] text-white/70 font-mono mt-0.5">{percentage}%</span>
          </div>
        </div>
      </div>

      {/* Tarjetas de Estadísticas Clave */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Puntaje Final
          </span>
          <span className="text-2xl font-black text-slate-900">
            {totalScore} <span className="text-sm font-normal text-slate-400">/ 38</span>
          </span>
          <span className="block text-[11px] text-slate-500 mt-1">Mínimo: 33 pts</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Respuestas Correctas
          </span>
          <span className="text-2xl font-black text-emerald-600">
            {correctCount} <span className="text-sm font-normal text-slate-400">/ 35</span>
          </span>
          <span className="block text-[11px] text-slate-500 mt-1">Preguntas acertadas</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Preguntas Eradas
          </span>
          <span className="text-2xl font-black text-rose-600">
            {35 - correctCount} <span className="text-sm font-normal text-slate-400">/ 35</span>
          </span>
          <span className="block text-[11px] text-slate-500 mt-1">Para reforzar</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Preguntas Críticas
          </span>
          <span className="text-2xl font-black text-amber-600">
            {criticalCorrect} <span className="text-sm font-normal text-slate-400">/ 3</span>
          </span>
          <span className="block text-[11px] text-slate-500 mt-1">Doble puntaje</span>
        </div>
      </div>

      {/* Desglose por Temas Oficiales */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          Rendimiento por Categoría Temática
        </h3>
        <div className="space-y-4">
          {Object.entries(categoryStats).map(([category, stats]) => {
            const catName = CATEGORY_NAMES[category as QuestionCategory] || category;
            const catPct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={category} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{catName}</span>
                  <span>
                    {stats.correct}/{stats.total} ({catPct}%) · {stats.points}/{stats.maxPoints} pts
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      catPct >= 80 ? 'bg-emerald-500' : catPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${catPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controles de Acción (Reintentar / Menú) */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={onRestart}
          className="w-full sm:w-auto flex-1 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-base"
        >
          <RotateCcw className="w-5 h-5" />
          Rendir un Nuevo Examen Barajado
        </button>
        <button
          onClick={onGoHome}
          className="w-full sm:w-auto py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors text-base"
        >
          Volver a Instrucciones
        </button>
      </div>

      {/* Revisión Detallada de Preguntas */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Revisión Detallada de Respuestas
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Analiza las justificaciones legales y técnicas de CONASET
            </p>
          </div>

          {/* Filtros de Revisión */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setSelectedCategoryFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategoryFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas (35)
            </button>
            <button
              onClick={() => setSelectedCategoryFilter('mistakes')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategoryFilter === 'mistakes'
                  ? 'bg-rose-50 text-rose-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Errores ({mistakes.length})
            </button>
            <button
              onClick={() => setSelectedCategoryFilter('critical')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategoryFilter === 'critical'
                  ? 'bg-amber-50 text-amber-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Críticas (3)
            </button>
          </div>
        </div>

        {/* Lista de Preguntas con Acordeón */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No hay preguntas que coincidan con este filtro.
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const ans = userAnswers[q.id];
              const selected = ans ? ans.selectedOptionIndices : [];
              const correctIndices = q.options
                .map((opt, i) => (opt.isCorrect ? i : -1))
                .filter((i) => i !== -1);
              const isCorrect =
                correctIndices.length === selected.length &&
                selected.every((i) => correctIndices.includes(i));

              const isExpanded = expandedQuestionId === q.id;

              return (
                <div
                  key={q.id}
                  className={`border rounded-xl transition-colors overflow-hidden ${
                    isCorrect
                      ? 'border-emerald-200 bg-emerald-50/20'
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="w-full p-4 flex items-start justify-between gap-4 text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                          <span>Pregunta #{idx + 1}</span>
                          <span>·</span>
                          <span>{q.points} {q.points === 1 ? 'Punto' : 'Puntos'}</span>
                          {q.isCritical && (
                            <>
                              <span>·</span>
                              <span className="text-amber-700 font-bold">Crítica</span>
                            </>
                          )}
                        </div>
                        <p className="text-sm font-bold text-slate-800 leading-snug">
                          {q.text}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-slate-400 mt-1">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Detalle Desplegable */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                      {q.illustrationType && (
                        <div className="pt-2 flex justify-center">
                          <TrafficIllustration type={q.illustrationType} className="max-w-xs" />
                        </div>
                      )}

                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => {
                          const wasChosen = selected.includes(oIdx);
                          const isRight = opt.isCorrect;

                          let optionBoxStyle = 'border-slate-200 bg-white text-slate-600';
                          if (wasChosen && isRight) {
                            optionBoxStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                          } else if (wasChosen && !isRight) {
                            optionBoxStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-semibold';
                          } else if (!wasChosen && isRight) {
                            optionBoxStyle = 'border-emerald-400 border-dashed bg-emerald-50/40 text-emerald-900';
                          }

                          return (
                            <div
                              key={oIdx}
                              className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 ${optionBoxStyle}`}
                            >
                              <div className="mt-0.5 shrink-0">
                                {isRight ? (
                                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                                ) : wasChosen ? (
                                  <X className="w-4 h-4 text-rose-600 stroke-[3]" />
                                ) : (
                                  <div className="w-4 h-4 rounded-full border border-slate-300" />
                                )}
                              </div>
                              <div className="flex-1">
                                <span>{opt.text}</span>
                                {wasChosen && !isRight && (
                                  <span className="ml-2 text-rose-600 font-bold text-xs">
                                    (Tu respuesta incorrecta)
                                  </span>
                                )}
                                {wasChosen && isRight && (
                                  <span className="ml-2 text-emerald-600 font-bold text-xs">
                                    (Respuesta correcta elegida)
                                  </span>
                                )}
                                {!wasChosen && isRight && (
                                  <span className="ml-2 text-emerald-600 font-bold text-xs">
                                    (Respuesta correcta omitida)
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explicación Legal */}
                      <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-800 leading-relaxed">
                        <div className="flex items-center gap-1.5 font-bold text-blue-950 mb-1">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>Fundamento CONASET</span>
                        </div>
                        <p>{q.explanation}</p>
                        {q.legalReference && (
                          <p className="mt-1.5 font-semibold text-blue-800">
                            Base Legal: {q.legalReference}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
