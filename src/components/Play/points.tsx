import React from 'react';
import {PointContainer, PointLogo, PointText} from './style';
import PointIcon from '@assets/svg/star.svg';

const PlayingPoint = ({alt = false, value = 0}: any) => {
  return (
    <PointContainer alt={alt}>
      <PointLogo alt={alt}>
        <PointIcon width={20} />
      </PointLogo>
      <PointText alt={alt}>{value} Points</PointText>
    </PointContainer>
  );
};

export default PlayingPoint;
