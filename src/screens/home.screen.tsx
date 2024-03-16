import Box from '@components/General/Box';
import CustomHeader from '@components/Header';
import HomeCard from '@components/Home/card';
import { useNavigation } from '@react-navigation/native';
import Podium from '@src/assets/svg/podium.svg';
import Profile from '@src/assets/svg/profile.svg';
import Settings from '@src/assets/svg/settings.svg';
import Shop from '@src/assets/svg/shop.svg';
import Target from '@src/assets/svg/target.svg';
import TV from '@src/assets/svg/tv.svg';
import DailyRewardModal from '@src/components/Home/daily-reward';
import {
  HomeFlexColumn,
  HomeFlexRow,
  HomeHeading,
  homeScreenStyles,
} from '@src/components/Home/style';
import PlayLayout from '@src/components/Layout/play';
import { getLeaderboardAction } from '@src/redux/actions/leaderboard';
import { getAllLiveSessions } from '@src/redux/actions/play';
import {
  creditListenerAction,
  getCreditAction,
} from '@src/redux/actions/profile';
import { getStoreAction } from '@src/redux/actions/store';
import { useTypedSelector } from '@src/redux/store';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import SessionNotification from '@src/lib/notification';
import { getMusicAction } from '@src/redux/actions/music';
// import useSound from '@src/hooks/waitingsound';
const items = [
  {
    icon: TV,
    name: 'Live Game',
    path: 'GameSelect',
    description: 'Join the daily sessions',
  },
  {
    icon: Target,
    name: 'Practice',
    path: 'Play',
    description: 'Little offline warm up',
  },
  {
    icon: Shop,
    name: 'Store',
    path: 'Store',
    description: 'Buy all you need',
  },
  {
    icon: Podium,
    name: 'Leaderboard',
    path: 'Leaderboard',
    description: 'Who is on top?',
  },
  {
    icon: Profile,
    name: 'Profile',
    path: 'Profile',
    description: 'Manage your profile',
  },
  {
    icon: Settings,
    name: 'Settings',
    path: 'Settings',
    description: 'Set Preferences',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useTypedSelector((state) => state.profile.user);
  // const {stop} = useSound();
  const sessions = useTypedSelector(
    (state) => state.play.allSessions,
    shallowEqual,
  );
  const sessionNotification = new SessionNotification(sessions);

  const handleClick = (path: string) => {
    if (path) {
      navigation.navigate(path);
    }
  };

  useEffect(() => {
    dispatch(getCreditAction());
    dispatch(getStoreAction());
    dispatch(getAllLiveSessions());
    dispatch(getLeaderboardAction());
    dispatch(creditListenerAction());
    dispatch(getMusicAction());
  }, [dispatch]);

  useEffect(() => {
    sessionNotification.scheduleNotification();
  }, [sessionNotification]);

  return (
    <>
      <DailyRewardModal />

      <PlayLayout fullPage>
        <CustomHeader />
        <Box>
          <HomeHeading style={homeScreenStyles.heading}>
            Welcome, {user.username}
          </HomeHeading>
        </Box>
        <Box>
          <HomeFlexRow>
            <HomeFlexColumn>
              <HomeCard
                onPress={() => handleClick(items[0].path)}
                item={items[0]}
              />
              <HomeCard
                onPress={() => handleClick(items[2].path)}
                mid
                item={items[2]}
              />
              <HomeCard
                onPress={() => handleClick(items[4].path)}
                mid
                item={items[4]}
              />
            </HomeFlexColumn>
            <HomeFlexColumn>
              <HomeCard
                onPress={() => handleClick(items[1].path)}
                mid
                item={items[1]}
              />
              <HomeCard
                onPress={() => handleClick(items[3].path)}
                item={items[3]}
              />
              <HomeCard
                onPress={() => handleClick(items[5].path)}
                item={items[5]}
                mid
              />
            </HomeFlexColumn>
          </HomeFlexRow>
        </Box>
      </PlayLayout>
    </>
  );
};

export default HomeScreen;
