import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Appbar, Button, Headline } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approved: true,
    };
  }

  _gotoEnrolledStudentsScreen = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('EnrolledStudents');
  };

  _gotoPreviouslyEnrolledStudentsScreen = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('PreviousEnrolledStudents');
  };

  _renderApprovedHome = () => (
    <View style={styles.approvedContent}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.card}
          onPress={this._gotoEnrolledStudentsScreen}>
          <Text
            style={{
              fontSize: hp('3%'),
              fontWeight: 'bold',
              color: PRIMARY_COLOR,
            }}>
            Enrolled Students
          </Text>
          <View
            style={{
              position: 'absolute',
              right: wp('3%'),
            }}>
            <Entypo
              name="chevron-right"
              size={hp('5%')}
              color={PRIMARY_COLOR}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={this._gotoPreviouslyEnrolledStudentsScreen}>
          <Text
            style={{
              fontSize: hp('3%'),
              fontWeight: 'bold',
              color: PRIMARY_COLOR,
            }}>
            View Previous Students
          </Text>
          <View
            style={{
              position: 'absolute',
              right: wp('3%'),
            }}>
            <Entypo
              name="chevron-right"
              size={hp('5%')}
              color={PRIMARY_COLOR}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  _renderUnApprovedHome = () => (
    <View style={styles.unApprovedcontent}>
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
  );

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
        {this.state.approved
          ? this._renderApprovedHome()
          : this._renderUnApprovedHome()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  unApprovedcontent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  approvedContent: {
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
  card: {
    width: wp('90%'),
    marginVertical: hp('2%'),
    backgroundColor: '#fff',
    borderRadius: 100 / 8,
    elevation: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
  },
});

export default HomeScreen;
