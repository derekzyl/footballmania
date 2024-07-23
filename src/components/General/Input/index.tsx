import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const CustomInput = styled(TextInput).attrs({
  placeholderTextColor: '#BEC4CC',
})`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #eff2f6;
`;
