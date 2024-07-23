import 'styled-components/native';
import { CustomThemeType } from './index';

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomThemeType {}
}
