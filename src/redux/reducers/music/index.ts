/* eslint-disable prettier/prettier */
import { MusicE, musicI } from './types';
const initialState: musicI = {
  music_id: 1,
};

const musicReducer = (state: musicI = initialState, action: any) => {
  switch (action.type) {
    case MusicE.GET_MUSIC_ID:
      return {
        ...state,
        music_id: action.payload.music_id,
      };

    default: {
      return state;
    }
  }
};

export default musicReducer;
