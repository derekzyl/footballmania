import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {getGeneralAction} from '@src/redux/actions/general';
import {getProfileAction} from '@src/redux/actions/profile';
import CategoryScreen from '@src/screens/category.screen';
import GameSelectScreen from '@src/screens/game-select.screen';
import HomeScreen from '@src/screens/home.screen';
import LeaderboardScreen from '@src/screens/leaderboard.screen';
import PlayScreen from '@src/screens/play.screen';
import ProfileScreen from '@src/screens/profile.screen';
import SettingsScreen from '@src/screens/settings.screen';
import AboutScreen from '@src/screens/about.screen';
import StoreScreen from '@src/screens/store.screen';
import TermsScreen from '@src/screens/terms.screen';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
    dispatch(getGeneralAction());
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="none"
      initialRouteName="Home">
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
