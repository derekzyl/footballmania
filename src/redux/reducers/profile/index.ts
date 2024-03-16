import {ProfileState, ProfileActions} from './types';

const initialState: ProfileState = {
  user: {
    // bank details
    bank: '',
    currency: '',
    account_number: '',
    name: '',
    //
    email: '',
    createdAt: '',
    profile_picture: '',
    strategy: '',
    updatedAt: '',
    id: '',
    username: '',
    team: '',
    country: '',
    leaderboard: {
      coins: 0,
      points: 0,
    },
  },
  credit: {
    coin: 0,
    pass: 0,
    double: 0,
  },

  sound: true,
};

const profileReducer = (
  state: ProfileState = initialState,
  action: any,
): ProfileState => {
  switch (action.type) {
    case ProfileActions.UPDATE_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ProfileActions.UPDATE_CREDIT: {
      return {
        ...state,
        credit: action.payload,
      };
    }

    case ProfileActions.UPDATE_PLAY_SOUND: {
      return {
        ...state,
        sound: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
