import Box from '@components/General/Box';
import NavigationHeader from '@src/components/Header/navigation.header';
import PlayLayout from '@src/components/Layout/play';
import LeaderboardComponent from '@src/components/Leaderboard';
import LeaderboardFooter from '@src/components/Leaderboard/footer';
import {getLeaderboardAction} from '@src/redux/actions/leaderboard';
import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

const LeaderboardScreen = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getLeaderboardAction());
  }, [dispatch]);

  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(
      getLeaderboardAction(() => {
        setRefreshing(false);
      }),
    );
  };

  return (
    <PlayLayout fullPage FooterComponent={LeaderboardFooter}>
      <NavigationHeader screenName="Leaderboard" />
      <Box>
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor="#000"
              onRefresh={handleRefresh}
              refreshing={refreshing}
            />
          }
          showsVerticalScrollIndicator={false}>
          <LeaderboardComponent />
        </ScrollView>
      </Box>
    </PlayLayout>
  );
};

export default LeaderboardScreen;
