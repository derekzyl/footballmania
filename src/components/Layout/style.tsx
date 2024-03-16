import {Content, View} from 'native-base';
import {ImageBackground} from 'react-native';
import styled from 'styled-components';

export const PageContent = styled(Content)`
  flex: 1;
`;

export const PageBackgroundImageContainer = styled(ImageBackground)`
  width: 100%;
  flex: 1;
  height: 100%;
  /* background-color: #0f146a; */
  background-color: #000;
`;

export const AppBg = styled(View)`
  flex: 1;
  background-color: #000;
`;
