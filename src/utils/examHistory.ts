import { TestHistoryItem } from '../types/quiz';

export const STORAGE_KEY_EXAM_HISTORY = 'conaset_exam_history';
export const MAX_STORED_EXAMS = 5;

/**
 * Obtiene el historial completo guardado en localStorage.
 */
export function getStoredExamHistory(): TestHistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EXAM_HISTORY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (err) {
    console.error('Error al leer historial de exámenes de localStorage:', err);
  }
  return [];
}

/**
 * Obtiene los últimos N exámenes realizados (por defecto 5), ordenados de más reciente a más antiguo.
 */
export function getRecentExams(limit = MAX_STORED_EXAMS): TestHistoryItem[] {
  const all = getStoredExamHistory();
  // all está en orden cronológico, tomamos los últimos `limit` y los ordenamos más reciente primero
  return all.slice(-limit).reverse();
}

/**
 * Guarda o actualiza un intento de examen en localStorage, garantizando la persistencia de los últimos exámenes.
 */
export function saveExamAttempt(attempt: Omit<TestHistoryItem, 'attemptNumber'> & { attemptNumber?: number }): TestHistoryItem[] {
  try {
    const currentList = getStoredExamHistory();
    const existingIndex = currentList.findIndex((item) => item.id === attempt.id);

    let updatedList: TestHistoryItem[];
    if (existingIndex >= 0) {
      updatedList = [...currentList];
      updatedList[existingIndex] = {
        ...attempt,
        attemptNumber: existingIndex + 1,
      };
    } else {
      const newAttempt: TestHistoryItem = {
        ...attempt,
        attemptNumber: currentList.length + 1,
      };
      // Si superamos un límite prudente para almacenamiento local, guardamos los últimos N
      updatedList = [...currentList, newAttempt];
      if (updatedList.length > 20) {
        updatedList = updatedList.slice(-20);
      }
    }

    // Re-index attempt numbers
    updatedList = updatedList.map((item, idx) => ({
      ...item,
      attemptNumber: idx + 1,
    }));

    localStorage.setItem(STORAGE_KEY_EXAM_HISTORY, JSON.stringify(updatedList));
    return updatedList;
  } catch (err) {
    console.error('Error al guardar examen en localStorage:', err);
    return getStoredExamHistory();
  }
}

/**
 * Limpia el historial guardado en localStorage.
 */
export function clearStoredExamHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_EXAM_HISTORY);
  } catch (err) {
    console.error('Error al limpiar historial de localStorage:', err);
  }
}

export interface HistoryStats {
  totalExams: number;
  avgPoints: number;
  bestPoints: number;
  passRate: number;
  approvedCount: number;
  latestAttempt: TestHistoryItem | null;
}

/**
 * Calcula estadísticas agregadas a partir de un arreglo de intentos.
 */
export function calculateExamHistoryStats(exams: TestHistoryItem[]): HistoryStats {
  if (!exams || exams.length === 0) {
    return {
      totalExams: 0,
      avgPoints: 0,
      bestPoints: 0,
      passRate: 0,
      approvedCount: 0,
      latestAttempt: null,
    };
  }

  const totalExams = exams.length;
  const sumPoints = exams.reduce((acc, curr) => acc + curr.points, 0);
  const avgPoints = Math.round((sumPoints / totalExams) * 10) / 10;
  const bestPoints = Math.max(...exams.map((e) => e.points));
  const approvedCount = exams.filter((e) => e.isApproved).length;
  const passRate = Math.round((approvedCount / totalExams) * 100);
  const latestAttempt = exams[0] || null; // si vienen ordenados con el más reciente primero

  return {
    totalExams,
    avgPoints,
    bestPoints,
    passRate,
    approvedCount,
    latestAttempt,
  };
}
