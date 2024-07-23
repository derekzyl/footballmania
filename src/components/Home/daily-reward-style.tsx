import { View } from 'native-base';
import styled from 'styled-components/native';
import responsive from '../../lib/responsive';
import { StyledText } from '../General/Text';
import { ScoreModalContent } from '../Play/score-style';

export const DailyRewardContent = styled(ScoreModalContent)`
  align-items: center;
`;

export const DailyRewardTitle = styled(StyledText)`
  color: #000;
  font-size: 30px;
  margin: ${responsive.height(2.5)}px;
`;

export const DailyRewardText = styled(StyledText)`
  color: #2b2a2a;
  font-size: 17px;
  text-align: center;
  width: 80%;
`;

export const DailyRewardPointContainer = styled(View)`
  border-radius: 108px;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  padding: ${responsive.height(0.5)}px ${responsive.width(2)}px;
  background-color: ${({theme}) => theme?.colors?.accent1};
  margin-top: ${responsive.height(4)}px;
`;

export const DailyRewardPointText = styled(StyledText)`
  padding: 0 ${responsive.width(4)}px;
  font-size: 46px;
`;
