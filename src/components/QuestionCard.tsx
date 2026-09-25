import React from 'react';
import { Question } from '../types/quiz';
import { TrafficIllustration } from './TrafficIllustration';
import { Check, X, ShieldAlert, BookOpen, AlertTriangle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedIndices: number[];
  onSelectOption: (optionIndex: number) => void;
  isChecked?: boolean;
  isPracticeMode?: boolean;
  showExplanationsImmediately?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedIndices,
  onSelectOption,
  isChecked = false,
  showExplanationsImmediately = false,
}) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Question Kicker & Clean Metadata (Zero-Pill Discipline) */}
      <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider">
            Pregunta {currentIndex + 1} de {totalQuestions}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
          {question.isCritical ? (
            <span className="text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Doble Puntaje (2 Pts · Crítica)
            </span>
          ) : (
            <span className="text-slate-600 dark:text-slate-400">Puntaje Normal (1 Pto)</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">
            {question.isMultiple ? 'Selección Múltiple (más de una correcta)' : 'Selección Única'}
          </span>
        </div>
      </div>

      {/* Traffic Illustration if applicable */}
      {question.illustrationType && (
        <div className="mb-6 flex justify-center">
          <TrafficIllustration type={question.illustrationType} className="max-w-md w-full" />
        </div>
      )}

      {/* Question Text */}
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-6">
        {question.text}
      </h2>

      {/* Options List */}
      <div className="space-y-3 mb-6" role="group" aria-label="Opciones de respuesta">
        {question.options.map((option, idx) => {
          const isSelected = selectedIndices.includes(idx);
          const isCorrect = option.isCorrect;

          let cardStyle = "border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/60";
          let indicatorStyle = "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-transparent";

          if (isChecked) {
            if (isSelected && isCorrect) {
              // Correctamente seleccionada
              cardStyle = "border-emerald-600 dark:border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-medium";
              indicatorStyle = "border-emerald-600 dark:border-emerald-500 bg-emerald-600 dark:bg-emerald-500 text-white";
            } else if (isSelected && !isCorrect) {
              // Incorrecta seleccionada por el usuario
              cardStyle = "border-rose-500 dark:border-rose-500 bg-rose-50/60 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200 font-medium";
              indicatorStyle = "border-rose-500 dark:border-rose-500 bg-rose-500 text-white";
            } else if (!isSelected && isCorrect) {
              // Correcta pero el usuario no la marcó
              cardStyle = "border-emerald-500 dark:border-emerald-500 border-dashed bg-emerald-50/30 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200";
              indicatorStyle = "border-emerald-500 dark:border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300";
            } else {
              // Incorrecta y no seleccionada
              cardStyle = "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500 opacity-60";
              indicatorStyle = "border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-transparent";
            }
          } else if (isSelected) {
            cardStyle = "border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 font-medium shadow-sm ring-1 ring-blue-600/20 dark:ring-blue-500/30";
            indicatorStyle = "border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500 text-white";
          }

          const indicatorShape = question.isMultiple ? 'rounded-md' : 'rounded-full';

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectOption(idx)}
              disabled={isChecked}
              className={`w-full min-h-[52px] p-4 text-left rounded-xl transition-all duration-150 flex items-start gap-3.5 focus-visible:outline-2 focus-visible:outline-blue-600 ${cardStyle}`}
            >
              {/* Custom Radio / Checkbox Indicator */}
              <div
                className={`w-5 h-5 shrink-0 mt-0.5 border-2 flex items-center justify-center transition-colors ${indicatorShape} ${indicatorStyle}`}
              >
                {isChecked && isCorrect && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                {isChecked && isSelected && !isCorrect && <X className="w-3.5 h-3.5 stroke-[3]" />}
                {!isChecked && isSelected && (
                  question.isMultiple ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )
                )}
              </div>

              {/* Text */}
              <span className="text-sm sm:text-base leading-relaxed select-none">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation Box (in Practice Mode or Review Mode when checked) */}
      {isChecked && showExplanationsImmediately && (
        <div className="mt-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 text-sm text-slate-800 dark:text-slate-200 animate-fade-in">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-2">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Fundamento Legal y Técnico</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            {question.explanation}
          </p>
          {question.legalReference && (
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              Referencia: <span className="text-slate-700 dark:text-slate-300 font-semibold">{question.legalReference}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
