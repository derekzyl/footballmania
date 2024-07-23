import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import responsive from '../../lib/responsive';
import { StyledText } from '../General/Text';

export const storeStyles = StyleSheet.create({
  col: {
    justifyContent: 'space-between',
  },
});

export const StoreList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StoreFlatContainer = styled(View)`
  width: 100%;
  margin-bottom: ${responsive.height(5)}px;
`;

export const StoreCardContainer = styled(View)<{mini?: boolean}>`
  margin-bottom: ${responsive.height(4)}px;
  width: ${({mini}) => (mini ? '46%' : '100%')};
`;

export const StoreCardRow = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const StoreCardRowItem = styled(View)`
  align-items: center;
`;

export const StoreCardRowItemText = styled(StyledText)`
  color: #fff;
  text-align: center;
`;

export const StoreCardButtonText = styled(StyledText)`
  color: #fff;
  text-align: center;
  font-size: 18px;
`;

export const StoreButtonCardTop = styled(View)<{topColor?: string}>`
  background-color: ${({topColor}) => (topColor ? topColor : '#1d944f')};
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 1px;
`;

export const StoreButtonCardTopText = styled(StyledText)`
  color: #fff;
  text-align: center;
  font-size: 20px;
`;

export const StoreCardMiniContent = styled(View)`
  align-items: center;
  margin-bottom: 10px;
`;
