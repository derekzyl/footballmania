import responsive from '@src/lib/responsive';
import {View} from 'native-base';
import {Image} from 'react-native';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const LeaderboardDetailContent = styled(View)`
  align-items: center;
  margin: ${responsive.height(2)}px 0;
  width: 100%;
`;

const imgSz = 110;

export const LeaderboardDetailImage = styled(Image)`
  width: ${imgSz}px;
  height: ${imgSz}px;
  border-radius: ${imgSz}px;
  border-width: 5px;
  border-color: #ffd00d;
`;

export const LeaderboardDetailName = styled(StyledText)`
  font-size: 30px;
  text-align: center;
  color: #1e263c;
  font-weight: 700;
  margin: ${responsive.height(2)}px 0;
`;

export const LeaderboardDetailRow = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: ${responsive.height(1)}px 0;
`;

export const LeaderboardDetailRowItem = styled(View)`
  width: 46%;
  background-color: #ffaaaa;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const LeaderboardDetailItemText = styled(StyledText)`
  font-size: 16px;
  border-radius: 4px;
  padding: 16px 20px;
`;

export const LeaderboardDetailItemImage = styled(Image)`
  width: ${responsive.width(8)}px;
  height: ${responsive.width(8)}px;
  margin: ${responsive.height(0.2)}px 0;
`;
