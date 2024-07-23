import { View } from 'native-base';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { StyledText } from '../General/Text';

export const LeaderboardFooterContainer = styled(View)`
  background: #1e263c;
  width: 100%;
  border-top-color: #c3c7e5;
  border-top-width: 0.5px;
`;

export const LeaderboardFooterContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const LeaderboardFooterLeft = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardFooterRight = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const LeaderboardFooterPosition = styled(StyledText)`
  font-size: 13px;
  color: #fff;
  margin-right: 10%;
`;

export const LeaderboardFooterName = styled(StyledText)`
  font-size: 17px;
  color: #fff;
  margin-right: 10%;
`;

export const LeaderboardFooterImage = styled(Image)`
  width: 46px;
  height: 46px;
  border-radius: 46px;
  margin-right: 10%;
`;

export const LeaderboardFooterPoint = styled(StyledText)`
  color: ${({theme}) => theme?.colors?.accent1};
  font-size: 20px;
  margin-left: 8px;
`;
