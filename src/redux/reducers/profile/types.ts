export interface ProfileState {
  user: Profile;
  credit: Credit;
  sound: boolean;
}

export enum ProfileActions {
  UPDATE_PROFILE = 'UPDATE_PROFILE',
  UPDATE_CREDIT = 'UPDATE_CREDIT',
  UPDATE_PLAY_SOUND = 'UPDATE_PLAY_SOUND',
}

export interface Profile {
  profile_picture: string;
  email: string;
  bank: string;
  currency?: string;
  account_number?: string;
  name?: string;
  username: string;
  strategy: string;
  createdAt: string;
  updatedAt: string;
  id?: string;
  team: string;
  country: string;
  leaderboard: ProfileLeaderboard;
}

export interface ProfileLeaderboard {
  coins: number;
  points: number;
}

export interface ProfileUpdatePayload {
  username?: string;
  team?: string;
  country?: string;
  profile_picture?: string;
  bank?: string;
  currency?: string;
  account_number?: string;
}

export interface Credit {
  coin: number;
  pass: number;
  double: number;
}
