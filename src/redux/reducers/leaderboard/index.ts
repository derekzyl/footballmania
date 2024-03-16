import {LeaderboardState, LeaderboardActions} from './types';

const initialState: LeaderboardState = {
  daily: [],
  weekly: [],
  all: [],
};

const leaderboardReducer = (
  state: LeaderboardState = initialState,
  action: any,
): LeaderboardState => {
  switch (action.type) {
    case LeaderboardActions.UPDATE_LEADERBOARDS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default leaderboardReducer;
