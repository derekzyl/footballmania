// import {use} from 'react';
import SoundPlayer from 'react-native-sound-player';
// import Sound from 'react-native-sound';

const useSound = (_sound: string) => {
  const play = () => {
    try {
      // play the file tone.mp3
      SoundPlayer.playSoundFile('countdown', 'mp3');
      // or play from url
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
    // MySound.play();
    // MySound.play((success) => {
    //   if (success) {
    //     MySound.release();
    //   }
    // });
  };

  const stop = () => {
    SoundPlayer.stop();
    // MySound.stop();
  };

  return {play, stop};
};

export default useSound;
