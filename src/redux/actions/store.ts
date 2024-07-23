import { action } from 'typesafe-actions';
import creditSocket from '../../services/sockets/credits';
import storeService from '../../services/store';
import { StoreActions } from '../reducers/store/types';
import { RootState } from '../store';

export const getStoreAction =
  (onSuccess?: () => void) => async (dispatch: any) => {
    try {
      const response = await storeService.getStoreBenefits();
      const data = response.data?.data;
      dispatch(action(StoreActions.UPDATE_ALL_ITEMS, data));
      onSuccess?.();
    } catch (error) {
      //
    }
  };

interface BuyStoreItemPayload {
  store_item_id: string;
  email: string;
}

export const buyStoreItemAction =
  (
    item_id: string,
    onSuccess: (url: string) => void,
    onError: (msg: string) => void,
  ) =>
  async (dispatch: any, getState: any) => {
    try {
      const state: RootState = getState();
      const email = state.profile.user.email;

      const payload: BuyStoreItemPayload = {store_item_id: item_id, email};
      const response = await storeService.buyItem(payload);
      const data = response.data?.data;
      const url = data.authorization_url;
      onSuccess(url);
    } catch (error: any) {
      const errorData = error.response?.data;
      const msg = errorData.message;
      onError(msg);
    }
  };

export const doneWatchingAdsAction = (id: string) => async () => {
  try {
    console.log('dispatching');
    creditSocket.doneWatchingAds(id);
  } catch {
    //
  }
};
