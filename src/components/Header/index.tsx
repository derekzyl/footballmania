import { useNavigation } from '@react-navigation/core';
import { View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Coin from '../../assets/svg/coin2.svg';
import { useTypedSelector } from '../../redux/store';
import Box from '../General/Box';
import { StyledText } from '../General/Text';
import HeaderStat from './stat';
import { HeaderContainer } from './style';

const CustomHeader = () => {
  const navigation = useNavigation();
  const credit = useTypedSelector(state => state.profile.credit);

  const handleStore = () => {
    navigation.navigate('Store');
  };

  return (
    <ScoreExt>
      <Box>
        <AltContainer>
          <ScoreContainer activeOpacity={0.7} onPress={handleStore}>
            <ScoreInner>
              <Coin height={26} />
              <ScoreText>{credit.coin}</ScoreText>
            </ScoreInner>
          </ScoreContainer>
          <HeaderStat />
        </AltContainer>
      </Box>
    </ScoreExt>
  );
};

const AltContainer = styled(HeaderContainer)`
  align-items: center;
`;

const ScoreExt = styled(View)`
  justify-content: center;
`;

const ScoreContainer = styled(TouchableOpacity)`
  background: #ffffff;
  border-radius: 108px;
  padding: 1px;
`;

const ScoreText = styled(StyledText)`
  padding: 5px;
  font-size: 20px;
`;

const ScoreInner = styled(View)`
  border-radius: 108px;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  background-color: ${({theme}) => theme?.colors?.accent1};
`;

export default CustomHeader;
