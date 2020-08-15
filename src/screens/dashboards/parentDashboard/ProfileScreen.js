import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={styles.header}>
          <Appbar.Content title="Profile" />
        </Appbar>
        <View style={styles.content}>
          <View
            style={{
              marginTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                Name:
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                John Doe
              </Text>
            </View>
            <View
              style={{
                marginVertical: 12,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                Email:
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                test123@test.com
              </Text>
            </View>
            <View
              style={{
                marginVertical: 13,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                Qualification:
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                Matric
              </Text>
            </View>
            <View
              style={{
                marginVertical: 13,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View
              style={{
                marginVertical: 14,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </View>
        </View>
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
    width: wp(100),
  },
});

export default ProfileScreen;
