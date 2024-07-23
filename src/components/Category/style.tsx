import CheckBox from '@react-native-community/checkbox';
import { View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import GeneralSectionTitle from '../../components/General/Section';
import { StyledText } from '../../components/General/Text';
import responsive from '../../lib/responsive';

export const CategoryTitle = styled(GeneralSectionTitle)`
  color: #fff;
  font-size: 22px;
`;

export const CategoryButtonText = styled(StyledText)`
  color: #fff;
  text-align: center;
  font-size: 18px;
`;

export const CustomCheckbox = styled(CheckBox)`
  width: 20px;
  height: 20px;
`;

export const CategoryItemLeading = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const CategortItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${responsive.height(2)}px;
  align-items: center;
`;

export const CategoryItemTitle = styled(StyledText)`
  color: #fff;
  font-size: 17px;
  margin-left: 15px;
`;
