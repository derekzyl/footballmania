import responsive from '@src/lib/responsive';
import {Content, View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const SplashContent = styled(Content)`
  flex: 1;
`;

export const SplashFlex = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  padding: 20px 0;

  margin: ${responsive.height(12)}px auto;
`;

export const SplashBottom = styled(View)`
  width: 100%;
`;

export const SplashButtonList = styled(View)`
  width: 100%;
`;

export const SplashText = styled(StyledText)`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-bottom: ${responsive.height(2)}px;
`;

export const SplashDivider = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: ${responsive.height(6)}px;
  margin-bottom: ${responsive.height(4)}px;
`;

export const SplashDividerLine = styled(View)`
  background-color: #c3c7e5;
  height: 0.7px;
  flex-direction: row;
  flex: 1;
`;

export const SplashDividerText = styled(StyledText)`
  color: #abb3bb;
  font-size: 14px;
  font-family: Roboto;
  padding: 0 20px;
`;

export const SplashSection = styled(View)`
  width: 100%;
`;
