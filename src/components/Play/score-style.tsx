import {View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const ScoreModalContent = styled(View)`
  width: 100%;
  padding-bottom: 10px;
  justify-content: center;
`;

export const ScoreModalClose = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 12px;
`;

export const ScoreModalTop = styled(View)`
  //
`;

export const ScoreModalIcon = styled(View)`
  align-items: center;
`;

export const ScoreModalText = styled(StyledText)`
  color: #000000;
  font-size: 21px;
  text-align: center;
  margin: 10px 0;
`;

export const ScorePoint = styled(View)`
  /* width: 50%; */
  margin: 0 auto;
`;

export const ScorePointText = styled(StyledText)`
  font-size: 42px;
`;

export const ScoreButtons = styled(View)`
  padding: 0 8px;
`;

export const ScoreButton = styled(View)`
  margin-bottom: 15px;
`;
