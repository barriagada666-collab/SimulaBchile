import { QuestionCategory } from '../types/quiz';
import { QUESTION_BANK } from '../data/questions';

export const STORAGE_KEY_PRACTICE_PROGRESS = 'conaset_practice_unique_progress_v1';

export interface AnsweredQuestionRecord {
  questionId: number;
  timesAnswered: number;
  timesCorrect: number;
  lastAnsweredAt: string;
  lastIsCorrect: boolean;
  category: QuestionCategory;
  isCritical: boolean;
}

export interface CategoryProgressInfo {
  category: QuestionCategory;
  label: string;
  total: number;
  answered: number;
  correct: number;
  percentage: number;
}

export interface PracticeProgressState {
  answeredQuestions: Record<number, AnsweredQuestionRecord>;
  totalUniqueAnswered: number;
  totalQuestions: number; // 280
  percentageAnswered: number; // 0 - 100
  accuracyPercentage: number; // % correct among answered
  criticalAnswered: number;
  criticalTotal: number;
  criticalPercentage: number;
  remainingCount: number;
  categoryStats: Record<QuestionCategory, CategoryProgressInfo>;
  levelLabel: string;
  levelBadgeColor: string;
}

export const CATEGORY_METADATA: Record<QuestionCategory, { label: string; iconColor: string }> = {
  alcohol: { label: 'Alcohol, Drogas y Medicamentos', iconColor: 'text-amber-500' },
  velocidad: { label: 'Velocidad y Frenado', iconColor: 'text-rose-500' },
  infantil: { label: 'Sistemas Retención Infantil (SRI)', iconColor: 'text-indigo-500' },
  senales: { label: 'Señalización y Semáforos', iconColor: 'text-blue-500' },
  normativa: { label: 'Normas y Ley de Tránsito', iconColor: 'text-purple-500' },
  mecanica: { label: 'Mecánica y Mantenimiento', iconColor: 'text-slate-500' },
  seguridad: { label: 'Seguridad y Convivencia Vial', iconColor: 'text-emerald-500' },
  clima: { label: 'Clima Adverso y Noche', iconColor: 'text-sky-500' },
  accidentes: { label: 'Siniestros y Primeros Auxilios', iconColor: 'text-orange-500' },
};

/**
 * Carga el mapa de preguntas respondidas desde localStorage.
 */
export function loadPracticeRecords(): Record<number, AnsweredQuestionRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRACTICE_PROGRESS);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return parsed;
    }
  } catch (err) {
    console.error('Error al cargar progreso de práctica de localStorage:', err);
  }
  return {};
}

/**
 * Guarda los registros en localStorage de manera segura.
 */
function savePracticeRecords(records: Record<number, AnsweredQuestionRecord>): void {
  try {
    localStorage.setItem(STORAGE_KEY_PRACTICE_PROGRESS, JSON.stringify(records));
  } catch (err) {
    console.error('Error al guardar progreso de práctica:', err);
  }
}

/**
 * Registra una respuesta individual a una pregunta durante una sesión de práctica o simulacro.
 */
export function recordQuestionAnswered(
  questionId: number,
  isCorrect: boolean,
  category: QuestionCategory,
  isCritical: boolean
): PracticeProgressState {
  const records = loadPracticeRecords();
  const existing = records[questionId];

  records[questionId] = {
    questionId,
    timesAnswered: (existing?.timesAnswered || 0) + 1,
    timesCorrect: (existing?.timesCorrect || 0) + (isCorrect ? 1 : 0),
    lastAnsweredAt: new Date().toISOString(),
    lastIsCorrect: isCorrect,
    category,
    isCritical,
  };

  savePracticeRecords(records);
  return computePracticeProgress(records);
}

/**
 * Registra un lote de respuestas (por ejemplo al finalizar un examen completo de 35 preguntas).
 */
export function recordBatchQuestionsAnswered(
  batch: Array<{ questionId: number; isCorrect: boolean; category: QuestionCategory; isCritical: boolean }>
): PracticeProgressState {
  const records = loadPracticeRecords();

  batch.forEach(({ questionId, isCorrect, category, isCritical }) => {
    const existing = records[questionId];
    records[questionId] = {
      questionId,
      timesAnswered: (existing?.timesAnswered || 0) + 1,
      timesCorrect: (existing?.timesCorrect || 0) + (isCorrect ? 1 : 0),
      lastAnsweredAt: new Date().toISOString(),
      lastIsCorrect: isCorrect,
      category,
      isCritical,
    };
  });

  savePracticeRecords(records);
  return computePracticeProgress(records);
}

