import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { getGeneralAction } from '../redux/actions/general';
import { getProfileAction } from '../redux/actions/profile';
import { useAppDispatch } from '../redux/store';
import AboutScreen from '../screens/about.screen';
import CategoryScreen from '../screens/category.screen';
import GameSelectScreen from '../screens/game-select.screen';
import HomeScreen from '../screens/home.screen';
import LeaderboardScreen from '../screens/leaderboard.screen';
import PlayScreen from '../screens/play.screen';
import ProfileScreen from '../screens/profile.screen';
import SettingsScreen from '../screens/settings.screen';
import StoreScreen from '../screens/store.screen';
import TermsScreen from '../screens/terms.screen';

const Stack = createStackNavigator();

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'GameSelect',
    component: GameSelectScreen,
  },
  {
    name: 'Play',
    component: PlayScreen,
  },
  {
    name: 'Settings',
    component: SettingsScreen,
  },
  {
    name: 'Leaderboard',
    component: LeaderboardScreen,
  },
  {
    name: 'Category',
    component: CategoryScreen,
  },
  {
    name: 'Store',
    component: StoreScreen,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
  },
  {
    name: 'About',
    component: AboutScreen,
  },
  {
    name: 'Terms',
    component: TermsScreen,
  },
];

const MainStack = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
    dispatch(getGeneralAction());
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}

      initialRouteName="Home"
    >
      {screens.map((screen, index) => (
        <Stack.Screen key={index} name={screen.name} component={screen.component} />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
