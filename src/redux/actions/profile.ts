import cloudinaryRequest from '@src/services/image-upload';
import profileService from '@src/services/profile';
import creditSocket from '@src/services/sockets/credits';
import {fireToast} from '@src/utils/toast';
import {launchImageLibrary} from 'react-native-image-picker';
import {action} from 'typesafe-actions';
import {AuthActions} from '../reducers/auth/types';
import {Dispatch} from 'redux';
import {ProfileActions, ProfileUpdatePayload} from '../reducers/profile/types';

export const getProfileAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await profileService.get();
    const data = response.data?.data;
    console.log(
      '<<<---------------------------------->>>>>---------------------------------------->>>>>>>>>>>>>',
      data,
      '<<<<<  user data from the backend after the update -------------------------->--->>--->>>>----->>>---->>>>----->>>>>>>>>',
    );
    dispatch(action(ProfileActions.UPDATE_PROFILE, data));
  } catch (error) {
    //
  }
};

export const updateProfilePictureAction = (
  onUpdateSuccess: () => void,
  onUpdateError: (msg: string) => void,
) => (dispatch: Dispatch<any>) => {
  launchImageLibrary({mediaType: 'photo'}, (response: any) => {
    if (response.didCancel) {
    } else if (response.error) {
    } else {
      cloudinaryRequest.upload(
        response,
        (data: any) => {
          const payload = {profile_picture: data.url};
          dispatch(
            updateProfileAction(payload, onUpdateSuccess, onUpdateError),
          );
        },
        () => {
          onUpdateError('Image update failed');
        },
      );
    }
  });
};

export const updateProfileAction = (
  payload: ProfileUpdatePayload,
  onSuccess: () => void,
  onError: (msg: string) => void,
) => async (dispatch: Dispatch<any>) => {
  try {
    await profileService.update(payload);
    dispatch(action(AuthActions.UPDATE_AUTH, true));
    onSuccess?.();
    dispatch(getProfileAction());
  } catch (error) {
    const errorData = error.response?.data;
    const msg = errorData.message;
    fireToast({text: msg});
    onError?.(msg || 'Error updating profile');
  }
};

export const getCreditAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await profileService.fetchCredit();
    const data = response.data?.data?.credit;
    dispatch(action(ProfileActions.UPDATE_CREDIT, data));
  } catch (error) {
    //
  }
};

export const updatePlaySoundAction = (play: boolean) => async (
  dispatch: Dispatch,
) => {
  dispatch(action(ProfileActions.UPDATE_PLAY_SOUND, play));
};

export const creditListenerAction = () => async (dispatch: Dispatch) => {
  creditSocket.creditListener((response) => {
    console.log(response);
    const credit = response?.credit;
    console.log(credit);
    if (credit) {
      dispatch(action(ProfileActions.UPDATE_CREDIT, credit));
    }
  });
};

export const dailyLoginAction = (onReceiveReward: any) => (
  dispatch: Dispatch<any>,
) => {
  console.log('listening');
  creditSocket.emitDailyLoginEvent();
  creditSocket.dailyRewardListener(onReceiveReward);
  dispatch(getCreditAction());
};

export const consumeCreditAction = (
  credit_type: 'pass' | 'double',
) => async () => {
  const payload = {credit_type};
  creditSocket.emitUseCreditEvent(payload);
};
