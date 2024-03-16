import responsive from '@src/lib/responsive';
import {View} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {CustomInput} from '../General/Input';

export const ProfileStatList = styled(View)`
  margin-top: ${responsive.height(3.5)}px;
  width: 100%;
`;

const avatarWidth = 122;

export const ProfileSelectLists = styled(View)`
  margin-top: ${responsive.height(2)}px;
`;

export const ProfileAvatar = styled(Image)`
  border: 5px #ffd00d;
  width: ${avatarWidth}px;
  height: ${avatarWidth}px;
  border-radius: ${avatarWidth}px;
`;

export const ProfileAvatarContainer = styled(TouchableOpacity)`
  position: relative;
  margin: 0 auto;
  z-index: 2;
  margin-top: -${avatarWidth / 2}px;
`;

const cameraWidth = 35;

export const ProfileAvatarCamera = styled(View)`
  position: absolute;
  top: 5px;
  left: 0;
  width: ${cameraWidth}px;
  height: ${cameraWidth}px;
  border-radius: ${cameraWidth}px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ProfileSelect = styled(View)`
  margin-top: ${responsive.height(2)}px;
`;

export const ProfileContainer = styled(View)`
  margin-top: ${avatarWidth / 2}px;
`;

export const ProfileContent = styled(View)`
  margin-top: -${avatarWidth / 2}px;
`;

export const ProfileNameInput = styled(CustomInput)`
  font-size: ${(props) =>
    props.profileFontSize ? props.profileFontSize : '30'}px;
  margin-top: ${(props) =>
    props.profileMarginTop ? props.profileMarginTop : '0'}px;
  text-align: center;
  font-family: 'Concert One';
  color: #1e263c;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
`;

export const ProfileInner = styled(View)`
  padding-top: ${avatarWidth / 2}px;
`;
