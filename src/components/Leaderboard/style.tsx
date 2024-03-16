import responsive from '@src/lib/responsive';
import {View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const LeaderboardButtonContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const LeaderboardButton = styled(View)`
  width: 32%;
`;

export const LeaderboardScore = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardScoreText = styled(StyledText)`
  color: ${({theme}) => theme?.colors?.accent1};
  font-size: 18px;
  margin-left: 3px;
`;

export const LeaderboardTopScorers = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${responsive.height(3)}px;
`;

export const LeaderboardList = styled(View)`
  margin: 30px 0;
  flex: 1;
`;
