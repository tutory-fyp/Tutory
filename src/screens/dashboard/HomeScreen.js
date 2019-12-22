import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop:80}}>
          Home Screen
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});

