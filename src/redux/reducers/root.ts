
import { combineReducers } from '@reduxjs/toolkit/react';
import authReducer from './auth';
import generalReducer from './general';
import leaderboardReducer from './leaderboard';
import musicReducer from './music';
import playReducer from './play';
import profileReducer from './profile';
import storeReducer from './store';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  general: generalReducer,
  store: storeReducer,
  play: playReducer,
  leaderboard: leaderboardReducer,
  music: musicReducer,
});

export default rootReducer;
