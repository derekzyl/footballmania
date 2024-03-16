import {Perks} from '../play/types';
import {Profile} from '../profile/types';

export interface LeaderboardState {
  all: LeaderboardItemType[];
  daily: LeaderboardItemType[];
  weekly: LeaderboardItemType[];
}

export interface LeaderboardItemType {
  id: string;
  _id: string;
  session_id: string;
  user: Profile;
  total_credits_earned: Perks;
  total_time_spent: number;
}

export enum LeaderboardActions {
  UPDATE_LEADERBOARDS = 'UPDATE_LEADERBOARDS',
}

export type LeaderboardSort = 'all' | 'daily' | 'weekly';

export interface LeaderboardDetailModalType {
  show: boolean;
  item: LeaderboardItemType | null;
}
