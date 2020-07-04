import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _gotoNotifications = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Notifications');
  };

  _gotoProfileScreen = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={styles.header}>
          <Appbar.Action
            icon="menu"
            onPress={this.props.navigation.openDrawer}
          />
          <Appbar.Content title="Home" />
          <Appbar.Action icon="bell" onPress={this._gotoNotifications} />
        </Appbar>
        <View style={styles.content}>
          <Text style={styles.updateProfileText}>
            Please update your Profile To Continue
          </Text>
          <Button
            mode="contained"
            style={styles.updateProfileBtn}
            onPress={this._gotoProfileScreen}>
            Complete Profile
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateProfileText: {
    color: PRIMARY_COLOR,
    fontSize: hp('3%'),
    textAlign: 'justify',
    marginHorizontal: wp('2%'),
  },
  updateProfileBtn: {
    marginTop: 10,
  },
});

export default HomeScreen;
