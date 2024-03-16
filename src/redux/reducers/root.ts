import { combineReducers } from 'redux';
import authReducer from './auth';
import generalReducer from './general';
import leaderboardReducer from './leaderboard';
import playReducer from './play';
import profileReducer from './profile';
import storeReducer from './store';
import musicReducer from './music';

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
