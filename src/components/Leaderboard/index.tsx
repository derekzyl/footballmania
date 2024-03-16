/* eslint-disable react-native/no-inline-styles */
import {
  LeaderboardDetailModalType,
  LeaderboardItemType,
} from '@src/redux/reducers/leaderboard/types';
import { useTypedSelector } from '@src/redux/store';
import React, { useEffect, useState } from 'react';
import { CustomButton } from '../General/Button';
import { ButtonVariant } from '../General/Button/variants';
import LeaderboardDetailModal from './detail-modal';
import LeaderboardItem from './item';
import LeaderboardSpecial from './special';
import {
  LeaderboardButton,
  LeaderboardButtonContainer,
  LeaderboardList,
  LeaderboardTopScorers,
} from './style';
import { FlatList } from 'react-native';
import { View } from 'native-base';
import responsive from '@src/lib/responsive';
import { LoadingText } from '../Play/style';

interface LeaderboardTop {
  items: LeaderboardItemType[];
  onPress: (item: LeaderboardItemType) => void;
}

const LeaderboardTop = ({ items, onPress }: LeaderboardTop) => {
  console.log('topss', items.length);
  //console.log(items[0]);
  return (
    <>
      <LeaderboardTopScorers>
        {items.length ? (
          <>
            <LeaderboardSpecial
              key={items[1]?.id}
              onPress={onPress}
              item={items[1]}
            />
            <LeaderboardSpecial
              key={items[0]?.id}
              onPress={onPress}
              item={items[0]}
              first
            />
            <LeaderboardSpecial
              key={items[2]?.id}
              onPress={onPress}
              item={items[2]}
            />
          </>
        ) : null}
      </LeaderboardTopScorers>
    </>
  );
};

type CAT = 'weekly' | 'all' | 'daily';

interface TABS {
  name: string;
  category: CAT;
}

const tabs: TABS[] = [
  {
    name: 'All',
    category: 'all',
  },
  {
    name: 'Weekly',
    category: 'weekly',
  },
  {
    name: 'Daily',
    category: 'daily',
  },
];

const initialDetail = {
  show: false,
  item: null,
};

const LeaderboardComponent = () => {
  const leaderboards = useTypedSelector((state) => state.leaderboard);

  const [currentList, setCurrentList] = useState<LeaderboardItemType[]>([]);
  const [category, setCategory] = useState<CAT>('weekly');

  const showTop = currentList.length > 3;
  const top = showTop ? currentList.slice(0, 3) : [];
  const others: LeaderboardItemType[] = currentList.slice(showTop ? 3 : 0);

  const [detailModal, setDetailModal] = useState<LeaderboardDetailModalType>(
    initialDetail,
  );

  const openDetails = (item: LeaderboardItemType) => {
    setDetailModal({ show: true, item });
  };

  const closeDetails = () => {
    setDetailModal(initialDetail);
  };

  useEffect(() => {
    if (category === 'all') {
      setCurrentList(leaderboards.all);
    } else if (category === 'daily') {
      setCurrentList(leaderboards.daily);
    } else if (category === 'weekly') {
      setCurrentList(leaderboards.weekly);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  console.log(currentList[0]);

  return (
    <>
      <LeaderboardDetailModal
        item={detailModal.item}
        visible={detailModal.show}
        close={closeDetails}
      />
      <LeaderboardButtonContainer>
        {tabs.map((tab) => (
          <LeaderboardButton key={tab.category}>
            <CustomButton
              onPress={() => setCategory(tab.category)}
              variant={
                tab.category === category
                  ? ButtonVariant.brown
                  : ButtonVariant.black
              }
              text={tab.name}
            />
          </LeaderboardButton>
        ))}
      </LeaderboardButtonContainer>

      {currentList.length ? (
        <>
          <LeaderboardTop onPress={openDetails} items={top} />
          <LeaderboardList>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={others}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <LeaderboardItem
                  onPress={() => openDetails(item)}
                  index={showTop ? 4 + index : index + 1}
                  item={item}
                  key={item.id}
                />
              )}
            />
          </LeaderboardList>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            marginTop: responsive.height(15),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LoadingText>Leaderboard is empty</LoadingText>
        </View>
      )}
    </>
  );
};

export default LeaderboardComponent;
