import {Container, View} from 'native-base';
import React, {ReactNode} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PageBackgroundImageContainer} from './style';

interface PageLayoutProp {
  children: ReactNode;
}

const PageLayout = ({children}: PageLayoutProp) => {
  return (
    <Container>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <PageBackgroundImage>
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.contentContainer}>{children}</View>
        </SafeAreaView>
      </PageBackgroundImage>
    </Container>
  );
};

export const PageBackgroundImage = ({children}: {children: ReactNode}) => {
  return (
    <PageBackgroundImageContainer
      resizeMode="cover"
      source={require('../../assets/img/appBg.png')}>
      {children}
    </PageBackgroundImageContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

export default PageLayout;
