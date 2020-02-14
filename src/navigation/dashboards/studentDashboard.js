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
import {
    Dimensions,
} from 'react-native';
import ViewAttendanceScreen from '../../screens/dashboard/studentDashboard/drawerScreens/ViewAttendanceScreen';
import AttendanceDetailsScreen from '../../screens/dashboard/studentDashboard/drawerScreens/AttendanceDetailsScreen';
import ViewCourseMarksScreen from '../../screens/dashboard/studentDashboard/drawerScreens/ViewCourseMarksScreen';
import MarksDetailsScreen from '../../screens/dashboard/studentDashboard/drawerScreens/MarksDetailsScreen';
import Drawer from '../../screens/dashboard/studentDashboard/drawerScreens/Drawer';

function _iconHandler(name) {
    return (
        <Icon
            style={{ fontSize: 25, color: 'white' }}
            type="Ionicons"
            name={name}
        />
    );
}

const homeStack = createStackNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
} ,{
    initialRouteName: 'Home',
    headerMode: 'none',
});

const tabNav = createMaterialBottomTabNavigator({
    homeStack: {
        screen: homeStack,
        navigationOptions: {
            tabBarIcon: _iconHandler('ios-home'),
            tabBarLabel: 'Home',
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: _iconHandler('ios-body'),
            tabBarLabel: "Profile"
        }
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: _iconHandler('ios-notifications'),
            tabBarLabel: "Notifications"
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarIcon: _iconHandler('ios-settings'),
            tabBarLabel: "Settings"
        }
    }
} ,{
    initialRouteName: "homeStack",
    navigationOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'yellow',
        labelStyle: {
            fontSize: 23,
            fontWeight: 'bold',
        },
        labelPosition: 'below-icon',
        tabStyle: {
            paddingTop: 10,
        },
        keyboardHidesTabBar: 'false',
        style: {
            backgroundColor: '#3284E8',
        },
    },
    barStyle: { backgroundColor: PRIMARY_COLOR, },
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
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width * 3/4,
});

export default drawerNav;