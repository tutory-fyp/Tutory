import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import { PRIMARY_COLOR } from '../../constants/commonColors';
import { Dimensions } from 'react-native';
import { tutorScreens } from '../../screens';

// Tutor Dashboard Screens

const {
  HomeScreen,
  EnrolledStudentsScreen,
  NotificationScreen,
  EnrolledStudentScreen,
  MapScreen,
  MessagesScreen,
  MessageScreen,
  ProfileScreen,
  SettingsScreen,
  ViewCourseMarksScreen,
  ViewAttendanceScreen,
  AttendanceDetailsScreen,
  MarksDetailsScreen,
  Drawer,
} = tutorScreens;

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
    EnrolledStudents: EnrolledStudentsScreen,
    EnrolledStudent: EnrolledStudentScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const messagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
    Message: MessageScreen,
  },
  {
    initialRouteName: 'Messages',
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
    Messages: {
      screen: messagesStack,
      navigationOptions: {
        tabBarIcon: _iconHandler('android-messages'),
        tabBarLabel: 'Messages',
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
    ViewAttendance: ViewAttendanceScreen,
    AttendanceDetails: AttendanceDetailsScreen,
    ViewCourseMarks: ViewCourseMarksScreen,
    MarksDetails: MarksDetailsScreen,
  },
  {
    headerMode: 'none',
  },
);

const drawerNav = createDrawerNavigator(
  {
    Dashboard: rootStack,
  },
  {
    initialRouteName: 'Dashboard',
    contentComponent: Drawer,
    drawerWidth: (Dimensions.get('window').width * 3) / 4,
  },
);

export default drawerNav;
