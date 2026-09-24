import React from 'react';
import { Bookmark, BookmarkCheck, CheckCircle2, Circle } from 'lucide-react';
import { UserAnswer, Question } from '../types/quiz';

interface QuestionNavigatorProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, UserAnswer>;
  onSelectIndex: (index: number) => void;
  onToggleFlag: (index: number) => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentIndex,
  userAnswers,
  onSelectIndex,
  onToggleFlag,
}) => {
  const answeredCount = Object.values(userAnswers).filter(
    (a) => a.selectedOptionIndices.length > 0
  ).length;

  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isCurrentFlagged = currentAnswer?.isFlaggedForReview || false;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
        <div>
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Navegador del Examen
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {answeredCount} de {questions.length} respondidas
          </p>
        </div>

        {/* Flag toggle button */}
        <button
          onClick={() => onToggleFlag(currentIndex)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
            isCurrentFlagged
              ? 'bg-amber-50 text-amber-800 border-amber-300'
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
          }`}
          title="Marcar pregunta para revisarla antes de entregar"
        >
          {isCurrentFlagged ? (
            <>
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Marcada</span>
            </>
          ) : (
            <>
              <Bookmark className="w-3.5 h-3.5 text-slate-400" />
              <span>Marcar duda</span>
            </>
          )}
        </button>
      </div>

      {/* Grid of 35 Questions */}
      <div className="grid grid-cols-7 sm:grid-cols-7 gap-2">
        {questions.map((q, idx) => {
          const ans = userAnswers[q.id];
          const isAnswered = ans && ans.selectedOptionIndices.length > 0;
          const isFlagged = ans?.isFlaggedForReview;
          const isCurrent = idx === currentIndex;

          let btnClasses =
            'relative h-9 rounded-lg text-xs font-bold transition-all flex items-center justify-center border ';

          if (isCurrent) {
            btnClasses += 'ring-2 ring-blue-600 border-blue-600 z-10 ';
          }

          if (isAnswered) {
            btnClasses += isCurrent
              ? 'bg-blue-600 text-white shadow-sm '
              : 'bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100 ';
          } else {
            btnClasses += isCurrent
              ? 'bg-slate-900 text-white shadow-sm '
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 ';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              className={btnClasses}
              title={`Ir a pregunta ${idx + 1}${q.isCritical ? ' (Doble puntaje)' : ''}`}
            >
              <span>{idx + 1}</span>

              {/* Little flag marker */}
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
              )}

              {/* Critical mark indicator */}
              {q.isCritical && (
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-500 rounded-full" title="Crítica (2 pts)" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-blue-100 border border-blue-300" />
          <span>Respondida</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" />
          <span>Pendiente</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span>Marcada p/revisar</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <span>Pregunta Crítica (2 pts)</span>
        </div>
      </div>
    </div>
  );
};
