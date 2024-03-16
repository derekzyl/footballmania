import BackIcon from '@assets/svg/back_icon2.svg';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Box from '../General/Box';
import {
  BackIconContainer,
  HeaderContainer,
  HeaderScreenNameText,
  HeaderTextContainer,
} from './style';

interface NavigationHeaderProps {
  screenName?: string;
}
const NavigationHeader = ({screenName = 'Home'}: NavigationHeaderProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Box>
      <HeaderContainer variant>
        <BackIconContainer onPress={handleBack}>
          <BackIcon />
        </BackIconContainer>
        <HeaderTextContainer>
          <HeaderScreenNameText>{screenName}</HeaderScreenNameText>
        </HeaderTextContainer>
      </HeaderContainer>
    </Box>
  );
};

export default NavigationHeader;
