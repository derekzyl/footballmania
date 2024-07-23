import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProfileSetupScreen from '../screens/profile-setup';
import { SplashScreen } from '../screens/splash.screen';

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
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthPin">
      {screens.map((screen, index) => (
        <Stack.Screen key={index} name={screen.name} component={screen.component} />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
