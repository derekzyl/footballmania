import React from 'react';
import CustomModal from '../General/CustomModal';
import ProfileStatCard from '../Profile/stat-card';
import { ProfileStatList } from '../Profile/style';
import {
  LeaderboardDetailContent,
  LeaderboardDetailImage,
  LeaderboardDetailItemImage,
  LeaderboardDetailItemText,
  LeaderboardDetailName,
  LeaderboardDetailRow,
  LeaderboardDetailRowItem,
} from './detail-style';

import Coin from '@assets/svg/coin.svg';
import Podium from '@assets/svg/podium.svg';
import Star from '@assets/svg/star.svg';
import { ProfileStat } from '../Profile/type';
import { useTypedSelector } from '@src/redux/store';
import { LeaderboardItemType } from '@src/redux/reducers/leaderboard/types';

interface LeaderboardDetailModal {
  visible: boolean;
  item: LeaderboardItemType | null;
  close: () => void;
}

const LeaderboardDetailModal = ({
  close,
  visible,
  item,
}: LeaderboardDetailModal) => {
  const allTeams = useTypedSelector((state) => state.general.allTeams);
  const allCountries = useTypedSelector((state) => state.general.allCountries);
  // console.log(item);
  const user = item?.user;

  const team = allTeams.find((tm) => tm.code === user?.team);
  const country = allCountries.find((ct) => ct.code === user?.country);

  const statItems: ProfileStat[] = [
    { title: 'World Rank', rank: 11023, icon: Podium },
    {
      title: 'Coins Earned',
      rank: item?.total_credits_earned?.coins || 0,
      icon: Coin,
    },
    {
      title: 'Points Gotten',
      rank: item?.total_credits_earned?.points || 0,
      icon: Star,
    },
  ];

  return (
    <CustomModal px header visible={visible} close={close}>
      <LeaderboardDetailContent>
        <LeaderboardDetailImage source={{ uri: user?.profile_picture }} />
        <LeaderboardDetailName>{user?.username}</LeaderboardDetailName>

        <LeaderboardDetailRow>
          <LeaderboardDetailRowItem>
            <LeaderboardDetailItemImage
              resizeMode="contain"
              source={{ uri: team?.logo }}
            />
            <LeaderboardDetailItemText>{team?.code}</LeaderboardDetailItemText>
          </LeaderboardDetailRowItem>
          <LeaderboardDetailRowItem>
            <LeaderboardDetailItemImage
              resizeMode="contain"
              source={{ uri: country?.logo }}
            />
            <LeaderboardDetailItemText>
              {country?.code}
            </LeaderboardDetailItemText>
          </LeaderboardDetailRowItem>
        </LeaderboardDetailRow>
        <ProfileStatList>
          {statItems.map((it, index) => (
            <ProfileStatCard item={it} key={index} />
          ))}
        </ProfileStatList>
      </LeaderboardDetailContent>
    </CustomModal>
  );
};

export default LeaderboardDetailModal;
