import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { StyledText } from '../General/Text';

export const HomeHeading = styled(StyledText)`
  /* color: #fff9e9; */
  color: #fff;
  font-size: 38px;

  font-style: normal;
  font-weight: normal;
`;

export const HomeFlexRow = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HomeFlexColumn = styled(View)`
  flex: 46%;
  max-width: 46%;
`;

export const homeScreenStyles = StyleSheet.create({
  heading: {
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 2,
  },
});
