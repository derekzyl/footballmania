import { View } from 'native-base';
import styled from 'styled-components/native';
import Coin from '../../assets/svg/coin2.svg';
import responsive from '../../lib/responsive';
import { StyledText } from '../General/Text';

import { TouchableOpacity } from 'react-native';

export const GameCardPointContainer = styled(View)`
  align-items: center;
  margin: ${responsive.height(2.5)}px 0;
`;

export const GameCardPointContent = styled(View)`
  background-color: #1e263c;
  flex-direction: row;
  align-items: center;
  border-radius: 108px;
  padding: 8px;
`;

export const GameCardPointText = styled(StyledText)`
  color: #fff;
  font-size: 25px;
  padding: 0 ${responsive.width(3.7)}px;
`;

export const GameCardContainer = styled(TouchableOpacity)`
  width: 100%;
  margin-bottom: ${responsive.height(4)}px;
`;

export const GameCardContent = styled(View)`
  padding: ${responsive.height(1.5)}px ${responsive.width(2)}px;
`;

export const GameCoin = styled(Coin)`
  width: 50px;
  height: 50px;
`;

export const GameCardText = styled(StyledText)`
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
`;

export const GameCardTitle = styled(GameCardText)`
  font-size: 20px;
`;
export const GameCardSubTitle = styled(GameCardText)`
  font-size: 15px;
`;

export const GameCardTop = styled(View)`
  align-items: center;
`;

export const GameCardBase = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