/**
 * Limpia y reinicia el progreso de preguntas únicas practicadas.
 */
export function resetPracticeProgress(): PracticeProgressState {
  try {
    localStorage.removeItem(STORAGE_KEY_PRACTICE_PROGRESS);
  } catch (err) {
    console.error('Error al reiniciar progreso de práctica:', err);
  }
  return computePracticeProgress({});
}

/**
 * Retorna la lista de IDs de preguntas que el usuario AÚN no ha respondido.
 */
export function getUnansweredQuestionIds(): number[] {
  const records = loadPracticeRecords();
  return QUESTION_BANK.filter((q) => !records[q.id]).map((q) => q.id);
}

/**
 * Calcula el estado consolidado de progreso sobre las 280 preguntas oficiales.
 */
export function computePracticeProgress(
  records: Record<number, AnsweredQuestionRecord> = loadPracticeRecords()
): PracticeProgressState {
  const totalQuestions = QUESTION_BANK.length; // 280
  const answeredIds = Object.keys(records).map(Number);
  const totalUniqueAnswered = answeredIds.length;
  const percentageAnswered = totalQuestions > 0 
    ? Math.round((totalUniqueAnswered / totalQuestions) * 100) 
    : 0;

  // Total preguntas críticas
  const criticalQuestions = QUESTION_BANK.filter((q) => q.isCritical);
  const criticalTotal = criticalQuestions.length;
  const criticalAnswered = criticalQuestions.filter((q) => records[q.id]).length;
  const criticalPercentage = criticalTotal > 0
    ? Math.round((criticalAnswered / criticalTotal) * 100)
    : 0;

  // Precisión (aciertos sobre las únicas respondidas)
  let totalCorrect = 0;
  answeredIds.forEach((id) => {
    if (records[id]?.lastIsCorrect) {
      totalCorrect++;
    }
  });
  const accuracyPercentage = totalUniqueAnswered > 0
    ? Math.round((totalCorrect / totalUniqueAnswered) * 100)
    : 0;

  // Desglose por categoría
  const categoryStats: Record<QuestionCategory, CategoryProgressInfo> = {} as any;
  const allCategories: QuestionCategory[] = [
    'alcohol',
    'velocidad',
    'infantil',
    'senales',
    'normativa',
    'mecanica',
    'seguridad',
    'clima',
    'accidentes',
  ];

  allCategories.forEach((cat) => {
    const questionsInCat = QUESTION_BANK.filter((q) => q.category === cat);
    const catTotal = questionsInCat.length;
    const catAnsweredQuestions = questionsInCat.filter((q) => records[q.id]);
    const catAnswered = catAnsweredQuestions.length;
    const catCorrect = catAnsweredQuestions.filter((q) => records[q.id]?.lastIsCorrect).length;
    const catPct = catTotal > 0 ? Math.round((catAnswered / catTotal) * 100) : 0;

    categoryStats[cat] = {
      category: cat,
      label: CATEGORY_METADATA[cat]?.label || cat,
      total: catTotal,
      answered: catAnswered,
      correct: catCorrect,
      percentage: catPct,
    };
  });

  // Nivel de preparación alcanzado
  let levelLabel = 'Conductor Principiante';
  let levelBadgeColor = 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';

  if (percentageAnswered >= 90) {
    levelLabel = '¡Listo para el Examen Oficial CONASET!';
    levelBadgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-700';
  } else if (percentageAnswered >= 70) {
    levelLabel = 'Conductor Avanzado (Dominio Alto)';
    levelBadgeColor = 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-700';
  } else if (percentageAnswered >= 40) {
    levelLabel = 'Conductor en Práctica Activa';
    levelBadgeColor = 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-700';
  } else if (percentageAnswered >= 15) {
    levelLabel = 'Iniciando Banco de Preguntas';
    levelBadgeColor = 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-700';
  }

  return {
    answeredQuestions: records,
    totalUniqueAnswered,
    totalQuestions,
    percentageAnswered,
    accuracyPercentage,
    criticalAnswered,
    criticalTotal,
    criticalPercentage,
    remainingCount: Math.max(0, totalQuestions - totalUniqueAnswered),
    categoryStats,
    levelLabel,
    levelBadgeColor,
  };
}
