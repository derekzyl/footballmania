import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk-next';

class FacebookService {
  async handleFacebook(onSuccess: any, onError: any) {
    try {
      const loginResponse = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (loginResponse.isCancelled) {
        throw new Error('User cancelled');
      } else {
        await AccessToken.getCurrentAccessToken();
        const processRequest = new GraphRequest(
          '/me?fields=name,email,picture.type(large)',
          null,
          (error: any, response: any) => {
            if (error) {
              console.log(error);
              throw new Error('An error occured');
            }
            console.log({ response });
            onSuccess(response);
          },
        );
        new GraphRequestManager().addRequest(processRequest).start();
      }
    } catch (error) {
      onError(error);
      // onError('Something went wrong, please try again.');
    }
  }
}
const facebookService = new FacebookService();
export default facebookService;
