import { View } from 'native-base';
import React from 'react';
import styled from 'styled-components/native';

import Points from '../../assets/svg/star.svg';
import { StyledText } from '../General/Text';
import { ProfileStat } from './type';

interface ProfileStatCard {
  item: ProfileStat;
}

const ProfileStatCard = ({item}: ProfileStatCard) => {
  const Icon = item.icon ? item.icon : Points;
  return (
    <ProfileStatCardContainer>
      <Icon width={40} height={40} />
      <ProfileStatCardColumn>
        <ProfileStatCardTitle>{item.title}</ProfileStatCardTitle>
        <ProfileStatCardPoint>{item.rank}</ProfileStatCardPoint>
      </ProfileStatCardColumn>
    </ProfileStatCardContainer>
  );
};

export default ProfileStatCard;

const ProfileStatCardContainer = styled(View)`
  background-color: #1e263c;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 15px;
  padding-left: 30px;
  border-radius: 8px;
  align-items: center;
`;

const ProfileStatCardColumn = styled(View)`
  padding-left: 20px;
`;

const ProfileStatCardTitle = styled(StyledText)`
  color: #fff;
  font-size: 18px;
  margin-bottom: 3px;
`;

const ProfileStatCardPoint = styled(StyledText)`
  color: ${({theme}) => theme?.colors?.accent1};
  font-size: 18px;
`;
