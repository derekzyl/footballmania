import authService from '@src/services/auth';
import facebookService from '@src/services/facebook';
import googleService from '@src/services/google';
import {fireToast} from '@src/utils/toast';
import {action} from 'typesafe-actions';
import {AuthActions, LoginProps, LoginResponse} from '../reducers/auth/types';

export const googleLoginAction =
  (onRegisterSuccess?: any, onError?: any) => async (dispatch: any) => {
    try {
      const response = await googleService.signInSilently();
      console.log(response, 'this is the gotten response');

      if (response) {
        const user = response?.user;

        const loginPayload: LoginProps = {
          email: user?.email,
          strategy: 'google',
        };

        if (user.photo) {
          loginPayload.profile_picture = user.photo;
        }

        dispatch(loginAction(loginPayload, onRegisterSuccess, onError));
      } else {
        fireToast({text: 'Something went wrong, please try again.'});
        onError?.();
      }
    } catch (e: any) {
      fireToast({text: e});
    }
  };

export const facebookLoginAction =
  (onRegisterSuccess?: any, onError?: any) => async (dispatch: any) => {
    const handleSuccess = (response: any) => {
      const loginPayload: LoginProps = {
        email: response?.email,
        strategy: 'facebook',
      };

      const imgUrl = response?.picture?.data?.url;
      if (imgUrl) {
        loginPayload.profile_picture = imgUrl;
      }

      dispatch(loginAction(loginPayload, onRegisterSuccess, onError));
    };

    const handleError = (msg: string) => {
      fireToast({text: msg});
      console.log(msg);
      onError();
    };

    await facebookService.handleFacebook(handleSuccess, handleError);
  };

export const loginAction =
  (
    loginPayload: LoginProps,
    onRegisterSuccess: () => void,
    onError: () => void,
  ) =>
  async (dispatch: any) => {
    console.log('loginAction <-----------------------------: ', loginPayload);

    try {
      const response = await authService.login(loginPayload);
      const data: LoginResponse = response.data?.data;
      dispatch(action(AuthActions.UPDATE_ACCESS_TOKEN, data.access_token));

      if (data.profile?.username) {
        dispatch(action(AuthActions.UPDATE_AUTH, true));
      } else {
        onRegisterSuccess?.();
      }
    } catch (err: any) {
      console.log(err.response);
      onError?.();
    }
  };

export const logoutAction = () => async (dispatch: any) => {
  // await googleService.signOut();
  dispatch(action(AuthActions.UPDATE_AUTH, false));
};
