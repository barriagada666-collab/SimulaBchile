export type QuestionCategory = 
  | 'alcohol' 
  | 'velocidad' 
  | 'infantil' 
  | 'mecanica' 
  | 'normativa' 
  | 'senales' 
  | 'seguridad' 
  | 'clima' 
  | 'accidentes';

export interface QuestionOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  conasetId?: number;
  text: string;
  options: QuestionOption[];
  isMultiple: boolean;
  category: QuestionCategory;
  isCritical: boolean; // Alcohol, Velocidad, Sistemas de Retención Infantil (2 pts)
  points: number; // 2 para crítica, 1 para normal
  explanation: string;
  legalReference?: string;
  illustrationType?: string;
}

export type SimulatorMode = 'exam' | 'practice';

export interface UserAnswer {
  questionId: number;
  selectedOptionIndices: number[];
  isFlaggedForReview?: boolean;
  checkedInPractice?: boolean;
}

export interface ExamSummary {
  totalQuestions: number;
  totalPointsPossible: number; // 38
  pointsEarned: number;
  isApproved: boolean; // >= 33
  criticalQuestionsCount: number;
  criticalPointsEarned: number;
  timeSpentSeconds: number;
  correctAnswersCount: number;
  incorrectAnswersCount: number;
  categoryBreakdown: Record<QuestionCategory, { correct: number; total: number; points: number }>;
}
