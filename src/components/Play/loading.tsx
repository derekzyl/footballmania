import {useRoute} from '@react-navigation/core';
import {
  getPracticeSessionAction,
  getLiveSessionAction,
} from '@src/redux/actions/play';
import {Domain} from '@src/redux/reducers/play/types';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import BannerAd from '../ads';
import Box from '../General/Box';
import {LargeCircularProgress} from '../General/Progress';
import BlurBackground from '../Layout/blur';
import {
  LoadingCenter,
  LoadingContainer,
  LoadingContent,
  LoadingFlex,
  LoadingText,
  miscLoadingStyle,
  PlayContent,
} from './style';

interface PlayLoading {
  onCountdownDone: () => void;
}

const PlayLoading = ({onCountdownDone}: PlayLoading) => {
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(5);

  const [fetched, setFetched] = useState(false);

  const route = useRoute();

  const params: any = route.params;
  const domain: Domain | undefined = params?.domain;
  const session_code: string | undefined = params?.session_code;

  const delay = params?.timeDiff;

  useEffect(() => {
    if (delay) {
      console.log({delay});
      setCountdown(Number(delay) / 1000);
    }
  }, [delay]);

  useEffect(() => {
    if (domain === 'LIVE_SESSION' && session_code) {
      console.log('fetching live', session_code);
      dispatch(getLiveSessionAction(session_code, onFetchSuccess));
    } else {
      dispatch(getPracticeSessionAction(onFetchSuccess));
    }
  }, [dispatch, domain, session_code]);

  const onFetchSuccess = () => {
    setFetched(true);
  };

  console.log({countdown});

  return (
    <LoadingContainer>
      <PlayContent>
        <Box style={miscLoadingStyle.box}>
          <LoadingCenter>
            <BlurBackground>
              <LoadingContent>
                <LoadingFlex>
                  <TouchableOpacity>
                    <LoadingText>Waiting for session to begin</LoadingText>
                  </TouchableOpacity>
                  <LargeCircularProgress
                    duration={countdown}
                    index={countdown}
                    onComplete={onCountdownDone}
                    isPlaying={fetched}
                  />
                </LoadingFlex>
              </LoadingContent>
            </BlurBackground>
          </LoadingCenter>
        </Box>
      </PlayContent>
      <BannerAd />
    </LoadingContainer>
  );
};

export default PlayLoading;
