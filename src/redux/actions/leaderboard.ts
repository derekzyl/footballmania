import { action } from 'typesafe-actions';
import leaderboardService from '../../services/leaderboard';
import { LeaderboardActions } from '../reducers/leaderboard/types';

export const getLeaderboardAction =
  (onSuccess?: () => void) => async (dispatch: any) => {
    try {
      const getAll = leaderboardService.getLeaderboard('all');
      const getPerWeek = leaderboardService.getLeaderboard('week');
      const getPerDay = leaderboardService.getLeaderboard('day');

      const response = await Promise.all([getAll, getPerWeek, getPerDay]);

      console.log('----------------------');
      const payload = {
        daily: response[0].data.data,
        weekly: response[1].data.data,
        all: response[2].data.data,
      };

      console.log(payload);

      dispatch(action(LeaderboardActions.UPDATE_LEADERBOARDS, payload));
      onSuccess?.();
    } catch (error) {
      //
    }
  };
