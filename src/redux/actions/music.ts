import MusicService from '@src/services/music';
import { MusicE } from '../reducers/music/types';
import { action } from 'typesafe-actions';

export const getMusicActions = (dispatch: any) => {
  dispatch(getMusicAction());
};

export const getMusicAction = () => async (dispatch: any) => {
  try {
    const response = await MusicService.getMusicId();
    const gotten_music_id = response.data.data[0];
    dispatch(action(MusicE.GET_MUSIC_ID, gotten_music_id));
  } catch (error) {}
};
