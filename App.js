import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ImagePickerScreen from './src/screens/ImagePickerScreen';
import RoleSelectorScreen from './src/screens/RoleSelectorScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Login: LoginScreen,
        RoleSelector: RoleSelectorScreen,
        Signup: SignupScreen,
    }, {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerTransparent: true,
            headerBackImage: (props) => {
                return (
                    <Icon name="arrow-left" size={25} color="white" />
                );
            },
        },
    }),
}, {
    initialRouteName: 'loginFlow',
});

export default createAppContainer(switchNavigator);
