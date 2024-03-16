import {Perks} from '@src/redux/reducers/play/types';

export const getPassPerks = (perks: Perks) => {
  const newPerks = {
    coins: perks.coins / 2,
    points: perks.points / 2,
  };
  return newPerks;
};
