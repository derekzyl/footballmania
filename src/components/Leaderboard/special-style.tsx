import {View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';
import {Image, TouchableOpacity} from 'react-native';

export const LeaderboardSpecialContainer = styled(TouchableOpacity)`
  align-items: center;
`;

const firstCW = 105;
const runnerCW = 74;

export const LeaderboardSpecialCircle = styled(View)<{first?: boolean}>`
  border: ${({first}) => (first ? 8 : 4)}px solid #ffd00d;
  width: ${({first}) => (first ? firstCW : runnerCW)}px;
  height: ${({first}) => (first ? firstCW : runnerCW)}px;
  border-radius: ${({first}) => (first ? firstCW : runnerCW)}px;
  margin: 0 auto;
  margin-top: -1px;
  margin-bottom: 6px;
`;

export const LeaderboardSpecialName = styled(StyledText)`
  font-size: 16px;
  margin: 5px 0;
  color: #fff;
`;

export const LeaderboardFirstImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 110px;
`;
