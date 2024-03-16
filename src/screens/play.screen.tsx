import {useNavigation} from '@react-navigation/core';
import ExitModal from '@src/components/ExitModal';
import PlayLayout from '@src/components/Layout/play';
import PlayMain from '@src/components/Play';
import PlayLoading from '@src/components/Play/loading';
import React, {useRef, useState} from 'react';

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
