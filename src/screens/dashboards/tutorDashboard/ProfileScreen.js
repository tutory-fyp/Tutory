import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { Input, CheckBox, Button as EButton } from 'react-native-elements';
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
      subjectsSelected: {
        phy: false,
        chem: false,
        maths: false,
        compSci: false,
        bio: false,
      },
      classesSelected: {
        matric: false,
        oALevels: false,
        fsc: false,
      },
      gotoStudent: false,
      studentGotoTutor: false,
      teachOnline: false,
      loading: false,
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
              <Text style={styles.label}>SELECT YOUR AVAILABILITY SLOT</Text>
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
              {/* This is where you select Subjects you want to teach */}
              <Text style={styles.label}>I CAN TEACH THESE SUBJECTS</Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: hp('1%'),
                }}>
                <TouchableOpacity
                  style={[
                    styles.subjects,
                    this.state.subjectsSelected.phy
                      ? { backgroundColor: PRIMARY_COLOR }
                      : {},
                  ]}
                  onPress={() => {
                    this.setState({
                      subjectsSelected: {
                        ...this.state.subjectsSelected,
                        phy: !this.state.subjectsSelected.phy,
                      },
                    });
                  }}>
                  <Text
                    style={[
                      styles.subjectsText,
                      this.state.subjectsSelected.phy ? { color: '#fff' } : {},
                    ]}>
                    Physics
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subjects,
                    this.state.subjectsSelected.chem
                      ? { backgroundColor: PRIMARY_COLOR }
                      : {},
                  ]}
                  onPress={() => {
                    this.setState({
                      subjectsSelected: {
                        ...this.state.subjectsSelected,
                        chem: !this.state.subjectsSelected.chem,
                      },
                    });
                  }}>
                  <Text
                    style={[
                      styles.subjectsText,
                      this.state.subjectsSelected.chem ? { color: '#fff' } : {},
                    ]}>
                    Chemistry
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subjects,
                    this.state.subjectsSelected.maths
                      ? { backgroundColor: PRIMARY_COLOR }
                      : {},
                  ]}
                  onPress={() => {
                    this.setState({
                      subjectsSelected: {
                        ...this.state.subjectsSelected,
                        maths: !this.state.subjectsSelected.maths,
                      },
                    });
                  }}>
                  <Text
                    style={[
                      styles.subjectsText,
                      this.state.subjectsSelected.maths
                        ? { color: '#fff' }
                        : {},
                    ]}>
                    Mathematics
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subjects,
                    this.state.subjectsSelected.bio
                      ? { backgroundColor: PRIMARY_COLOR }
                      : {},
                  ]}
                  onPress={() => {
                    this.setState({
                      subjectsSelected: {
                        ...this.state.subjectsSelected,
                        bio: !this.state.subjectsSelected.bio,
                      },
                    });
                  }}>
                  <Text
                    style={[
                      styles.subjectsText,
                      this.state.subjectsSelected.bio ? { color: '#fff' } : {},
                    ]}>
                    Biology
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.subjects,
                    this.state.subjectsSelected.compSci
                      ? { backgroundColor: PRIMARY_COLOR }
                      : {},
                  ]}
                  onPress={() => {
                    this.setState({
                      subjectsSelected: {
                        ...this.state.subjectsSelected,
                        compSci: !this.state.subjectsSelected.compSci,
                      },
                    });
                  }}>
                  <Text
                    style={[
                      styles.subjectsText,
                      this.state.subjectsSelected.compSci
                        ? { color: '#fff' }
                        : {},
                    ]}>
                    Computer Science
                  </Text>
                </TouchableOpacity>
                {/* This is where you select Classes you want to teach */}
                <Text style={styles.label}>I CAN TEACH THESE CLASSES</Text>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: hp('1%'),
                  }}>
                  <TouchableOpacity
                    style={[
                      styles.subjects,
                      this.state.classesSelected.matric
                        ? { backgroundColor: PRIMARY_COLOR }
                        : {},
                    ]}
                    onPress={() => {
                      this.setState({
                        classesSelected: {
                          ...this.state.classesSelected,
                          matric: !this.state.classesSelected.matric,
                        },
                      });
                    }}>
                    <Text
                      style={[
                        styles.subjectsText,
                        this.state.classesSelected.matric
                          ? { color: '#fff' }
                          : {},
                      ]}>
                      Matric
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.subjects,
                      this.state.classesSelected.oALevels
                        ? { backgroundColor: PRIMARY_COLOR }
                        : {},
                    ]}
                    onPress={() => {
                      this.setState({
                        classesSelected: {
                          ...this.state.classesSelected,
                          oALevels: !this.state.classesSelected.oALevels,
                        },
                      });
                    }}>
                    <Text
                      style={[
                        styles.subjectsText,
                        this.state.classesSelected.oALevels
                          ? { color: '#fff' }
                          : {},
                      ]}>
                      O/A Levels
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.subjects,
                      this.state.classesSelected.fsc
                        ? { backgroundColor: PRIMARY_COLOR }
                        : {},
                    ]}
                    onPress={() => {
                      this.setState({
                        classesSelected: {
                          ...this.state.classesSelected,
                          fsc: !this.state.classesSelected.fsc,
                        },
                      });
                    }}>
                    <Text
                      style={[
                        styles.subjectsText,
                        this.state.classesSelected.fsc ? { color: '#fff' } : {},
                      ]}>
                      O/A Levels
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* This is where you select Teaching Options */}
                <Text style={styles.label}>TUTORING OPTIONS</Text>
                <View
                  style={{
                    width: '100%',
                    marginTop: hp('1%'),
                  }}
                />
                <CheckBox
                  title="I can visit student home to Teach"
                  checked={this.state.gotoStudent}
                  onPress={() => {
                    this.setState({
                      gotoStudent: !this.state.gotoStudent,
                    });
                  }}
                  textStyle={{
                    fontSize: hp('2.5%'),
                  }}
                />
                <CheckBox
                  title="Student can visit me for Tution"
                  checked={this.state.studentGotoTutor}
                  onPress={() => {
                    this.setState({
                      studentGotoTutor: !this.state.studentGotoTutor,
                    });
                  }}
                  textStyle={{
                    fontSize: hp('2.5%'),
                  }}
                />
                <CheckBox
                  title="I can Teach Online"
                  checked={this.state.teachOnline}
                  onPress={() => {
                    this.setState({
                      teachOnline: !this.state.teachOnline,
                    });
                  }}
                  textStyle={{
                    fontSize: hp('2.5%'),
                  }}
                />
              </View>
              <EButton
                loading={this.state.loading}
                title="Update Profile"
                containerStyle={{
                  width: '80%',
                  alignSelf: 'center',
                }}
                buttonStyle={{
                  backgroundColor: PRIMARY_COLOR,
                }}
                loadingProps={{
                  size: 'large',
                }}
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
    marginBottom: hp('3%'),
  },
  label: {
    color: '#a2acb4',
    fontWeight: 'bold',
    fontSize: hp('2.4%'),
    marginLeft: wp('2%'),
  },
  subjects: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    padding: hp('2%'),
    marginHorizontal: hp('2%'),
    marginVertical: wp('1%'),
  },
  subjectsText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
