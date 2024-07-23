/* eslint-disable react-native/no-inline-styles */
import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import BannerAd from '../components/ads';
import Box from '../components/General/Box';
import LoaderOverlay from '../components/General/Loading';
import GeneralSectionTitle from '../components/General/Section';
import PlayHeader from '../components/Header/play';
import PageLayout from '../components/Layout';
import { LoadingText } from '../components/Play/style';
import { StoreFlatContainer, StoreList, storeStyles } from '../components/Store';
import StoreCard, { StoreCardMini } from '../components/Store/card';
import responsive from '../lib/responsive';
import { getCreditAction } from '../redux/actions/profile';
import {
  buyStoreItemAction,
  doneWatchingAdsAction,
  getStoreAction,
} from '../redux/actions/store';
import { StoreItem } from '../redux/reducers/store/types';
import { useTypedSelector } from '../redux/store';
import admobService from '../services/admob';
import { sortStoreByType } from '../utils/store';
import { fireToast } from '../utils/toast';
import { PaymentModal } from './payment';

const StoreScreen = () => {
  const allItems = useTypedSelector(state => state.store.allItems);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [url, setUrl] = useState('');

  const [refreshing, setRefreshing] = useState(false);

  const closePaymentModal = () => {
    setPaymentModal(false);
  };

  useEffect(() => {
    dispatch(getStoreAction());
    dispatch(getCreditAction());
  }, [dispatch]);

  const {pack, single} = sortStoreByType(allItems);

  const handleBuy = (item: StoreItem) => {
    setLoading(true);
    console.log('setting', item._id);
    if (item.is_ad) {
      callAds(item._id);
    } else {
      dispatch(buyStoreItemAction(item._id, onCreateOrderSuccess, onError));
    }
  };

  const onCreateOrderSuccess = (authorizationUrl: string) => {
    setLoading(false);
    setUrl(authorizationUrl);
    setPaymentModal(true);
  };

  const onError = (msg: string) => {
    setLoading(false);
    fireToast({text: msg});
  };

  const onPaymentSuccess = () => {
    setPaymentModal(false);

    setTimeout(() => {
      dispatch(getCreditAction());
    }, 1500);
  };

  const callAds = (id: string) => {
    console.log(' i have reached ads call');
    admobService.triggerFreeCredit(() => {
      setLoading(false);
      dispatch(doneWatchingAdsAction(id));
    });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(
      getStoreAction(() => {
        setRefreshing(false);
      }),
    );
  };

  return (
    <>
      {url ? (
        <PaymentModal
          onDone={onPaymentSuccess}
          url={url}
          close={closePaymentModal}
          visible={paymentModal}
        />
      ) : null}
      <LoaderOverlay visible={loading} />
      <PageLayout>
        <Box margin="xs" style={{flex: 1}}>
          <PlayHeader />
          <Box style={{flex: 1, width: '100%'}}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  tintColor="#000"
                  onRefresh={handleRefresh}
                  refreshing={refreshing}
                />
              }
              showsVerticalScrollIndicator={false}>
              <GeneralSectionTitle>Store</GeneralSectionTitle>
              <StoreList>
                {allItems.length ? (
                  <StoreFlatContainer>
                    <FlatList
                      numColumns={2}
                      data={single}
                      columnWrapperStyle={storeStyles.col}
                      keyExtractor={(item: StoreItem) => item._id}
                      renderItem={({item}) => (
                        <StoreCardMini
                          onPress={handleBuy}
                          key={item._id}
                          item={item}
                        />
                      )}
                    />
                    <FlatList
                      data={pack}
                      keyExtractor={item => item.name}
                      renderItem={({item, index}) => (
                        <StoreCard
                          onPress={handleBuy}
                          key={index}
                          item={item}
                        />
                      )}
                    />
                  </StoreFlatContainer>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      marginTop: responsive.height(15),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <LoadingText>No Store Item is available</LoadingText>
                  </View>
                )}
              </StoreList>
            </ScrollView>
          </Box>
        </Box>
        <BannerAd />
      </PageLayout>
    </>
  );
};

export default StoreScreen;
