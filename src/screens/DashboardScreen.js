import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';



const tabNavigator = createBottomTabNavigator({
    GotoLogin: LoginScreen,
    GotoSignup: SignupScreen,
},
{
    initialRouteName: 'GotoLogin'
});

export default createAppContainer(tabNavigator);
