/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    BackHandler,
    FlatList,
    RefreshControl,
    ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import GameCard from '../components/GameSelect/card';
import InsufficientCreditModal from '../components/GameSelect/insufficient-modal';
import Box from '../components/General/Box';
import GeneralSectionTitle from '../components/General/Section';
import PlayHeader from '../components/Header/play';
import PageLayout from '../components/Layout';
import { StoreFlatContainer } from '../components/Store';
import { getAllLiveSessions, joinLiveSessionAction } from '../redux/actions/play';
import { getCreditAction } from '../redux/actions/profile';
import { Session } from '../redux/reducers/play/types';
import { useTypedSelector } from '../redux/store';

import { View } from 'native-base';
import styled from 'styled-components/native';
import BannerAd from '../components/ads';
import UnavailableSessionModal from '../components/GameSelect/session-unavailable';
import { LoadingText } from '../components/Play/style';
import responsive from '../lib/responsive';
// import waitingSong from '../assets/sounds/waitingroom.mp3';
import useSound from '../hooks/waitingsound';

const waitingTime = 300;

const GameSelectScreen = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const credit = useTypedSelector(state => state.profile.credit);
  const allSessions = useTypedSelector(state => state.play.allSessions);
  const [unavailableSessionModal, setUnavailableSessionModal] = useState(false);
  const [insufficientModal, setInsufficientModal] = useState(false);
  const {play, stop} = useSound();
  const sound = useTypedSelector(state => state.profile.sound);

  /*







  */

  useEffect(() => {
    // console.log('this is music id', music);

    // play();
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            stop();
            navigation.goBack();
          },
        },
      ]);
      return true;
    };

    navigation.addListener('beforeRemove', () => {
      stop();
    });

    navigation.addListener('blur', () => {
      stop();
    });

    navigation.addListener('focus', () => {
      if (allSessions.length !== 0 && sound) {
        play();
      }
    });

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    dispatch(getAllLiveSessions());
    return () => backHandler.remove();
  }, [dispatch, navigation, play, stop, allSessions, sound]);

  /*







  */

  const handleClick = (session: Session) => {
    const timeDiff =
      (new Date(session.date_time).getTime() - new Date().getTime()) / 1000;
    console.log(timeDiff, 'this is time difference');

    if (timeDiff <= 0) {
      return;
    }
    if (timeDiff < waitingTime) {
      if (session.credits_to_join <= credit.coin) {
        stop();
        dispatch(joinLiveSessionAction(session, onJoinSuccess, onJoinError));
      } else {
        setInsufficientModal(true);
      }
    } else {
      setUnavailableSessionModal(true);
      return;
    }
  };

  const closeInsufficientModal = () => {
    setInsufficientModal(false);
  };

  const closeUnavailableModal = () => {
    setUnavailableSessionModal(false);
  };

  const onJoinSuccess = (session_code: string, timeDiff: number) => {
    dispatch(getCreditAction());
    navigation.navigate('Play', {
      domain: 'LIVE_SESSION',
      session_code: session_code,
      timeDiff: timeDiff,
    });
  };

  const onJoinError = (msg: string) => {
    console.log(msg);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(
      getAllLiveSessions(() => {
        setRefreshing(false);
      }),
    );
    if (allSessions.length !== 0 && sound) {
      play();
    }
  };

  return (
    <>
      <InsufficientCreditModal
        close={closeInsufficientModal}
        visible={insufficientModal}
      />
      <UnavailableSessionModal
        close={closeUnavailableModal}
        visible={unavailableSessionModal}
      />
      <PageLayout>
        <Box margin="xs" style={{flex: 1}}>
          <PlayHeader />
          <Box style={{flex: 1, width: '100%'}}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  tintColor="#000"
                  onRefresh={handleRefresh}
                  refreshing={refreshing}
                />
              }
              showsVerticalScrollIndicator={false}>
              <GeneralSectionTitle>Live Sessions</GeneralSectionTitle>

              <StoreFlatContainer>
                {allSessions.length ? (
                  <FlatList
                    keyExtractor={item => item._id}
                    data={allSessions}
                    renderItem={({item}) => (
                      <GameCard
                        onPress={handleClick}
                        key={item._id}
                        item={item}
                      />
                    )}
                  />
                ) : (
                  <EmptySessionContainer>
                    <LoadingText>No session is available</LoadingText>
                  </EmptySessionContainer>
                )}
              </StoreFlatContainer>
            </ScrollView>
          </Box>
        </Box>
        <BannerAd />
      </PageLayout>
    </>
  );
};

const EmptySessionContainer = styled(View)`
  flex: 1;
  margin-top: ${responsive.height(15)};
  justify-content: center;
  align-items: center;
`;

export default GameSelectScreen;
