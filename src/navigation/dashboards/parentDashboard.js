import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import { PRIMARY_COLOR } from '../../constants/commonColors';
import { parentScreens } from '../../screens';

// Student Dashboard Screens

const {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SettingsScreen,
} = parentScreens;

const _iconHandler = (name, type) => (
  <Icon
    style={{ fontSize: 25, color: PRIMARY_COLOR }}
    type={type || 'MaterialCommunityIcons'}
    name={name}
  />
);

const homeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Notifications: NotificationScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const tabNav = createMaterialBottomTabNavigator(
  {
    homeStack: {
      screen: homeStack,
      navigationOptions: {
        tabBarIcon: _iconHandler('home-variant'),
        tabBarLabel: 'Home',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: _iconHandler('user', 'FontAwesome'),
        tabBarLabel: 'Profile',
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: _iconHandler('settings'),
        tabBarLabel: 'Settings',
      },
    },
  },
  {
    initialRouteName: 'homeStack',
    activeColor: PRIMARY_COLOR,
    barStyle: { backgroundColor: 'white' },
    backBehavior: 'initialRoute',
    labeled: true,
    keyboardHidesNavigationBar: true,
  },
);

const rootStack = createStackNavigator(
  {
    MainTabs: tabNav,
  },
  {
    headerMode: 'none',
  },
);

export default rootStack;
