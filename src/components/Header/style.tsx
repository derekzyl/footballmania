import { View } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { BareButton } from '../General/Button/button.bare';
import { StyledText } from '../General/Text';

const avatarWidth = 45;

export const HeaderAvatar = styled(Image)`
  width: ${avatarWidth}px;
  height: ${avatarWidth}px;
  border-radius: ${avatarWidth}px;
`;

export const HeaderContainer = styled(View)<{variant?: boolean}>`
  flex-direction: row;
  align-items: ${({variant}) => (variant ? 'center' : 'stretch')};
  justify-content: ${({variant}) => (variant ? 'flex-start' : 'space-between')};
`;

export const HeaderStatContainer = styled(View)`
  background: #ffffff;
  border-radius: 108px;
  padding-left: 10px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const HeaderStatItem = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
`;

export const HeaderStatItemText = styled(StyledText)`
  margin-left: 1px;
  font-size: 12px;
`;

export const HeaderLeftContainer = styled(TouchableOpacity)`
  background-color: #aece45;
  border-radius: 100px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  height: 38px;
`;

export const HeaderLeftIcon = styled(View)`
  background-color: #fff;
  border-radius: 29px;
  width: 29px;
  height: 29px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const HeaderLeftText = styled(StyledText)`
  margin-right: 25px;
  color: #1e263c;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
`;

export const BackIconContainer = styled(BareButton).attrs({
  activeOpacity: 0.5,
})``;

export const HeaderScreenNameText = styled(StyledText)`
  text-align: center;
  color: ${({theme}) => theme.colors.textWhite};
  text-transform: capitalize;
  font-size: 19px;
`;

export const HeaderTextContainer = styled(View)`
  width: 80%;
`;
