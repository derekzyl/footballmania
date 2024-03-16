import {Container, Content, View} from 'native-base';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PageBackgroundImage} from '.';
import {miscLoadingStyle} from '../Play/style';

interface LayoutInterface {
  children: React.ReactNode;
  FooterComponent?: FC;
  fullPage?: boolean;
}

const PlayLayout = ({children, FooterComponent, fullPage}: LayoutInterface) => {
  const options: any = {};
  if (fullPage) {
    options.contentContainerStyle = {flex: 1};
  }
  return (
    <Container>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <PageBackgroundImage>
        {fullPage ? (
          <SafeAreaView style={miscLoadingStyle.box}>
            <View padder style={miscLoadingStyle.box}>
              {children}
            </View>
          </SafeAreaView>
        ) : (
          <Content {...options} showsVerticalScrollIndicator={false} padder>
            {children}
          </Content>
        )}
      </PageBackgroundImage>

      {FooterComponent && (
        // <Footer>
        <FooterComponent />
        // </Footer>
      )}
    </Container>
  );
};

export default PlayLayout;
