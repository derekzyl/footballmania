import {Profile} from '../profile/types';

export interface AuthState {
  isAuthenticated: boolean;
  access_token: string;
}

export enum AuthActions {
  UPDATE_AUTH = 'UPDATE_AUTH',
  UPDATE_ACCESS_TOKEN = 'UPDATE_ACCESS_TOKEN',
}

export interface LoginProps {
  email: string;
  strategy: 'google' | 'facebook';
  profile_picture?: string | null;
}

export interface LoginResponse {
  access_token: string;
  profile: Profile;
}
