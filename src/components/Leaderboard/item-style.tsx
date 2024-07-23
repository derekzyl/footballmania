import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import responsive from '../../lib/responsive';
import { StyledText } from '../General/Text';
import { LeaderboardScoreText } from './style';

export const LeaderboardItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${responsive.height(3)}px;
`;

export const LeaderboardItemIndex = styled(StyledText)`
  color: #fff;
  font-size: 16px;
`;

export const LeaderboardItemLeft = styled(View)`
  flex: 1;
`;

export const LeaderboardItemBase = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  margin-top: ${responsive.height(0.5)}px;
`;

export const LeaderboardItemContent = styled(View)`
  background: #ffffff;
  border: 0.5px solid #c3c7e5;
  border-radius: 600px;
  flex: 1;
  margin-left: 8px;
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardItemName = styled(StyledText)`
  font-size: 15px;
  color: #1e1e1e;
`;

export const LeaderboardItemCoin = styled(LeaderboardScoreText)`
  font-size: 15px;
`;

export const LeaderboardItemImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 6px;
  margin-right: 20px;
`;

export const LeaderboardItemScore = styled(LeaderboardScoreText)`
  text-align: right;
  margin-right: 20px;
`;
