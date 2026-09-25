import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, XCircle, RotateCcw, Award, AlertTriangle, 
  Clock, ShieldAlert, BookOpen, ChevronDown, ChevronUp, ArrowRight,
  Filter, Check, X, TrendingUp, Sparkles, History, Trash2,
  Target, BarChart3
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { Question, UserAnswer, QuestionCategory, TestHistoryItem } from '../types/quiz';
import { TrafficIllustration } from './TrafficIllustration';

const STORAGE_KEY_HISTORY = 'conaset_exam_history';

interface ExamResultsProps {
  questions: Question[];
  userAnswers: Record<number, UserAnswer>;
  timeSpentSeconds: number;
  examSessionId?: string;
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

type MetricType = 'points' | 'percentage' | 'correctAnswers';

export const ExamResults: React.FC<ExamResultsProps> = ({
  questions,
  userAnswers,
  timeSpentSeconds,
  examSessionId,
  onRestart,
  onGoHome,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<'all' | 'mistakes' | 'critical'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState<MetricType>('points');
  const [showDemoTrend, setShowDemoTrend] = useState<boolean>(false);
  const [history, setHistory] = useState<TestHistoryItem[]>([]);
  const [showConfirmClear, setShowConfirmClear] = useState<boolean>(false);

  const currentExamId = useMemo(() => examSessionId || `exam-${Date.now()}`, [examSessionId]);

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

  // Registrar y cargar historial en localStorage
  useEffect(() => {
    let savedHistory: TestHistoryItem[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (raw) {
        savedHistory = JSON.parse(raw);
      }
    } catch {
      savedHistory = [];
    }

    const currentAttempt: TestHistoryItem = {
      id: currentExamId,
      attemptNumber: savedHistory.length + 1,
      points: totalScore,
      percentage,
      correctAnswers: correctCount,
      criticalCorrect,
      totalQuestions: questions.length,
      isApproved,
      date: new Date().toLocaleDateString('es-CL', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      }),
      timeSpentSeconds,
    };

    const existingIndex = savedHistory.findIndex((item) => item.id === currentExamId);
    let updatedHistory: TestHistoryItem[];
    if (existingIndex >= 0) {
      updatedHistory = [...savedHistory];
      updatedHistory[existingIndex] = {
        ...currentAttempt,
        attemptNumber: existingIndex + 1,
      };
    } else {
      updatedHistory = [...savedHistory, currentAttempt];
    }

    // Re-index attempt numbers
    updatedHistory = updatedHistory.map((item, idx) => ({
      ...item,
      attemptNumber: idx + 1,
    }));

    try {
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(updatedHistory));
    } catch {
      // ignore localstorage quota errors
    }
    setHistory(updatedHistory);
  }, [currentExamId, totalScore, percentage, correctCount, criticalCorrect, questions.length, isApproved, timeSpentSeconds]);

