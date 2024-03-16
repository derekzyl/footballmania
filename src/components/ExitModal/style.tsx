import responsive from '@src/lib/responsive';
import {View} from 'native-base';
import styled from 'styled-components';
import {StyledText} from '../General/Text';

export const ExitModalContent = styled(View)`
  height: ${responsive.height(40)}px;
  width: 100%;
`;

export const ExitModalTitle = styled(StyledText)`
  text-align: center;
  font-size: 25px;
  color: #051f32;
  margin-bottom: ${responsive.height(2)}px;
`;

export const ExitModalButton = styled(View)`
  margin-top: ${responsive.height(3)}px;
`;
