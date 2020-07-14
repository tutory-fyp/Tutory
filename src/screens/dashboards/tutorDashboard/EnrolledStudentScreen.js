import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Appbar, Avatar, Button } from 'react-native-paper';
import { personImage } from '../../../constants/images';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class EnrolledStudentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _goBack = () => {
    const {
      navigation: { goBack },
    } = this.props;
    goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={styles.header}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Enrolled Student" />
        </Appbar>
        <ScrollView contentContainerStyle={styles.content}>
          <Avatar.Image
            style={{
              marginTop: hp('2%'),
              alignSelf: 'center',
            }}
            size={150}
            source={personImage}
          />
          <View
            style={{
              marginTop: hp('3%'),
            }}>
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Name: </Text>
              <Text style={styles.infoText}>
                {this.props?.navigation.getParam('name')}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Class: </Text>
              <Text style={styles.infoText}>
                {this.props?.navigation.getParam('class')}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Subjects: </Text>
              <Text style={styles.infoText}>Maths</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Timing: </Text>
              <Text style={styles.infoText}>7:00 PM To 8:00 PM</Text>
            </View>
            <View style={styles.divider} />
          </View>
          <View style={styles.actions}>
            <Button
              style={styles.actionsBtn}
              mode="contained"
              onPress={() => {}}>
              UPLOAD MARKS
            </Button>
            <Button
              style={styles.actionsBtn}
              mode="contained"
              onPress={() => {}}>
              Mark Attendance
            </Button>
            <Button
              style={styles.actionsBtn}
              mode="contained"
              onPress={() => {}}>
              Give Daily Feedback
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginVertical: hp('2%'),
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('2%'),
  },
  infoText: {
    fontSize: hp('3%'),
  },
  divider: {
    marginVertical: hp('3%'),
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: wp('100%'),
  },
  actions: {
    marginVertical: hp('3%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: wp('2%'),
  },
  actionsBtn: {
    width: wp('40%'),
    margin: wp('2%'),
  },
});

export default EnrolledStudentScreen;
