import {GeneralActions, GeneralState} from './types';

const initialState: GeneralState = {
  allTeams: [],
  allCountries: [],
};

const generalReducer = (
  state: GeneralState = initialState,
  action: any,
): GeneralState => {
  switch (action.type) {
    case GeneralActions.UPDATE_ALL_TEAMS: {
      return {
        ...state,
        allTeams: action.payload,
      };
    }
    case GeneralActions.UPDATE_ALL_COUNTRIES: {
      return {
        ...state,
        allCountries: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default generalReducer;
