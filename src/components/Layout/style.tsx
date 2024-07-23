import { Container, View as NBView } from 'native-base';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const PageContent = styled(Container)`
  flex: 1;
`;

export const PageBackgroundImageContainer = styled(ImageBackground)`
  width: 100%;
  flex: 1;
  height: 100%;
  /* background-color: #0f146a; */
  background-color: #000;
`;

export const AppBg = styled(NBView)`
  flex: 1;
  background-color: #000;
`;
