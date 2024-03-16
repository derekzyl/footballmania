import {PlayActions, PlayState} from './types';

const initialState: PlayState = {
  currentSession: {
    answers: [],
    questions: [],
    type: 'PRACTICE',
    session_code: '',
  },
  allSessions: [],
};

const playReducer = (
  state: PlayState = initialState,
  action: any,
): PlayState => {
  switch (action.type) {
    case PlayActions.CREATE_NEW_SESSION: {
      return {
        ...state,
        currentSession: action.payload,
      };
    }
    case PlayActions.UPDATE_ALL_SESSIONS: {
      return {
        ...state,
        allSessions: action.payload,
      };
    }
    case PlayActions.UPDATE_ANSWERS: {
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          answers: action.payload,
        },
      };
    }
    case PlayActions.CLEAR_SESSION: {
      return {
        ...state,
        currentSession: initialState.currentSession,
      };
    }
    default: {
      return state;
    }
  }
};

export default playReducer;
