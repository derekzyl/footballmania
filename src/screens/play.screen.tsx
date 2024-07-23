import { useNavigation } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import ExitModal from '../components/ExitModal';
import PlayLayout from '../components/Layout/play';
import PlayMain from '../components/Play';
import PlayLoading from '../components/Play/loading';

const PlayScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [exitModal, setExitModal] = useState(false);

  const exitEvent: any = useRef();

  const handleCountdownDone = () => {
    setLoading(false);
  };

  // const addBackHandler = () => {
  //   navigation.addListener('beforeRemove', (e) => {
  //     e.preventDefault();
  //     setExitModal(true);
  //     exitEvent.current = e.data.action;
  //   });
  // };

  const closeModal = () => {
    setExitModal(false);
  };

  const quitGame = () => {
    if (exitEvent.current) {
      navigation.dispatch(exitEvent.current);
    }
  };

  // useEffect(() => {
  //   addBackHandler();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PlayLayout fullPage>
      <ExitModal handleExit={quitGame} close={closeModal} visible={exitModal} />
      {loading ? (
        <PlayLoading onCountdownDone={handleCountdownDone} />
      ) : (
        <PlayMain />
      )}
    </PlayLayout>
  );
};

export default PlayScreen;
