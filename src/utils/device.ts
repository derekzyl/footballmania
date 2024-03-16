import {Platform, PlatformOSType} from 'react-native';
import responsive from '../lib/responsive';
export const isIPhoneX = () => {
  const deviceHeight =
    responsive.height('100%') === 812 || responsive.height('100%') === 896;
  return Platform.OS === 'ios' && deviceHeight;
};

/**
 * @name deviceOs returns the device OS from platform.OS
 * @returns 'ios' | 'android' | 'macos' | 'windows' | 'web' | 'native'
 */
export const deviceOS: PlatformOSType = Platform.OS;

/**
 * @param os Provide either of the following OS  'ios' | 'android' | 'macos' | 'windows' | 'web' | 'native' to check
 * @returns boolean i.e true / false
 * @example isDeviceOS("android") will return true or false depending on the device type
 */
export const isDeviceOS = (os: PlatformOSType): boolean => {
  return os === deviceOS;
};
