import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';



const tabNavigator = createBottomTabNavigator({
    Test: LoginScreen,
    Test1: SignupScreen,
});

export default createAppContainer(tabNavigator);