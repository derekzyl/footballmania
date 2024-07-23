import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch } from 'react-redux';
import Podium from '../assets/svg/podium.svg';
import Profile from '../assets/svg/profile.svg';
import Settings from '../assets/svg/settings.svg';
import Shop from '../assets/svg/shop.svg';
import Target from '../assets/svg/target.svg';
import TV from '../assets/svg/tv.svg';
import Box from '../components/General/Box';
import CustomHeader from '../components/Header';
import HomeCard from '../components/Home/card';
import DailyRewardModal from '../components/Home/daily-reward';
import {
  HomeFlexColumn,
  HomeFlexRow,
  HomeHeading,
  homeScreenStyles,
} from '../components/Home/style';
import PlayLayout from '../components/Layout/play';
import SessionNotification from '../lib/notification';
import { getLeaderboardAction } from '../redux/actions/leaderboard';
import { getMusicAction } from '../redux/actions/music';
import { getAllLiveSessions } from '../redux/actions/play';
import { creditListenerAction, getCreditAction } from '../redux/actions/profile';
import { getStoreAction } from '../redux/actions/store';
import { useTypedSelector } from '../redux/store';
// import useSound from '../hooks/waitingsound';
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
  const user = useTypedSelector(state => state.profile.user);
  // const {stop} = useSound();
  const sessions = useTypedSelector(
    state => state.play.allSessions,
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
