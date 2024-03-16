import generalService from '@src/services/general';
import {action} from 'typesafe-actions';
import {GeneralActions} from '../reducers/general/types';

export const getGeneralAction = () => async (dispatch: any) => {
  dispatch(getAllTeamsAction());
  dispatch(getAllCountriesAction());
};

export const getAllTeamsAction = () => async (dispatch: any) => {
  try {
    const response = await generalService.getAllTeams();
    const data = response.data?.data;
    dispatch(action(GeneralActions.UPDATE_ALL_TEAMS, data));
  } catch (error) {
    //
  }
};

export const getAllCountriesAction = () => async (dispatch: any) => {
  try {
    const response = await generalService.getAllCountries();
    const data = response.data?.data;
    dispatch(action(GeneralActions.UPDATE_ALL_COUNTRIES, data));
  } catch (error) {
    //
  }
};
