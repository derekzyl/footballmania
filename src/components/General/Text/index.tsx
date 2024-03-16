import {Text} from 'react-native';
import styled, {css} from 'styled-components/native';

export const regularFont = css`
  font-family: 'ConcertOne-Regular';
`;

export const StyledText = styled(Text)`
  ${regularFont};
`;
