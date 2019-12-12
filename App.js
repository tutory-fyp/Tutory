import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ImagePickerScreen from './src/screens/ImagePickerScreen';

const switchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Image: ImagePickerScreen,
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(switchNavigator);
