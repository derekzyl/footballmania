import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Box from '../General/Box';
import HeaderStat from './stat';
import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderLeftIcon,
  HeaderLeftText,
} from './style';

interface PlayHeader {
  disabled?: boolean;
}

const PlayHeader = ({disabled}: PlayHeader) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Box>
      <HeaderContainer>
        <HeaderLeftContainer onPress={handleBack} activeOpacity={0.7}>
          <HeaderLeftIcon>
            <MaterialIcons size={20} name="arrow-back" />
          </HeaderLeftIcon>
          <HeaderLeftText>Exit</HeaderLeftText>
        </HeaderLeftContainer>
        <HeaderStat disabled={disabled} />
      </HeaderContainer>
    </Box>
  );
};

export default PlayHeader;
