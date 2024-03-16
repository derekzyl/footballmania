import {useRef} from 'react';

const useTimer = () => {
  const startTime = useRef(new Date());

  const restartTimer = () => {
    startTime.current = new Date();
  };

  const getUsedTime = () => {
    const present = new Date();
    return present.getTime() - startTime.current.getTime();
  };

  return {getUsedTime, restartTimer};
};

export default useTimer;
