import { View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import responsive from '../../lib/responsive';
import { StyledText } from '../General/Text';

export const PaymentSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const PaymentModalContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  border-top-left-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
`;

export const PaymentModalContent = styled(View)`
  flex: 1;
`;

export const PaymentTopContainer = styled(View)`
  padding: ${responsive.height(1)}px ${responsive.width(3)}px;
  justify-content: flex-end;
  flex-direction: row;
`;

export const PaymentCancelText = styled(StyledText)`
  color: #fff;
  font-size: 18px;
`;
