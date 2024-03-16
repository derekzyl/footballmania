import {Perks} from '@src/redux/reducers/play/types';

export interface OptionState {
  answered: boolean;
  selectedIndex: number;
  correctIndex: number;
  is_correct: boolean;
}

export interface PlayAnswerState {
  answered: boolean;
  selectedIndex: number;
  correctIndex: number;
  timeSpent: number;
  perks: Perks;
  is_correct: boolean;
  question_id: string;
  currentQuestionIndex: number;

  attempts?: number;
  used_double?: boolean;
}
