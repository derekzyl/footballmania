import React from 'react';
import Coin from '../../assets/svg/coin.svg';
import Crown from '../../assets/svg/crown.svg';
import { cloudinary } from '../../utils/image';
import {
    LeaderboardFirstImage,
    LeaderboardSpecialCircle,
    LeaderboardSpecialContainer,
    LeaderboardSpecialName,
} from './special-style';
import { LeaderboardScore, LeaderboardScoreText } from './style';
import { LeaderboardItemProp } from './types';

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
