import { QuestionCategory } from '../types/quiz';

export interface QuestionDefinition {
  id: number;
  conasetId: number;
  text: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
  isMultiple: boolean;
  category: QuestionCategory;
  isCritical: boolean;
  explanation: string;
  legalReference?: string;
  illustrationType?: string;
}
