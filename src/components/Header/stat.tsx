import {useNavigation} from '@react-navigation/core';
import Check from '@src/assets/svg/check-lightblue.svg';
import Coin from '@src/assets/svg/coin.svg';
import Pass from '@src/assets/svg/pass.svg';
import Plus from '@src/assets/svg/plus.svg';
import {useTypedSelector} from '@src/redux/store';
import React from 'react';
import {HeaderStatContainer, HeaderStatItem, HeaderStatItemText} from './style';

interface HeaderStat {
  disabled?: boolean;
}

const HeaderStat = ({disabled}: HeaderStat) => {
  const navigation = useNavigation();
  const credit = useTypedSelector(state => state.profile.credit);

  const items = [
    {icon: Coin, text: `x${credit.coin}`},
    {
      icon: Check,
      text: `x${credit.double}`,
    },
    {
      icon: Pass,
      text: `x${credit.pass}`,
    },
    {
      icon: Plus,
      lg: true,
    },
  ];

  const handlePress = () => {
    navigation.navigate<string>('Store');
  };

  return (
    <HeaderStatContainer>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <HeaderStatItem disabled={disabled} onPress={handlePress} key={index}>
            {Icon && <Icon width={item.lg ? '40' : '23'} />}
            {item.text && <HeaderStatItemText>{item.text}</HeaderStatItemText>}
          </HeaderStatItem>
        );
      })}
    </HeaderStatContainer>
  );
};

export default HeaderStat;
