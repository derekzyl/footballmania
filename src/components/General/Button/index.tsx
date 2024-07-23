import { View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { BlockContainer, BlockDepth, BlockOuter } from '../Cards/style';
import { StyledText } from '../Text';

import responsive from './../../../lib/responsive';
import { ButtonVariant, getBtnColors } from './variants';

export interface CustomButtonProp {
  text?: string;
  children?: any;
  variant: ButtonVariant;
  textColor?: string;
  iconName?: string;
  onPress?: () => void;
  size?: 'normal' | 'small';
  disabled?: boolean;
  style?: any;
}

export const CustomButton = ({
  text,
  children,
  variant = ButtonVariant.green,
  iconName,
  onPress,
  size = 'normal',
  disabled = false,
  style = {},
}: CustomButtonProp) => {
  const {backgroundColor, shadowColor, color, border} = getBtnColors(variant);

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.7} onPress={onPress}>
      <BlockContainer disabled={disabled}>
        <BlockOuter size={size} border={border} bgColor={backgroundColor}>
          {text ? (
            <ButtonInner style={{...style}}>
              {iconName && (
                <ButtonIcon>
                  <Icons size={22} name={iconName} color={color} />
                </ButtonIcon>
              )}
              <ButtonText color={color}>{text}</ButtonText>
            </ButtonInner>
          ) : (
            <>{children}</>
          )}
        </BlockOuter>
        <BlockDepth bgColor={shadowColor} />
      </BlockContainer>
    </TouchableOpacity>
  );
};

export const ButtonIcon = styled(View)`
  margin-right: ${responsive.width(4)}px;
`;

export const ButtonText = styled(StyledText)<{color?: string}>`
  text-align: center;
  font-size: 20px;
  color: ${({color}) => (color ? color : '#000')};
  font-weight: 300;
`;

export const ButtonInner = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
