import {BlurView} from '@react-native-community/blur';
import {View} from 'native-base';
import React, {ReactNode} from 'react';
import {Platform, StyleSheet} from 'react-native';
import Box from '../General/Box';

interface BlurbackgroundProp {
  children: ReactNode;
  noMargin?: boolean;
  isFlex?: boolean;
  alt?: boolean;
}

const BlurBackground = ({
  children,
  isFlex = false,
  noMargin = false,
}: BlurbackgroundProp) => {
  return (
    <View style={[styles.container, isFlex && styles.flex]}>
      {noMargin ? <>{children}</> : <Box>{children}</Box>}
      {Platform.OS === 'ios' ? <GeneralBlur /> : <View style={styles.blur} />}
    </View>
  );
};

const GeneralBlur = () => {
  return (
    <BlurView
      blurType={Platform.OS === 'ios' ? 'ultraThinMaterialDark' : 'light'}
      reducedTransparencyFallbackColor="white"
      style={styles.blur}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    // borderColor: '#27AE60',
    borderColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
  },
  blur: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      Platform.OS === 'ios' ? 'transparent' : 'rgba(81, 81, 81,0.8)',

    borderRadius: 20,
  },
});

export default BlurBackground;

// 89665391282869006
