import React from 'react';
import Box from '../General/Box';
import {
  LeaderboardFooterContainer,
  LeaderboardFooterContent,
  LeaderboardFooterImage,
  LeaderboardFooterLeft,
  LeaderboardFooterName,
  LeaderboardFooterPoint,
  LeaderboardFooterPosition,
  LeaderboardFooterRight,
} from './footer-style';
import Coin from '@assets/svg/coin.svg';
import {useTypedSelector} from '@src/redux/store';

const LeaderboardFooter = () => {
  const user = useTypedSelector((state) => state.profile.user);
  return (
    <LeaderboardFooterContainer>
      <LeaderboardFooterContent>
        <Box>
          <LeaderboardFooterLeft>
            <LeaderboardFooterPosition>{100}</LeaderboardFooterPosition>
            <LeaderboardFooterImage source={{uri: user.profile_picture}} />
            <LeaderboardFooterName>You</LeaderboardFooterName>
          </LeaderboardFooterLeft>
        </Box>
        <Box>
          <LeaderboardFooterRight>
            <Coin />
            <LeaderboardFooterPoint>
              {user.leaderboard.coins}
            </LeaderboardFooterPoint>
          </LeaderboardFooterRight>
        </Box>
      </LeaderboardFooterContent>
    </LeaderboardFooterContainer>
  );
};

export default LeaderboardFooter;
