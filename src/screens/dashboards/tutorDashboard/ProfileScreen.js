import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Input } from 'react-native-elements';
import { Picker } from '@react-native-community/picker';
import { Appbar, Avatar, Button, TextInput } from 'react-native-paper';
import Ripple from 'react-native-material-ripple';
import { personImage } from '../../../constants/images';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      gender: 'none',
      minHour: 7,
      maxHour: 23,
    };
  }

  _handleHours = ([minHour, maxHour]) => {
    this.setState({ minHour, maxHour });
  };

  _handleHoursPrinting = hour => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour === 12) {
      return `${hour}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={styles.header}>
          <Appbar.Action
            icon="menu"
            onPress={this.props.navigation.openDrawer}
          />
          <Appbar.Content title="Profile" />
        </Appbar>
        <ScrollView contentContainerStyle={styles.content}>
          <Avatar.Image size={150} source={personImage} />
          <Button
            mode="outlined"
            style={styles.profilePic}
            onPress={() => {}}
            icon="camera">
            Upload Profile Picture
          </Button>
          <View style={styles.card}>
            <KeyboardAvoidingView
              behavior="padding"
              keyboardVerticalOffset={-40}
              style={{ flex: 1 }}>
              <View
                style={{
                  marginVertical: hp('1%'),
                }}
              />
              <Input
                label="QUALIFICATION"
                placeholder="Enter your Qualification"
                labelStyle={{
                  color: '#a2acb4',
                }}
              />
              <View
                style={{
                  marginVertical: hp('1%'),
                }}
              />
              <Text style={styles.label}>SELECT GENDER</Text>
              <Picker
                mode="dropdown"
                onValueChange={gender => this.setState({ gender })}
                selectedValue={this.state.gender}>
                <Picker.Item label="Select Gender" value="none" color="grey" />
                <Picker.Item label="Male" value="male" color="black" />
                <Picker.Item label="Female" value="female" color="black" />
              </Picker>
              <View
                style={{
                  marginVertical: hp('1%'),
                }}
              />
              <Input
                label="INTRODUCTION"
                placeholder="Write about yourself"
                labelStyle={{
                  color: '#a2acb4',
                }}
              />
              <View
                style={{
                  marginVertical: hp('1%'),
                }}
              />
              <Input
                label="TEACHING EXPERIENCE"
                placeholder="Write about your experience"
                labelStyle={{
                  color: '#a2acb4',
                }}
              />
              <View
                style={{
                  marginVertical: hp('1%'),
                }}
              />
              <Text style={styles.label}>SELECT YOUR AVAILABILITY HOURS</Text>
              <View
                style={{
                  marginVertical: hp('1%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: 45,
                    width: 100,
                    borderWidth: 1,
                    borderColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{this._handleHoursPrinting(this.state.minHour)}</Text>
                </View>
                <Text style={{ alignSelf: 'center', marginHorizontal: 45 }}>
                  to
                </Text>
                <View
                  style={{
                    height: 45,
                    width: 100,
                    borderWidth: 1,
                    borderColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>{this._handleHoursPrinting(this.state.maxHour)}</Text>
                </View>
              </View>
              <Text />
              <MultiSlider
                values={[this.state.minHour, this.state.maxHour]}
                selectedStyle={{ backgroundColor: PRIMARY_COLOR }}
                markerStyle={{ backgroundColor: PRIMARY_COLOR }}
                containerStyle={{ alignSelf: 'center' }}
                min={10}
                max={23}
                step={1}
                onValuesChange={this._handleHours}
              />
            </KeyboardAvoidingView>
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
  header: {
    marginBottom: 8,
  },
  content: {
    alignItems: 'center',
  },
  profilePic: {
    marginTop: hp('3%'),
  },
  card: {
    marginTop: hp('2%'),
    width: wp('95%'),
    padding: wp('3%'),
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 1,
  },
  label: {
    color: '#a2acb4',
    fontWeight: 'bold',
    fontSize: hp('2.4%'),
    marginLeft: wp('2%'),
  },
});

export default ProfileScreen;
