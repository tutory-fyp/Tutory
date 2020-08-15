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
    this.state = {};
  }

  _gotoAddStudentScreen = () => {
    this.props?.navigation?.navigate('AddStudent');
  };

  _gotoViewStudentsScreen = () => {
    this.props?.navigation?.navigate('ViewStudent');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.card}
            onPress={this._gotoAddStudentScreen}>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: 'bold',
                color: PRIMARY_COLOR,
              }}>
              Add Student
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
            onPress={this._gotoViewStudentsScreen}>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: 'bold',
                color: PRIMARY_COLOR,
              }}>
              View Students
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
  }

  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: wp('90%'),
    marginVertical: hp('5%'),
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
