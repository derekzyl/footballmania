import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

class GoogleService {
  async init() {
    GoogleSignin.configure();
  }

  async signInSilently() {
    try {
      const hh = await GoogleSignin.isSignedIn();

      if (hh) {
        return await GoogleSignin.signInSilently();
      } else {
        return await this.signIn();
      }
    } catch {
      return await this.signIn();
    }
  }

  async signIn() {
    try {
      const x = await GoogleSignin.hasPlayServices();
      console.log('this is  the sign in', x);
      const userInfo = await GoogleSignin.signIn();

      //   this.setState({userInfo});
      return userInfo;
    } catch (error: any) {
      console.log('eror--------------------->>', JSON.stringify(error));

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  async signOut() {
    return await GoogleSignin.signOut();
  }
}

const googleService = new GoogleService();
export default googleService;
