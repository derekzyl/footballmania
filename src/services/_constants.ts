import { Platform } from 'react-native';

// export const baseURL = 'https://football-heruku.herokuapp.com';
export const baseURL = "http://[::1]:5000"
// export const baseURL = 'https://footballmaniac.herokuapp.com';

const isTest = false;

export const geRewaredeAdUnit = () => {
  if (isTest) {
    return 'ca-app-pub-3940256099942544/5224354917';
    // return 'ca-app-pub-3940256099942544/8691691433';
  }
  if (Platform.OS === 'ios') {
    // return 'ca-app-pub-6919284172055998/9820450780';
    return 'ca-app-pub-9684411511963052/5492622020';
  } else {
    //android
    // return 'ca-app-pub-6919284172055998/6697224303';
    return 'ca-app-pub-9684411511963052/5492622020';
    // return 'ca-app-pub-9684411511963052/5274328708';
  }
};

export const getBannerAdUnit = () => {
  if (isTest) {
    return 'ca-app-pub-3940256099942544/6300978111';
  }
  if (Platform.OS === 'ios') {
    // return 'ca-app-pub-6919284172055998/9785785014';
    // return 'ca-app-pub-9684411511963052~7972488700';
    return 'ca-app-pub-9684411511963052/5274328708';
  } else {
    //android
    return 'ca-app-pub-6919284172055998/4641269543';
    // return 'ca-app-pub-9684411511963052~7972488700';
    // return 'ca-app-pub-9684411511963052/5274328708';
  }
};
