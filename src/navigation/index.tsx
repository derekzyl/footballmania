import { useTypedSelector } from '../redux/store';

import React from 'react';
// import { AppBg } from '../components/Layout/style';

import { View } from 'native-base';
import AuthStack from './auth';
import MainStack from './main';

const RootNavigation = () => {
  const isAuthenticated = useTypedSelector(state => state.auth.isAuthenticated);
  // return <AppBg>{!isAuthenticated ? <MainStack /> : <AuthStack />}</AppBg>;
  return <View>{isAuthenticated ? <MainStack /> : <AuthStack />}</View>;
};

export default RootNavigation;
