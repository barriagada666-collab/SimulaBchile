import React, { useState } from 'react';
import { 
  History, Award, CheckCircle2, XCircle, Clock, ShieldAlert, 
  Trash2, ChevronRight, TrendingUp, AlertTriangle, Sparkles 
} from 'lucide-react';
import { TestHistoryItem } from '../types/quiz';
import { calculateExamHistoryStats } from '../utils/examHistory';

interface RecentExamsSummaryProps {
  exams: TestHistoryItem[];
  onStartExam: () => void;
  onClearHistory: () => void;
}

export const RecentExamsSummary: React.FC<RecentExamsSummaryProps> = ({
  exams,
  onStartExam,
  onClearHistory,
}) => {
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  // Considerar únicamente los últimos 5 exámenes
  const recentFive = exams.slice(0, 5);
  const stats = calculateExamHistoryStats(recentFive);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  if (recentFive.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm transition-colors">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Historial de Últimos 5 Exámenes
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Tus últimos 5 simulacros se guardarán automáticamente en tu navegador para medir tu evolución.
              </p>
            </div>
          </div>

          <button
            onClick={onStartExam}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
          >
            <span>Rendir Primer Examen</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 transition-colors">
      {/* Cabecera del Resumen */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
            <History className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                Historial de Últimos {recentFive.length} {recentFive.length === 1 ? 'Examen' : 'Exámenes'}
              </h3>
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                Guardado en Local
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Registro de puntajes oficiales sobre 38 puntos (mínimo legal de aprobación: 33 pts)
            </p>
          </div>
        </div>

        {/* Acciones de Cabecera */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {showConfirmClear ? (
            <div className="flex items-center gap-1.5 animate-fade-in">
              <span className="text-xs text-slate-500 dark:text-slate-400 mr-1">¿Borrar historial?</span>
              <button
                onClick={() => {
                  onClearHistory();
                  setShowConfirmClear(false);
                }}
                className="px-2.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Sí, borrar
              </button>
              <button
                onClick={() => setShowConfirmClear(false)}
                className="px-2.5 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirmClear(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Borrar historial de exámenes"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpiar</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 KPIs de Rendimiento Reciente */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
            Último Intento
          </span>
          <span className={`text-xl sm:text-2xl font-black ${
            stats.latestAttempt?.isApproved ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
          }`}>
            {stats.latestAttempt?.points ?? '-'} <span className="text-xs font-normal text-slate-400 dark:text-slate-500">/ 38 pts</span>
          </span>
          <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {stats.latestAttempt?.isApproved ? 'Aprobado ✓' : 'Reprobado ✗'}
          </span>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
            Promedio Reciente
          </span>
          <span className="text-xl sm:text-2xl font-black text-blue-700 dark:text-blue-400">
            {stats.avgPoints} <span className="text-xs font-normal text-slate-400 dark:text-slate-500">/ 38 pts</span>
          </span>
          <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Meta: 33 pts
          </span>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
            Tasa Aprobación
          </span>
          <span className={`text-xl sm:text-2xl font-black ${
            stats.passRate >= 80 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-200'
          }`}>
            {stats.passRate}%
          </span>
          <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {stats.approvedCount} de {stats.totalExams} aprobados
          </span>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
            Mejor Puntaje
          </span>
          <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {stats.bestPoints} <span className="text-xs font-normal text-slate-400 dark:text-slate-500">pts</span>
          </span>
          <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {Math.round((stats.bestPoints / 38) * 100)}% obtenido
          </span>
        </div>
      </div>

      {/* Lista Desglosada de los Últimos 5 Exámenes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
          <span>Desglose por Examen (últimos {recentFive.length})</span>
          <span>Corte de Aprobación: 33 pts</span>
        </div>

        <div className="space-y-2.5">
          {recentFive.map((exam, index) => {
            const isApproved = exam.isApproved;
            const isLatest = index === 0;

            return (
              <div
                key={exam.id || `exam-${index}`}
                className={`p-4 rounded-2xl border transition-all ${
                  isApproved
                    ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-900/60'
                    : 'bg-rose-50/30 dark:bg-rose-950/20 border-rose-200/80 dark:border-rose-900/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Info del intento */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isApproved
                        ? 'bg-emerald-100 dark:bg-emerald-900/70 text-emerald-700 dark:text-emerald-300'
                        : 'bg-rose-100 dark:bg-rose-900/70 text-rose-700 dark:text-rose-300'
                    }`}>
                      {isApproved ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                          Ensayo #{exam.attemptNumber}
                        </span>
                        {isLatest && (
                          <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                            Más reciente
                          </span>
                        )}
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                          {exam.date}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-300 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {formatDuration(exam.timeSpentSeconds)}
                        </span>
                        <span>·</span>
                        <span>{exam.correctAnswers}/{exam.totalQuestions} aciertos</span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-semibold">
                          <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          {exam.criticalCorrect}/3 críticas
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Puntaje y Badge */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80">
                    <div className="text-left sm:text-right">
                      <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {exam.points}{' '}
                        <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                          / 38 pts
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono">
                        {exam.percentage}%
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wide border ${
                      isApproved
                        ? 'bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                        : 'bg-rose-100/80 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-700'
                    }`}>
                      {isApproved ? 'Aprobado' : 'Reprobado'}
                    </span>
                  </div>
                </div>

                {/* Barra de progreso hacia la meta de 33 pts */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/50 dark:border-slate-800/60">
                  <div className="relative w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    {/* Barra rellena */}
                    <div
                      className={`h-full transition-all duration-500 ${
                        isApproved ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.min(100, (exam.points / 38) * 100)}%` }}
                    />
                  </div>
                  {/* Línea indicadora de corte en 33 pts (86.8%) */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                    <span>0 pts</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      Meta mínima: 33 pts (87%)
                    </span>
                    <span>38 pts</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botón inferior para iniciar nuevo examen */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          Rendir más simulacros baraja nuevas preguntas de las 280 oficiales para asegurar tu preparación.
        </p>
        <button
          onClick={onStartExam}
          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
        >
          <span>Rendir Nuevo Examen</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
