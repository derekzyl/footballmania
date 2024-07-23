import React from 'react';
import { Session } from '../../redux/reducers/play/types';
import { getFormattedTime, getWeekday } from '../../utils/date';
import BlurBackground from '../Layout/blur';
import {
  GameCardBase,
  GameCardContainer,
  GameCardContent,
  GameCardPointContainer,
  GameCardPointContent,
  GameCardPointText,
  GameCardSubTitle,
  GameCardText,
  GameCardTitle,
  GameCardTop,
  GameCoin,
} from './style';

interface GameCard {
  item: Session;
  onPress: (id: Session) => void;
}

const GameCard = ({item, onPress}: GameCard) => {
  const handleClick = () => {
    onPress?.(item);
  };

  const weekday = getWeekday(item.date_time);
  const fTime = getFormattedTime(item.date_time);

  const timeDiff =
    (new Date(item.date_time).getTime() - new Date().getTime()) / 1000;

  const hasExpired = timeDiff <= 0;

  const expiredStyle = {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 10,
    opacity: 0.4,
  };

  return (
    <GameCardContainer
      onPress={hasExpired ? () => {} : handleClick}
      activeOpacity={hasExpired ? 1 : 0.7}>
      <BlurBackground alt>
        <GameCardContent>
          <GameCardTop>
            <GameCardTitle> {item.name}</GameCardTitle>
            <GameCardSubTitle>
              {' '}
              amount to earn:{' '}
              {item.currency_type ? <>{item.currency_type}</> : <>NGR</>}{' '}
              {item.amount_to_earn}
            </GameCardSubTitle>
          </GameCardTop>
          <GamePoint value={item.credits_to_join} />
          <GameCardBase>
            <GameCardText style={hasExpired && expiredStyle}>
              {!hasExpired ? (
                <>
                  {weekday} - {fTime}
                </>
              ) : (
                <>Expired</>
              )}
            </GameCardText>
            <GameCardText>Entry-{item.entry}</GameCardText>
          </GameCardBase>
        </GameCardContent>
      </BlurBackground>
    </GameCardContainer>
  );
};

const GamePoint = ({value}: {value?: number}) => {
  return (
    <GameCardPointContainer>
      <GameCardPointContent>
        <GameCoin />
        <GameCardPointText>{value || 0}</GameCardPointText>
      </GameCardPointContent>
    </GameCardPointContainer>
  );
};

export default GameCard;
