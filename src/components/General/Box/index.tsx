import useDimensions, {DimensionsType} from '@hooks/useDimensions';
import {CustomThemeType, theme as Theme} from '@theme/index';
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface BoxProps extends React.ComponentProps<typeof View> {
  padding?: keyof typeof Theme.spacing;
  margin?: keyof typeof Theme.spacing;
  backgroundColor?: keyof typeof Theme.colors;
  style?: ViewStyle;
  children?: React.ReactNode;
}

interface ResponsiveValueProp {
  value: keyof typeof Theme.spacing;
  dimensions: DimensionsType;
  theme: CustomThemeType;
}
const getBreakpointForScreenSize = ({
  theme,
  dimensions,
}: {
  theme: CustomThemeType;
  dimensions: DimensionsType;
}) => {
  const sortedBreakpoints = Object.entries(theme.breakpoints).sort(
    (valA: any, valB: any) => {
      return valA[1] - valB[1];
    },
  );

  return sortedBreakpoints.reduce((acc: any, [breakpoint, minWidth]) => {
    if (dimensions.width >= minWidth) {
      return breakpoint;
    }

    return acc;
  }, null);
};

const getResponsiveValue = ({
  value,
  dimensions,
  theme,
}: ResponsiveValueProp) => {
  if (typeof value === 'object') {
    return value[getBreakpointForScreenSize({theme, dimensions})];
  }
  return value;
};

const Box = ({
  style,
  padding = 's',
  margin = 's',
  backgroundColor,
  ...rest
}: BoxProps) => {
  const dimensions = useDimensions();
  return (
    <View
      style={{
        padding:
          Theme.spacing[
            getResponsiveValue({value: padding, dimensions, theme: Theme})
          ],
        margin:
          Theme.spacing[
            getResponsiveValue({value: margin, dimensions, theme: Theme})
          ],
        backgroundColor,
        ...style,
      }}
      {...rest}
    />
  );
};

export default Box;
