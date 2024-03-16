import Crown from '@assets/svg/crown.svg';
import React from 'react';
import {LeaderboardScore, LeaderboardScoreText} from './style';
import {
  LeaderboardSpecialCircle,
  LeaderboardSpecialContainer,
  LeaderboardFirstImage,
  LeaderboardSpecialName,
} from './special-style';
import {LeaderboardItemProp} from './types';
import Coin from '@assets/svg/coin.svg';
import {cloudinary} from '@src/utils/image';

interface LeaderboardSpecialProp extends LeaderboardItemProp {
  first?: boolean;
}

const LeaderboardSpecial = ({item, first, onPress}: LeaderboardSpecialProp) => {
  return (
    <LeaderboardSpecialContainer onPress={() => onPress(item)}>
      {first ? <Crown /> : null}
      <LeaderboardSpecialCircle first={first}>
        <LeaderboardFirstImage
          source={{uri: cloudinary(item?.user?.profile_picture, 200)}}
          resizeMode="cover"
        />
      </LeaderboardSpecialCircle>
      <LeaderboardSpecialName>{item?.user?.username}</LeaderboardSpecialName>
      <LeaderboardScore>
        <Coin />
        <LeaderboardScoreText>
          {item?.total_credits_earned?.coins}
        </LeaderboardScoreText>
      </LeaderboardScore>
    </LeaderboardSpecialContainer>
  );
};

export default LeaderboardSpecial;
