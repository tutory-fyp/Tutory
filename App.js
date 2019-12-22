import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import RoleSelectorScreen from './src/screens/RoleSelectorScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/DashboardScreens/HomeScreen';
import NotificationScreen from './src/DashboardScreens/NotificationScreen';
import SettingScreen from './src/DashboardScreens/SettingScreen';
import ProfileScreen from './src/DashboardScreens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const loginFlowNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Login: LoginScreen,
        RoleSelector: RoleSelectorScreen,
        Signup: SignupScreen,
    }, {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            header: null,
        },
    }),
}, {
    initialRouteName: 'loginFlow',
});

const MainTabs = createMaterialBottomTabNavigator({
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
},
    {

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
    });
const DashboardStackNavigator = createStackNavigator(
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
        screen: DashboardStackNavigator,
    },
    Login: LoginScreen,
    //rootNavigator:rootNavigator
}, {
    drawerBackgroundColor: '#ffff',
});

const rootNavigator = createSwitchNavigator({
    loginFlow: loginFlowNavigator,
    dashboardFlow: AppDrawerNavigator,
}, {
    initialRouteName: 'loginFlow',
    headerMode: 'none'
})


export default createAppContainer(rootNavigator);
