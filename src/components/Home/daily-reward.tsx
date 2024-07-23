import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Coin from '../../assets/svg/coin2.svg';
import Confetti from '../../assets/svg/confetti.svg';
import { dailyLoginAction } from '../../redux/actions/profile';
import Box from '../General/Box';
import CustomModal from '../General/CustomModal';
import {
  DailyRewardContent,
  DailyRewardPointContainer,
  DailyRewardPointText,
  DailyRewardText,
  DailyRewardTitle,
} from './daily-reward-style';

const initial = {
  show: false,
  message: '',
  reward: {
    coin: 0,
    double: 0,
    pass: 0,
  },
};

const DailyRewardModal = () => {
  const dispatch = useDispatch();
  const [dailyModal, setDailyModal] = useState(initial);

  const onReceiveReward = (resp: any) => {
    if (resp.reward.coin) {
      setDailyModal({...resp, show: true});
    }
  };

  useEffect(() => {
    dispatch(dailyLoginAction(onReceiveReward));
  }, [dispatch]);

  const close = () => {
    setDailyModal(initial);
  };

  return (
    <>
      <CustomModal header close={close} visible={dailyModal.show}>
        <Box padding="m">
          <DailyRewardContent>
            <Confetti />
            <DailyRewardTitle>Daily Bonus!</DailyRewardTitle>
            <DailyRewardText>{dailyModal.message}</DailyRewardText>
            <DailyRewardPoint value={dailyModal?.reward?.coin} />
          </DailyRewardContent>
        </Box>
      </CustomModal>
    </>
  );
};

const DailyRewardPoint = ({value}: {value: number}) => {
  return (
    <DailyRewardPointContainer>
      <Coin width={60} height={60} />
      <DailyRewardPointText>x{value}</DailyRewardPointText>
    </DailyRewardPointContainer>
  );
};

export default DailyRewardModal;
