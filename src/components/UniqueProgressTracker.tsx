import React, { useState } from 'react';
import { 
  Target, Award, BookOpen, ChevronRight, CheckCircle2, 
  Sparkles, Layers, ShieldAlert, RotateCcw, ChevronDown, 
  ChevronUp, BarChart2, Check, Zap
} from 'lucide-react';
import { 
  PracticeProgressState, 
  CategoryProgressInfo,
  CATEGORY_METADATA 
} from '../utils/practiceProgress';
import { QuestionCategory } from '../types/quiz';

interface UniqueProgressTrackerProps {
  progress: PracticeProgressState;
  onPracticeCategory?: (category: string) => void;
  onPracticeUnanswered?: () => void;
  onExploreBank?: () => void;
  onResetProgress?: () => void;
}

export const UniqueProgressTracker: React.FC<UniqueProgressTrackerProps> = ({
  progress,
  onPracticeCategory,
  onPracticeUnanswered,
  onExploreBank,
  onResetProgress,
}) => {
  const [isBreakdownExpanded, setIsBreakdownExpanded] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const {
    totalUniqueAnswered,
    totalQuestions,
    percentageAnswered,
    accuracyPercentage,
    criticalAnswered,
    criticalTotal,
    criticalPercentage,
    remainingCount,
    categoryStats,
    levelLabel,
    levelBadgeColor,
  } = progress;

  // Parámetros para el medidor circular SVG
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentageAnswered / 100) * circumference;

  const categoriesList = Object.values(categoryStats) as CategoryProgressInfo[];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 transition-colors">
      {/* Cabecera Principal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Progreso Acumulado de Práctica
              </h3>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${levelBadgeColor}`}>
                {levelLabel}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Porcentaje de preguntas únicas respondidas del banco oficial de 280 preguntas
            </p>
          </div>
        </div>

        {/* Acciones de Cabecera */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {onResetProgress && (
            <>
              {showConfirmReset ? (
                <div className="flex items-center gap-1.5 animate-fade-in">
                  <span className="text-xs text-slate-500 dark:text-slate-400 mr-1">¿Reiniciar progreso?</span>
                  <button
                    onClick={() => {
                      onResetProgress();
                      setShowConfirmReset(false);
                    }}
                    className="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Sí, reiniciar
                  </button>
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="px-2.5 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowConfirmReset(true)}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Reiniciar contador de progreso de práctica"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Hero Visual: Medidor Circular Central y KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Medidor Circular */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50/70 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80 rounded-2xl">
          <div className="relative flex items-center justify-center w-36 h-36">
            <svg className="w-full h-full transform -rotate-90">
              {/* Círculo de fondo */}
              <circle
                cx="72"
                cy="72"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth={10}
                className="text-slate-200 dark:text-slate-800"
              />
              {/* Círculo de progreso */}
              <circle
                cx="72"
                cy="72"
                r={radius}
                fill="transparent"
                stroke="url(#progressGradient)"
                strokeWidth={10}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>

            {/* Texto central */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {percentageAnswered}%
              </span>
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Completado
              </span>
            </div>
          </div>

          <div className="mt-2 text-center">
            <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
              {totalUniqueAnswered} de {totalQuestions}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              preguntas únicas practicadas
            </span>
          </div>
        </div>

        {/* 4 Mini Tarjetas de Métricas */}
        <div className="md:col-span-8 grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Preguntas Pendientes</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {remainingCount}{' '}
              <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                por descubrir
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {remainingCount === 0 ? '¡Has completado todo el banco oficial!' : 'Aún no vistas en práctica'}
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Efectividad de Aciertos</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {accuracyPercentage}%
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Respuestas correctas registradas
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Preguntas Críticas</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">
              {criticalAnswered}{' '}
              <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                / {criticalTotal} ({criticalPercentage}%)
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Alcohol, Velocidad y Retención Infantil
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Meta de Preparación</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {percentageAnswered >= 80 ? 'Excelente' : percentageAnswered >= 50 ? 'En Camino' : 'Por Iniciar'}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Recomendado: superar el 80% del banco
            </p>
          </div>
        </div>
      </div>

      {/* Barra de Hitos de Aprendizaje (Milestones) */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80 space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-300">
          <span>Camino de Dominio CONASET</span>
          <span className="text-blue-600 dark:text-blue-400">{percentageAnswered}% de 100%</span>
        </div>

        {/* Barra segmentada */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 transition-all duration-700 rounded-full"
            style={{ width: `${Math.min(100, percentageAnswered)}%` }}
          />
        </div>

        {/* Marcadores de Hitos */}
        <div className="grid grid-cols-4 text-[10px] text-slate-400 dark:text-slate-500 pt-1 font-medium text-center">
          <div className={percentageAnswered >= 25 ? 'text-blue-600 dark:text-blue-400 font-bold' : ''}>
            25% (70 preg.)
          </div>
          <div className={percentageAnswered >= 50 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>
            50% (140 preg.)
          </div>
          <div className={percentageAnswered >= 75 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}>
            75% (210 preg.)
          </div>
          <div className={percentageAnswered >= 100 ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
            100% (280 preg.)
          </div>
        </div>
      </div>

      {/* Desglose Expandible por las 9 Categorías Oficiales */}
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => setIsBreakdownExpanded((prev) => !prev)}
          className="w-full px-5 py-3.5 flex items-center justify-between text-left bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-100/60 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
            <BarChart2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Desglose por las 9 Áreas Temáticas del Examen</span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">
              ({categoriesList.length} categorías)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-semibold">
            <span>{isBreakdownExpanded ? 'Ocultar áreas' : 'Ver detalle por área'}</span>
            {isBreakdownExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {isBreakdownExpanded && (
          <div className="p-5 space-y-3.5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-fade-in">
            {categoriesList.map((catInfo) => {
              const meta = CATEGORY_METADATA[catInfo.category];
              return (
                <div key={catInfo.category} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {catInfo.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400 font-mono">
                        {catInfo.answered} / {catInfo.total} ({catInfo.percentage}%)
                      </span>
                      {onPracticeCategory && (
                        <button
                          onClick={() => onPracticeCategory(catInfo.category)}
                          className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline px-1.5 py-0.5 rounded hover:bg-blue-50 dark:hover:bg-blue-950"
                        >
                          Practicar
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        catInfo.percentage >= 80 
                          ? 'bg-emerald-500' 
                          : catInfo.percentage >= 50 
                          ? 'bg-blue-500' 
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${catInfo.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Botones de Acción Rápida */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          {remainingCount > 0 ? (
            <span>
              Tienes <strong className="text-slate-800 dark:text-slate-200">{remainingCount}</strong> preguntas que todavía no has respondido en tus prácticas.
            </span>
          ) : (
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              ✓ ¡Felicidades! Has respondido el 100% de las 280 preguntas oficiales.
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
          {remainingCount > 0 && onPracticeUnanswered && (
            <button
              onClick={onPracticeUnanswered}
              className="w-full sm:w-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              title="Practicar únicamente las preguntas que aún no has respondido"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Practicar No Vistas ({remainingCount})</span>
            </button>
          )}

          {onExploreBank && (
            <button
              onClick={onExploreBank}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Explorar las 280</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
