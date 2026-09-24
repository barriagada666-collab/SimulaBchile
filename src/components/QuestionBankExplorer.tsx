import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Filter, CheckCircle2, XCircle, BookOpen, 
  ShieldAlert, Image as ImageIcon, Eye, EyeOff, Check, X,
  ChevronRight, Award, BookmarkCheck, RotateCcw
} from 'lucide-react';
import { Question, QuestionCategory } from '../types/quiz';
import { QUESTION_BANK } from '../data/questions';
import { TrafficIllustration } from './TrafficIllustration';

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  alcohol: 'Alcohol y Drogas',
  velocidad: 'Velocidad y Frenado',
  infantil: 'Sillas Infantiles / Seguridad',
  mecanica: 'Mecánica y Mantenimiento',
  normativa: 'Normativa y Ley de Tránsito',
  senales: 'Señalización y Semáforos',
  seguridad: 'Seguridad y Convivencia Vial',
  clima: 'Clima Adverso y Noche',
  accidentes: 'Accidentes y Primeros Auxilios',
};

const STORAGE_KEY_MASTERED = 'conaset_mastered_questions_v1';

export const QuestionBankExplorer: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [userSelections, setUserSelections] = useState<Record<number, number[]>>({});
  const [masteredIds, setMasteredIds] = useState<Record<number, boolean>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MASTERED);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Guardar en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED, JSON.stringify(masteredIds));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectOption = (q: Question, optionIdx: number) => {
    const current = userSelections[q.id] || [];
    let updated: number[];
    if (q.isMultiple) {
      updated = current.includes(optionIdx)
        ? current.filter((i) => i !== optionIdx)
        : [...current, optionIdx];
    } else {
      updated = [optionIdx];
    }
    setUserSelections((prev) => ({
      ...prev,
      [q.id]: updated,
    }));
  };

  const filteredQuestions = useMemo(() => {
    return QUESTION_BANK.filter((q) => {
      // Filtro de búsqueda por texto o número de pregunta
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase().trim();
        const matchesNumber = q.id.toString() === term || `pregunta ${q.id}`.includes(term);
        const matchesText = q.text.toLowerCase().includes(term);
        const matchesOptions = q.options.some((o) => o.text.toLowerCase().includes(term));
        if (!matchesNumber && !matchesText && !matchesOptions) return false;
      }

      // Filtro por tipo o categoría
      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'images') return Boolean(q.illustrationType);
      if (selectedFilter === 'critical') return q.isCritical;
      if (selectedFilter === 'mastered') return Boolean(masteredIds[q.id]);
      if (selectedFilter === 'pending') return !masteredIds[q.id];
      return q.category === selectedFilter;
    });
  }, [searchTerm, selectedFilter, masteredIds]);

  const masteredCount = Object.values(masteredIds).filter(Boolean).length;
  const masteredPercentage = Math.round((masteredCount / QUESTION_BANK.length) * 100);

  return (
    <div className="w-full space-y-6 animate-fade-in">
      {/* Top Banner & Mastery Progress */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <BookOpen className="w-4 h-4" />
            <span>Banco Oficial CONASET · 280 Preguntas Completas</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900">
            Explorador de Preguntas y Respuestas
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Revisa, practica y domina cada una de las 280 preguntas con su solución oficial y fundamentación jurídica.
          </p>
        </div>

        {/* Progress Card */}
        <div className="w-full md:w-auto bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
            {masteredPercentage}%
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">
              {masteredCount} de {QUESTION_BANK.length} Dominadas
            </div>
            <div className="w-36 bg-slate-200 h-2 rounded-full overflow-hidden mt-1.5">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${masteredPercentage}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Progreso guardado localmente
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por texto, número de pregunta (ej: '38', 'alcohol', 'velocidad', 'neumáticos')..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Borrar
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 text-xs">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas (280)
          </button>
          <button
            onClick={() => setSelectedFilter('images')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'images'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Con Imágenes / Señales</span>
          </button>
          <button
            onClick={() => setSelectedFilter('critical')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'critical'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Críticas (Doble Pts)</span>
          </button>
          <button
            onClick={() => setSelectedFilter('pending')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'pending'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Por Dominar ({QUESTION_BANK.length - masteredCount})
          </button>
          <button
            onClick={() => setSelectedFilter('mastered')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              selectedFilter === 'mastered'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            Dominadas ({masteredCount})
          </button>
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>Mostrando {filteredQuestions.length} de {QUESTION_BANK.length} preguntas</span>
          <button
            onClick={onBackToHome}
            className="text-blue-600 font-bold hover:underline"
          >
            ← Volver al Menú Principal
          </button>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="font-bold text-slate-800">No se encontraron preguntas</h3>
            <p className="text-xs text-slate-500">
              Intenta cambiar los términos de búsqueda o limpiar los filtros seleccionados.
            </p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isRevealed = Boolean(revealedIds[q.id]);
            const isMastered = Boolean(masteredIds[q.id]);
            const userAns = userSelections[q.id] || [];

            return (
              <div
                key={q.id}
                className={`bg-white border rounded-2xl p-5 sm:p-6 shadow-sm transition-all ${
                  isMastered ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200'
                }`}
              >
                {/* Header Card */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md">
                      Pregunta #{q.id}
                    </span>
                    <span className="text-slate-500 font-medium">
                      {CATEGORY_LABELS[q.category] || q.category}
                    </span>
                    {q.isCritical && (
                      <span className="text-amber-700 bg-amber-50 border border-amber-200 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3 text-amber-600" />
                        Crítica (2 Puntos)
                      </span>
                    )}
                    {q.illustrationType && (
                      <span className="text-blue-700 bg-blue-50 border border-blue-200 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-blue-600" />
                        Ilustración
                      </span>
                    )}
                  </div>

                  {/* Mastered Checkbox Button */}
                  <button
                    onClick={() => toggleMastered(q.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      isMastered
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <BookmarkCheck className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-700' : 'text-slate-400'}`} />
                    <span>{isMastered ? 'Dominada' : 'Marcar Dominada'}</span>
                  </button>
                </div>

                {/* Illustration if any */}
                {q.illustrationType && (
                  <div className="mb-5 flex justify-center">
                    <TrafficIllustration type={q.illustrationType} className="max-w-md w-full" />
                  </div>
                )}

                {/* Question Text */}
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-4 leading-snug">
                  {q.text}
                </h3>

                {/* Options List */}
                <div className="space-y-2.5 mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAns.includes(oIdx);
                    const isCorrect = opt.isCorrect;

                    let optStyle = 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
                    let markIcon = null;

                    if (isRevealed) {
                      if (isCorrect) {
                        optStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold ring-1 ring-emerald-500/20';
                        markIcon = <Check className="w-4 h-4 text-emerald-600 shrink-0" />;
                      } else if (isSelected && !isCorrect) {
                        optStyle = 'border-rose-300 bg-rose-50/50 text-rose-900';
                        markIcon = <X className="w-4 h-4 text-rose-500 shrink-0" />;
                      } else {
                        optStyle = 'border-slate-200 bg-slate-50/40 text-slate-400';
                      }
                    } else if (isSelected) {
                      optStyle = 'border-blue-600 bg-blue-50/70 text-blue-950 font-medium ring-1 ring-blue-600/20';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(q, oIdx)}
                        className={`w-full p-3 rounded-xl border text-left text-sm transition-all flex items-start justify-between gap-3 ${optStyle}`}
                      >
                        <span className="leading-relaxed">{opt.text}</span>
                        {markIcon}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Actions: Toggle Reveal Official Solution */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    {q.isMultiple ? 'Selección Múltiple (marcar todas las que apliquen)' : 'Selección Única'}
                  </span>

                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{isRevealed ? 'Ocultar Solución y Fundamento' : 'Ver Respuesta Oficial y Fundamento Legal'}</span>
                  </button>
                </div>

                {/* Explanation Box */}
                {isRevealed && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 animate-fade-in">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>Fundamentación Técnica y Legal Oficial CONASET</span>
                    </div>
                    <p className="leading-relaxed">{q.explanation}</p>
                    {q.legalReference && (
                      <div className="text-xs text-slate-500 font-semibold pt-1 border-t border-slate-200">
                        Referencia: <span className="text-slate-800">{q.legalReference}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
