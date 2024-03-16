const palette = {
  primary: '#5A31F4',
  modalBg: '#FFF9E9',
  textWhite: '#FFFFFF',
  cardBg: '#FFF9E9',
  depthCardBg: '#D3D3D3',
  accent1: '#AECE45',
};

export const theme = {
  colors: palette,
  spacing: {
    xs: 5,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
    },
  },
};

export const darkTheme = {
  ...theme,
};

export type CustomThemeType = typeof theme;
