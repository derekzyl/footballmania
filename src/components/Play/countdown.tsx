import React from 'react';
import CircularProgress from '../General/Progress';

interface PlayCountdown {
  onCountdownEnd: () => void;
  currentIndex: number;
  isTimerActive?: boolean;
}

export const PlayCountdown = ({
  onCountdownEnd,
  currentIndex,
}: // isTimerActive = true,
PlayCountdown) => {
  const countdownMax = 15;
  //  const countdownMax = 5;
  return (
    <CircularProgress
      active={true}
      onComplete={onCountdownEnd}
      index={currentIndex}
      value={countdownMax}
    />
  );
};
