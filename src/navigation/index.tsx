import {AppBg} from '@src/components/Layout/style';
import {useTypedSelector} from '@src/redux/store';
import React from 'react';
import AuthStack from './auth';
import MainStack from './main';

const RootNavigation = () => {
  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated,
  );
  // return <AppBg>{!isAuthenticated ? <MainStack /> : <AuthStack />}</AppBg>;
  return <AppBg>{isAuthenticated ? <MainStack /> : <AuthStack />}</AppBg>;
};

export default RootNavigation;
