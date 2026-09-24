import { Question, QuestionCategory } from '../types/quiz';
import { QUESTIONS_PART_1 } from './questions_part1';
import { QUESTIONS_PART_2 } from './questions_part2';
import { QUESTIONS_PART_3 } from './questions_part3';
import { QUESTIONS_PART_4 } from './questions_part4';

// Consolidación de las 280 preguntas oficiales de CONASET Clase B
const ALL_RAW_QUESTIONS = [
  ...QUESTIONS_PART_1,
  ...QUESTIONS_PART_2,
  ...QUESTIONS_PART_3,
  ...QUESTIONS_PART_4
];

export const QUESTION_BANK: Question[] = ALL_RAW_QUESTIONS.map((q) => ({
  id: q.id,
  conasetId: q.conasetId,
  text: q.text,
  options: q.options,
  isMultiple: q.isMultiple,
  category: q.category,
  isCritical: q.isCritical,
  points: q.isCritical ? 2 : 1,
  explanation: q.explanation,
  legalReference: q.legalReference,
  illustrationType: q.illustrationType as any,
}));

// Helper Fisher-Yates para barajar sin sesgo
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Algoritmo oficial CONASET para examen de 35 preguntas:
// - Selecciona 3 preguntas críticas (Alcohol, Velocidad, Sistemas de Retención Infantil) -> 2 puntos c/u (6 pts)
// - Selecciona 32 preguntas estándar -> 1 punto c/u (32 pts)
// - Total preguntas: 35
// - Puntaje máximo: 38 puntos
// - Aprobación oficial: mínimo 33 puntos (86,8%)
// - Opciones barajadas dinámicamente para evitar memorización mecánica de letras
export function generateConasetExam(): Question[] {
  const criticalPool = QUESTION_BANK.filter((q) => q.isCritical);
  const standardPool = QUESTION_BANK.filter((q) => !q.isCritical);

  const selectedCritical = shuffleArray(criticalPool).slice(0, 3);
  const selectedStandard = shuffleArray(standardPool).slice(0, 32);

  const examSet = shuffleArray([...selectedCritical, ...selectedStandard]);

  return examSet.map((q) => ({
    ...q,
    options: shuffleArray(q.options),
  }));
}

// Métodos de consulta y filtrado para el banco completo de 280 preguntas
export function getCriticalQuestions(): Question[] {
  return QUESTION_BANK.filter((q) => q.isCritical);
}

export function getIllustratedQuestions(): Question[] {
  return QUESTION_BANK.filter((q) => Boolean(q.illustrationType));
}

export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return QUESTION_BANK.filter((q) => q.category === category);
}

export function getQuestionById(id: number): Question | undefined {
  return QUESTION_BANK.find((q) => q.id === id);
}
