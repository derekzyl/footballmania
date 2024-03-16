import {View} from 'native-base';
import styled from 'styled-components/native';

export const BlockContainer = styled(View)<{disabled?: boolean}>`
  position: relative;
  opacity: ${({disabled}) => (!disabled ? 1 : 0.7)};
`;

interface BlockOuterProps {
  bgColor?: string;
  bR?: number;
  height?: number;
  border?: string;
  px?: boolean;
  size?: 'normal' | 'small';
}

export const BlockOuter = styled(View)<BlockOuterProps>`
  background-color: ${({bgColor, theme}) => bgColor || theme.colors.cardBg};
  padding: ${({px, size}) =>
    px ? `${size === 'small' ? 8 : 17}px` : `${size === 'small' ? 8 : 17}px 0`};
  border-radius: ${({bR}) => bR || 10}px;
  position: relative;
  min-height: ${({height}) => (height ? height + 'px' : 'auto')};
  border: ${({border}) => (border ? border : 0)};
`;

export const BlockDepth = styled(View)<{bgColor?: string; bR?: number}>`
  position: absolute;
  top: 5px;
  left: 0;
  background-color: ${({bgColor, theme}) =>
    bgColor || theme.colors.depthCardBg};
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: ${({bR}) => bR || 10}px;
`;

export const BlockDepth2 = styled(BlockDepth)`
  width: 97%;
  top: 10px;
  left: 0;
  margin: 0 1.5%;
`;
