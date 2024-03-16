import React, {ReactNode} from 'react';
import {BlockContainer, BlockDepth, BlockOuter, BlockDepth2} from './style';

interface CardWithDepthProp {
  children: ReactNode;
  bR?: number;
  height?: number;
  px?: boolean;
}

export const CardWithDepth = ({children, bR, px = true}: CardWithDepthProp) => {
  return (
    <BlockContainer>
      <BlockOuter bgColor="#fff" px={px} bR={bR}>
        {children}
      </BlockOuter>
      <BlockDepth bgColor="#D3D3D3" bR={bR} />
    </BlockContainer>
  );
};

export const CardWithDoubleDepth = ({
  children,
  bR,
  height,
}: CardWithDepthProp) => {
  return (
    <BlockContainer>
      <BlockOuter height={height} bR={bR}>
        {children}
      </BlockOuter>
      <BlockDepth2 bR={12} bgColor="#9393c3" />
      <BlockDepth bR={12} />
    </BlockContainer>
  );
};
