import {StyleSheet} from 'react-native';

export enum ButtonVariant {
  green = 'green',
  brown = 'brown',
  yellow = 'yellow',
  red = 'red',
  blue = 'blue',
  navy = 'navy',
  white = 'white',
  black = 'black',
  lemon = 'lemon',
}

interface Color {
  backgroundColor: string;
  shadowColor: string;
  color: string;
  border?: string;
}

export const getBtnColors = (variant: ButtonVariant) => {
  let color: Color = {
    backgroundColor: '',
    shadowColor: '',
    color: '',
  };
  switch (variant) {
    case ButtonVariant.green: {
      color = styles.green;
      break;
    }
    case ButtonVariant.brown: {
      color = styles.brown;
      break;
    }
    case ButtonVariant.yellow: {
      color = styles.yellow;
      break;
    }
    case ButtonVariant.red: {
      color = styles.red;
      break;
    }
    case ButtonVariant.blue: {
      color = styles.blue;
      break;
    }

    case ButtonVariant.navy: {
      color = styles.navy;
      break;
    }

    case ButtonVariant.black: {
      color = styles.black;
      break;
    }

    case ButtonVariant.lemon: {
      color = styles.lemon;
      break;
    }

    case ButtonVariant.white: {
      color = {...styles.white, border: '1px solid #8B8E98'};
      break;
    }

    default: {
      break;
    }
  }
  return color;
};

const styles = StyleSheet.create({
  green: {
    backgroundColor: '#27ae60',
    shadowColor: '#1b924d',
    color: '#fff',
  },

  brown: {
    backgroundColor: '#F78201',
    shadowColor: '#E25A04',
    color: '#fff',
  },
  yellow: {
    backgroundColor: '#FFB700',
    shadowColor: '#E79501',
    color: '#fff',
  },

  red: {
    backgroundColor: '#EB4335',
    shadowColor: '#CE392D',
    color: '#fff',
  },

  blue: {
    backgroundColor: '#1877F2',
    shadowColor: '#1366D0',
    color: '#fff',
  },
  navy: {
    backgroundColor: '#1E263C',
    color: '#FFFFFF',
    shadowColor: '#000000',
  },
  lemon: {
    backgroundColor: '#AECE45',
    color: '#FFFFFF',
    shadowColor: '#8EAB2D',
  },
  white: {
    backgroundColor: '#fff',
    shadowColor: '#ddd',
    color: '#000',
  },
  black: {
    backgroundColor: '#1E263C',
    shadowColor: '#000000',
    color: '#FFFBEA',
  },
});
