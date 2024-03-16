// import {use} from 'react';
import { useTypedSelector } from '@src/redux/store';
import SoundPlayer from 'react-native-sound-player';

const useSound = () => {
  const music = useTypedSelector((state) => state.music.music_id);
  console.log(music, 'this is music id');

  const play = () => {
    try {
      const sounds = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'waitingroom',
      ];

      // SoundPlayer.playSoundFile('waitingroom', 'mp3');

      SoundPlayer.playSoundFile(sounds[Number(music)], 'mp3');
      // or play from url
    } catch (e) {
      console.log('cannot play the sound file', e);
    }
  };

  const stop = () => {
    SoundPlayer.stop();
  };

  return { play, stop };
};

export default useSound;
