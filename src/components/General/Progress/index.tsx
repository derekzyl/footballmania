/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import styled from 'styled-components/native';
import { ProgressText } from '../../../components/Play/style';
import useSound from '../../../hooks/sound';
import { useTypedSelector } from '../../../redux/store';
import { StyledText } from '../Text';

// import countdown from '../../../assets/sounds/countdown.mp3';

var SOUND_STACK: Array<string> = [];

const WARNING_TIME = 4;

interface CircularProgressProp {
  value: number;
  index: number;
  onComplete: () => void;
  active: boolean;
  warningTime?: number;
}

const CircularProgress = ({
  value,
  index,
  onComplete,
  active,
  warningTime = WARNING_TIME,
}: CircularProgressProp) => {
  const sound = useTypedSelector(state => state.profile.sound);
  const {play, stop} = useSound('countdown.mp3'); //(countdown);

  const handleComplete = () => {
    if (active) {
      onComplete?.();
      SOUND_STACK = [];
    }
  };

  const playSound = () => {
    if (sound && !SOUND_STACK.length) {
      play();
      SOUND_STACK.push('PLAY_SOUND');
    }
  };

  useEffect(() => {
    return () => {
      if (sound && SOUND_STACK.length) {
        SOUND_STACK = [];
        stop();
      }
    };
  }, [stop, sound]);

  return (
    <CountdownCircleTimer
      isPlaying={active}
      duration={value}
      size={75}
      key={index}
      onComplete={handleComplete}
      strokeWidth={7}
      colorsTime={[0.9, 0.1]}
      // colors={({0: '#27AE60'} as ColorFormat)}
      colors={['#27AE60', '#fff']}>
      {({remainingTime}: any) => {
        if (remainingTime === warningTime) {
          playSound();
        }
        return <StyledText style={style.prg}>{remainingTime}</StyledText>;
      }}
    </CountdownCircleTimer>
  );
};

interface LargeCircularProgress {
  onComplete: () => void;
  duration: number;
  isPlaying: boolean;
  index?: number;
}
// const color1 = '27AE60';
// const color2 = 'fff';
export const LargeCircularProgress = ({
  onComplete,
  duration,
  isPlaying,
  index = 0,
}: LargeCircularProgress) => {
  const {play} = useSound('countdown.mp3'); //(countdown);
  play();
  return (
    <LargeContainer>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        size={180}
        strokeWidth={15}
        /*      isLinearGradient */
        onComplete={onComplete}
        // trailColor="transparent"
        colors={['#27AE60', '#fff']}
        colorsTime={[0.9, 0.1]}
        key={index}
        rotation="counterclockwise"
        // colors={[`#${color1}`, `#${color2}`]}
      >
        {({remainingTime}: any) => {
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;
          const fseconds = seconds < 10 ? `0${seconds}` : seconds;

          const ans = `${minutes}:${fseconds}`;

          const res = ans.slice(0, 4);
          return (
            <LargeChild>
              <ProgressText>{res}</ProgressText>
            </LargeChild>
          );
        }}
      </CountdownCircleTimer>
    </LargeContainer>
  );
};
export interface LoaderProgress {
  loading: boolean;
  value: number;
}

const LargeContainer = styled(View)`
  justify-content: center;
  align-items: center;
`;

const LargeChild = styled(View)`
  background-color: #1e263c;
  width: 72%;
  height: 72%;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
`;

const style = StyleSheet.create({
  prg: {
    color: '#424242',
    fontSize: 30,
    fontFamily: 'ConcertOne-Regular',
  },
});

export default CircularProgress;
