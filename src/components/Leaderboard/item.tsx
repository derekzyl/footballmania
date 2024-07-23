import React from 'react';
import Coin from '../../assets/svg/coin.svg';
import { cloudinary } from '../../utils/image';
import {
  LeaderboardItemBase,
  LeaderboardItemCoin,
  LeaderboardItemContainer,
  LeaderboardItemContent,
  LeaderboardItemImage,
  LeaderboardItemIndex,
  LeaderboardItemLeft,
  LeaderboardItemName,
  LeaderboardItemScore,
} from './item-style';
import { LeaderboardItemProp } from './types';

const LeaderboardItem = ({item, index, onPress}: LeaderboardItemProp) => {
  return (
    <LeaderboardItemContainer onPress={() => onPress(item)}>
      <LeaderboardItemIndex>{index}</LeaderboardItemIndex>
      <LeaderboardItemContent>
        <LeaderboardItemImage
          source={{uri: cloudinary(item?.user?.profile_picture, 100)}}
        />
        <LeaderboardItemLeft>
          <LeaderboardItemName>{item?.user?.username}</LeaderboardItemName>
          <LeaderboardItemBase>
            <Coin />
            <LeaderboardItemCoin>
              {item?.total_credits_earned?.coins}
            </LeaderboardItemCoin>
          </LeaderboardItemBase>
        </LeaderboardItemLeft>
        <LeaderboardItemScore>{item?.total_time_spent}</LeaderboardItemScore>
      </LeaderboardItemContent>
    </LeaderboardItemContainer>
  );
};

export default LeaderboardItem;
