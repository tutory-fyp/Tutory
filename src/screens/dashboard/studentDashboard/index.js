import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import SettingScreen from './SettingScreen';
import ProfileScreen from './ProfileScreen';
import ViewAttendanceScreen from './drawerScreens/ViewAttendanceScreen';

const MainTabs = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        style={{ paddingBottom: 4 }}
                        name="ios-home"
                        size={30}
                    />
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        style={{ paddingBottom: 4 }}
                        name="ios-body"
                        size={30}
                    />
                )
            }
        },
        Notification: {
            screen: NotificationScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        style={{ paddingBottom: 4 }}
                        name="ios-notifications"
                        size={30}
                    />
                )
            }
        },
        Settings: {
            screen: SettingScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        style={{ paddingBottom: 4 }}
                        name="ios-settings"
                        size={30}
                    />
                )
            }
        },
    }, {
        navigationOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'yellow',
        labelStyle: {
            fontSize: 23,
            fontWeight: 'bold'
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
        //activeTintColor: 'red',
        barStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                //headerTitle: routeName,
            };
        }
    }
);

const dashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator: MainTabs
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ marginLeft: 25 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        color="white"
                        size={30}
                    />
                ),
                headerStyle: { backgroundColor: '#3185E8' },
                headerTransparent: 'headerBackground',
                headerTitleStyle: { marginLeft: 115 },

            };
        },

    }
);

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: dashboardStackNavigator,
    },
    viewAttendance: ViewAttendanceScreen,
}, {
    drawerBackgroundColor: '#ffff',
    drawerLockMode: 'unlocked',
});

export default AppDrawerNavigator;