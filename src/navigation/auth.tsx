import {createStackNavigator} from '@react-navigation/stack';
import ProfileSetupScreen from '@src/screens/profile-setup';
import SplashScreen from '@src/screens/splash.screen';
import React from 'react';

const Stack = createStackNavigator();

const screens = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'ProfileSetup',
    component: ProfileSetupScreen,
  },
];

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AuthPin">
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
