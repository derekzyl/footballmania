import { View } from 'native-base';
import styled from 'styled-components/native';

export const CustomModalContent = styled(View)`
  background-color: ${({theme}) => theme?.colors?.modalBg};
  border-radius: 12px;
`;
