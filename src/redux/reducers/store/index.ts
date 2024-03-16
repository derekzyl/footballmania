import {StoreState, StoreActions} from './types';

const initialState: StoreState = {
  allItems: [],
};

const storeReducer = (
  state: StoreState = initialState,
  action: any,
): StoreState => {
  switch (action.type) {
    case StoreActions.UPDATE_ALL_ITEMS: {
      return {
        ...state,
        allItems: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default storeReducer;
