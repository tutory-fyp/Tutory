import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screens/dashboard/studentDashboard/HomeScreen';
import SearchScreen from '../../screens/dashboard/studentDashboard/SearchScreen';
import { Icon } from 'native-base';
import {
  PRIMARY_COLOR, 
} from '../../constants/commonColors';
import ProfileScreen from '../../screens/dashboard/studentDashboard/ProfileScreen';
import NotificationScreen from '../../screens/dashboard/studentDashboard/NotificationScreen';
import SettingsScreen from '../../screens/dashboard/studentDashboard/SettingsScreen';
import MessageScreen from '../../screens/dashboard/studentDashboard/MessageScreen';
import {
    Dimensions,
} from 'react-native';
import ViewAttendanceScreen from '../../screens/dashboard/studentDashboard/drawerScreens/ViewAttendanceScreen';
import AttendanceDetailsScreen from '../../screens/dashboard/studentDashboard/drawerScreens/AttendanceDetailsScreen';
import ViewCourseMarksScreen from '../../screens/dashboard/studentDashboard/drawerScreens/ViewCourseMarksScreen';
import MarksDetailsScreen from '../../screens/dashboard/studentDashboard/drawerScreens/MarksDetailsScreen';
import Drawer from '../../screens/dashboard/studentDashboard/drawerScreens/Drawer';
import loginStack from '../login';

const _iconHandler = (name, type) => (
    <Icon
        style={{ fontSize: 25, color: PRIMARY_COLOR }}
        type={type || "MaterialCommunityIcons"}
        name={name}
    />
);

const homeStack = createStackNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
    Notifications: NotificationScreen,
} ,{
    initialRouteName: 'Home',
    headerMode: 'none',
});

const tabNav = createMaterialBottomTabNavigator({
    homeStack: {
        screen: homeStack,
        navigationOptions: {
            tabBarIcon: _iconHandler('home-variant'),
            tabBarLabel: 'Home',
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: _iconHandler('ios-body', 'Ionicons'),
            tabBarLabel: "Profile"
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarIcon: _iconHandler('settings'),
            tabBarLabel: "Settings"
        }
    },
    Message: {
        screen: MessageScreen,
        navigationOptions: {
            tabBarIcon: _iconHandler('android-messages'),
            tabBarLabel: "Messages"
        }
    }
} ,{
    initialRouteName: "homeStack",
    activeColor: PRIMARY_COLOR,
    barStyle: { backgroundColor: 'white', },
    backBehavior: 'initialRoute',
    labeled: true,
});

const rootStack = createStackNavigator({
    MainTabs: tabNav,
    ViewAttendance: ViewAttendanceScreen,
    AttendanceDetails: AttendanceDetailsScreen,
    ViewCourseMarks: ViewCourseMarksScreen,
    MarksDetails: MarksDetailsScreen,
}, {
    headerMode: 'none',
})

const drawerNav = createDrawerNavigator({
    Dashboard: rootStack,
}, {
    initialRouteName: 'Dashboard',
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width * 3/4,
});

export default drawerNav;