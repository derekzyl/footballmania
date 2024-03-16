import DefaultTheme from 'styled-components/native';
import {CustomThemeType} from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}
