import {LeaderboardItemType} from '../leaderboard/types';

export interface PlayState {
  currentSession: CurrentSession;
  allSessions: Session[];
}

export interface CurrentSession {
  questions: Question[];
  answers: AnsweredQuestion[];
  type: 'PRACTICE' | 'LIVE';
  session_code?: string;
}

export type Domain = 'PRACTICE_SESSION' | 'LIVE_SESSION';

type Entry = 'FREE' | 'PAID';

export interface Session {
  domain: Domain;
  currency_type: string;
  amount_to_earn: number;
  grace_period: number;
  entry: Entry;
  _id: string;
  credits_to_join: number;
  date_time: Date;
  name: string;
  session_code: string;
}

export interface Question {
  options: Option[];
  _id: string;
  question: string;
  answer: string;
  domain: Domain;
  duration: number;
  category: QuestionCategory;
  perks: Perks;
}

export interface Option {
  option: string;
  is_answer?: boolean;
}

export interface Perks {
  coins: number;
  points: number;
}

interface QuestionCategory {
  name: 'INTERNATIONAL';
  value: 'INTERNATIONAL';
}

export enum PlayActions {
  CREATE_NEW_SESSION = 'CREATE_NEW_SESSION',
  CLEAR_SESSION = 'CLEAR_SESSION',
  UPDATE_ALL_SESSIONS = 'UPDATE_ALL_SESSIONS',

  UPDATE_ANSWERS = 'UPDATE_ANSWERS',
}

export interface AnsweredQuestion {
  question_id: string;
  credit_earned: Perks;
  answer_is_correct: boolean;
  time_spent: number;
}

export interface SessionResult {
  correctAnswers: number;
  total_credits_earned: Perks;
  total_time_spent: number;
  total_questions_answered: number;
}

export interface CompletedSession {
  session_id: string;
  questions_answered: AnsweredQuestion[];
}

export interface WinnersInfo {
  items: LeaderboardItemType[];
  fetching: boolean;
  show: boolean;
}