  // Limpiar historial
  const handleClearHistory = () => {
    try {
      const currentAttemptOnly: TestHistoryItem = {
        id: currentExamId,
        attemptNumber: 1,
        points: totalScore,
        percentage,
        correctAnswers: correctCount,
        criticalCorrect,
        totalQuestions: questions.length,
        isApproved,
        date: new Date().toLocaleDateString('es-CL', {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        }),
        timeSpentSeconds,
      };
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify([currentAttemptOnly]));
      setHistory([currentAttemptOnly]);
      setShowConfirmClear(false);
      setShowDemoTrend(false);
    } catch {
      // ignore
    }
  };

  // Datos para el gráfico (Reales o Simulación Demo)
  const chartData = useMemo(() => {
    if (showDemoTrend) {
      // 5 rondas simulando curva de aprendizaje con el intento actual como último
      return [
        {
          id: 'demo-1',
          attemptNumber: 1,
          points: 24,
          percentage: 63,
          correctAnswers: 22,
          criticalCorrect: 1,
          totalQuestions: 35,
          isApproved: false,
          date: 'Ensayo #1',
          timeSpentSeconds: 2400,
          displayLabel: 'Ronda 1',
        },
        {
          id: 'demo-2',
          attemptNumber: 2,
          points: 28,
          percentage: 74,
          correctAnswers: 26,
          criticalCorrect: 2,
          totalQuestions: 35,
          isApproved: false,
          date: 'Ensayo #2',
          timeSpentSeconds: 2150,
          displayLabel: 'Ronda 2',
        },
        {
          id: 'demo-3',
          attemptNumber: 3,
          points: 31,
          percentage: 82,
          correctAnswers: 29,
          criticalCorrect: 2,
          totalQuestions: 35,
          isApproved: false,
          date: 'Ensayo #3',
          timeSpentSeconds: 1980,
          displayLabel: 'Ronda 3',
        },
        {
          id: 'demo-4',
          attemptNumber: 4,
          points: 34,
          percentage: 89,
          correctAnswers: 31,
          criticalCorrect: 3,
          totalQuestions: 35,
          isApproved: true,
          date: 'Ensayo #4',
          timeSpentSeconds: 1840,
          displayLabel: 'Ronda 4',
        },
        {
          id: currentExamId,
          attemptNumber: 5,
          points: totalScore,
          percentage,
          correctAnswers: correctCount,
          criticalCorrect,
          totalQuestions: questions.length,
          isApproved,
          date: 'Este Intento',
          timeSpentSeconds,
          displayLabel: 'Actual (Tú)',
        },
      ];
    }

    return history.map((item) => ({
      ...item,
      displayLabel: `Test #${item.attemptNumber}`,
    }));
  }, [showDemoTrend, history, currentExamId, totalScore, percentage, correctCount, criticalCorrect, questions.length, isApproved, timeSpentSeconds]);

  // Métricas agregadas
  const aggregateStats = useMemo(() => {
    const list = chartData;
    if (list.length === 0) {
      return { avgPoints: totalScore, bestPoints: totalScore, passRate: isApproved ? 100 : 0, delta: 0 };
    }
    const sumPoints = list.reduce((acc, curr) => acc + curr.points, 0);
    const avgPoints = Math.round((sumPoints / list.length) * 10) / 10;
    const bestPoints = Math.max(...list.map((i) => i.points));
    const approvedCount = list.filter((i) => i.isApproved).length;
    const passRate = Math.round((approvedCount / list.length) * 100);
    const firstAttemptPoints = list[0].points;
    const lastAttemptPoints = list[list.length - 1].points;
    const delta = lastAttemptPoints - firstAttemptPoints;

    return { avgPoints, bestPoints, passRate, delta };
  }, [chartData, totalScore, isApproved]);

  // Configuración de la métrica en el gráfico
  const metricConfig = useMemo(() => {
    switch (activeMetric) {
      case 'points':
        return {
          title: 'Puntaje Oficial',
          yUnit: 'pts',
          domain: [0, 38] as [number, number],
          threshold: 33,
          thresholdLabel: 'Meta Legal CONASET: 33 pts',
          dataKey: 'points',
        };
      case 'percentage':
        return {
          title: 'Porcentaje de Rendimiento',
          yUnit: '%',
          domain: [0, 100] as [number, number],
          threshold: 87,
          thresholdLabel: 'Aprobación: 87% (33 pts)',
          dataKey: 'percentage',
        };
      case 'correctAnswers':
        return {
          title: 'Preguntas Correctas',
          yUnit: 'aciertos',
          domain: [0, 35] as [number, number],
          threshold: 30,
          thresholdLabel: 'Meta Sugerida: 30+ aciertos',
          dataKey: 'correctAnswers',
        };
    }
  }, [activeMetric]);

  // Custom Dot para Recharts
  const renderCustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (cx == null || cy == null) return null;
    const itemApproved = payload?.isApproved;
    const isCurrent = payload?.id === currentExamId;
    return (
      <g key={`dot-${payload?.id || cx}-${payload?.attemptNumber}`}>
        {isCurrent && (
          <circle
            cx={cx}
            cy={cy}
            r={10}
            fill="none"
            stroke={itemApproved ? '#10b981' : '#f43f5e'}
            strokeWidth={2}
            opacity={0.5}
          />
        )}
        <circle
          cx={cx}
          cy={cy}
          r={isCurrent ? 6 : 4.5}
          fill={itemApproved ? '#10b981' : '#f43f5e'}
          stroke="#ffffff"
          strokeWidth={2}
        />
      </g>
    );
  };

  // Custom Tooltip para Recharts
  const CustomChartTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-3.5 rounded-xl shadow-2xl border border-slate-700 text-xs min-w-[210px] z-50">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
            <span className="font-bold text-slate-100">{item.displayLabel}</span>
            <span className="text-[10px] text-slate-400 font-mono">{item.date}</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Puntaje Obtenido:</span>
              <span className="font-bold text-sm text-white">{item.points} / 38 pts</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Porcentaje:</span>
              <span className="font-semibold text-white">{item.percentage}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Aciertos:</span>
              <span className="text-slate-200">{item.correctAnswers} / 35 preguntas</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Críticas (2 pts):</span>
              <span className="text-amber-400 font-medium">{item.criticalCorrect} / 3</span>
            </div>
            {item.timeSpentSeconds > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Tiempo:</span>
                <span className="text-slate-300">
                  {Math.floor(item.timeSpentSeconds / 60)}m {item.timeSpentSeconds % 60}s
                </span>
              </div>
            )}
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-[11px]">Calificación:</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                item.isApproved
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}
            >
              {item.isApproved ? 'Aprobado (>=33)' : 'Reprobado (<33)'}
            </span>
          </div>
        </div>
      );
    }
    return null;
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
              strokeWidth={12}
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth={12}
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

      {/* ========================================================================= */}
      {/* GRÁFICO DE LÍNEAS CON RECHARTS: TENDENCIA DE RENDIMIENTO ENTRE ENSAYOS    */}
      {/* ========================================================================= */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Cabecera del Gráfico con Controles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Tendencia de Rendimiento Histórico
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Evolución de tus calificaciones a través de las rondas de práctica y simulacros oficiales
            </p>
          </div>

          {/* Selector de Métrica */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveMetric('points')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeMetric === 'points'
                  ? 'bg-white text-blue-700 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Puntaje (38 pts)
            </button>
            <button
              onClick={() => setActiveMetric('percentage')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeMetric === 'percentage'
                  ? 'bg-white text-blue-700 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Porcentaje (%)
            </button>
            <button
              onClick={() => setActiveMetric('correctAnswers')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeMetric === 'correctAnswers'
                  ? 'bg-white text-blue-700 shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Aciertos (35)
            </button>
          </div>
        </div>

        {/* KPIs Resumen de Ensayos Múltiples */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Total Ensayos
            </span>
            <span className="text-lg font-black text-slate-900">
              {chartData.length} <span className="text-xs font-normal text-slate-500">rendidos</span>
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Promedio Histórico
            </span>
            <span className="text-lg font-black text-blue-700">
              {aggregateStats.avgPoints} <span className="text-xs font-normal text-slate-500">/ 38 pts</span>
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Mejor Puntaje
            </span>
            <span className="text-lg font-black text-emerald-700">
              {aggregateStats.bestPoints} <span className="text-xs font-normal text-slate-500">pts</span>
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Tasa Aprobación
            </span>
            <span className="text-lg font-black text-slate-900">
              {aggregateStats.passRate}%
            </span>
          </div>
        </div>

        {/* Visualización de la Línea Recharts */}
        <div className="w-full h-72 sm:h-80 pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 15, right: 25, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis
                dataKey="displayLabel"
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              <YAxis
                domain={metricConfig.domain}
                stroke="#64748b"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: '#cbd5e1' }}
                unit={activeMetric === 'percentage' ? '%' : ''}
              />
              <Tooltip content={<CustomChartTooltip />} />
              <ReferenceLine
                y={metricConfig.threshold}
                stroke="#10b981"
                strokeDasharray="4 4"
                strokeWidth={2}
                label={{
                  value: metricConfig.thresholdLabel,
                  fill: '#059669',
                  fontSize: 11,
                  fontWeight: 600,
                  position: 'insideTopRight',
                  offset: 8,
                }}
              />
              <Line
                type="monotone"
                dataKey={metricConfig.dataKey}
                name={metricConfig.title}
                stroke="#2563eb"
                strokeWidth={3}
                dot={renderCustomDot}
                activeDot={{
                  r: 8,
                  fill: '#1d4ed8',
                  stroke: '#ffffff',
                  strokeWidth: 3,
                }}
                animationDuration={900}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Leyenda y Acciones de Historial */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block border-2 border-white shadow-sm" />
              Examen Aprobado (≥33 pts)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block border-2 border-white shadow-sm" />
              Examen Reprobado (&lt;33 pts)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-5 h-0.5 border-t-2 border-dashed border-emerald-500 inline-block" />
              Umbral mínimo legal CONASET
            </span>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Botón para Simular Curva de Aprendizaje si el usuario lleva pocos intentos */}
            <button
              onClick={() => setShowDemoTrend(!showDemoTrend)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                showDemoTrend
                  ? 'bg-blue-50 border-blue-300 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Simula 5 rondas para observar la curva de aprendizaje acumulativa"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{showDemoTrend ? 'Ver Mis Intentos Reales' : 'Simular 5 Rondas (Demo)'}</span>
            </button>

            {/* Botón Limpiar Historial */}
            {history.length > 1 && !showDemoTrend && (
              <>
                {showConfirmClear ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleClearHistory}
                      className="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Confirmar
                    </button>
                    <button
                      onClick={() => setShowConfirmClear(false)}
                      className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowConfirmClear(true)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
                    title="Reiniciar historial guardado"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mensaje de Consejo según Tendencia */}
        <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-950 flex items-start gap-2.5">
          <Target className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Estrategia de Preparación CONASET:</span>{' '}
            {aggregateStats.avgPoints >= 33 ? (
              <span>
                ¡Consistencia destacada! Tu promedio está por encima de los 33 puntos requeridos. Mantener esta regularidad en diferentes bancos barajados garantiza alta probabilidad de éxito en el examen municipal real.
              </span>
            ) : chartData.length > 1 && aggregateStats.delta > 0 ? (
              <span>
                Curva ascendente positiva (+{aggregateStats.delta} puntos respecto a tu primer ensayo). Continúa rindiendo exámenes de 35 preguntas para afianzar las 280 preguntas oficiales y no descuidar las 3 críticas de doble puntaje.
              </span>
            ) : (
              <span>
                Cada nuevo simulacro selecciona aleatoriamente 35 preguntas de las 280 oficiales (3 con puntuación doble). Rinde al menos 3 a 5 rondas para visualizar tu curva de mejora en este gráfico.
              </span>
            )}
          </div>
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
