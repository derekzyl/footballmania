import React from 'react';
// import {AdMobBanner} from 'react-native-admob';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import {getBannerAdUnit} from '@src/services/_constants';

const BannerAd = () => {
  const bannerAdUnit = getBannerAdUnit();
  return (
    <View style={styles.view}>
      {/* <AdMobBanner bannerSize="smartBannerPortrait" adUnitID={bannerAdUnit} /> */}
    </View>
  );
};

export default BannerAd;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    alignItems: 'center',
  },
});
