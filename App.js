import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ImagePickerScreen from './src/screens/ImagePickerScreen';
import RoleSelectorScreen from './src/screens/RoleSelectorScreen';

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
                props.title = "DH";
            },
        },
    }),
}, {
    initialRouteName: 'loginFlow',
});

export default createAppContainer(switchNavigator);
