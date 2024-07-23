import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import {
  LeaderboardDetailModalType,
  LeaderboardItemType,
} from '../../redux/reducers/leaderboard/types';
import { WinnersInfo } from '../../redux/reducers/play/types';
import NavigationHeader from '../Header/navigation.header';
import LeaderboardDetailModal from '../Leaderboard/detail-modal';
import LeaderboardItem from '../Leaderboard/item';
import { LeaderboardList } from '../Leaderboard/style';

interface PlayWinners {
  info: WinnersInfo;
}

const initialDetail = {
  show: false,
  item: null,
};

const PlayWinners = ({info}: PlayWinners) => {
  console.log(info.items.length);

  const [detailModal, setDetailModal] =
    useState<LeaderboardDetailModalType>(initialDetail);

  const openDetails = (item: LeaderboardItemType) => {
    setDetailModal({show: true, item});
  };

  const closeDetails = () => {
    setDetailModal(initialDetail);
  };

  return (
    <>
      <LeaderboardDetailModal
        item={detailModal.item}
        visible={detailModal.show}
        close={closeDetails}
      />
      {/* <GeneralSectionTitle>Winners</GeneralSectionTitle> */}
      <NavigationHeader screenName="Winners" />
      <LeaderboardList>
        {info.fetching ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={info.items}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <LeaderboardItem
                  onPress={() => openDetails(item)}
                  index={index + 1}
                  item={item}
                  key={item.id}
                />
              )}
            />
          </>
        )}
      </LeaderboardList>
    </>
  );
};

export default PlayWinners;
