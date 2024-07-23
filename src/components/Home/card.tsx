import { View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import responsive from '../../lib/responsive';
import { CardWithDepth } from '../General/Cards';
import { StyledText } from '../General/Text';

const HomeCard = ({item, mid = false, onPress}: any) => {
  const Icon = item.icon;
  return (
    <HomeCardContainer onPress={onPress} mid={mid} activeOpacity={0.7}>
      <CardWithDepth bR={20}>
        <HomeCardContent>
          {Icon && <Icon />}
          <HomeCardTitle>{item.name}</HomeCardTitle>
          <HomeCardText>{item.description}</HomeCardText>
        </HomeCardContent>
      </CardWithDepth>
    </HomeCardContainer>
  );
};

const HomeCardContainer = styled(TouchableOpacity)<{mid?: boolean}>`
  width: 100%;
  background: #fff9e9;
  border-radius: 20px;
  margin: 10px 0;
  text-align: center;
  height: ${({mid}) =>
    mid ? responsive.height(18) + 'px' : responsive.height(24) + 'px'};
  /* height: ${({mid}) => (mid ? '150px' : '200px')}; */
  position: relative;
`;

const HomeCardContent = styled(View)`
  width: 100%;
  height: 100%;

  justify-content: center;
`;

const HomeCardTitle = styled(StyledText)`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const HomeCardText = styled(StyledText)`
  font-weight: 300;
  color: #1e263c;
  font-family: Roboto;
  font-size: 13px;
`;

export default HomeCard;
