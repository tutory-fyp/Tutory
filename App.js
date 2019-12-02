import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const tabNavigator = createBottomTabNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
});

export default createAppContainer(tabNavigator);
