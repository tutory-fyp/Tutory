import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar, Switch, Divider, Subheading } from 'react-native-paper';
import { Badge } from 'react-native-elements';
import { Icon } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { PRIMARY_COLOR } from '../../../constants/commonColors';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={styles.header}>
          <Appbar.Content title="Settings" />
        </Appbar>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Badge
              status="success"
              containerStyle={{
                marginLeft: 10,
              }}
              badgeStyle={[
                {
                  height: 15,
                  width: 15,
                  borderRadius: 100,
                },
                !this.state.online && { backgroundColor: 'grey' },
              ]}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}>
              Online Status
            </Text>
            <Switch
              style={{
                position: 'absolute',
                right: 10,
              }}
              value={this.state.online}
              color="green"
              onValueChange={() =>
                this.setState({ online: !this.state.online })
              }
            />
          </View>
          <View
            style={{
              marginVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.wrapper}>
            <AntDesign
              style={{
                marginLeft: 2,
              }}
              size={24}
              name="sharealt"
              color={PRIMARY_COLOR}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}>
              Rate Tutory
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.wrapper}>
            <EvilIcons
              style={{
                marginLeft: 2,
              }}
              size={25}
              name="star"
              color={PRIMARY_COLOR}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}>
              Share Tutory
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.wrapper}>
            <Feather
              style={{
                marginLeft: 3,
              }}
              size={22}
              name="phone"
              color={PRIMARY_COLOR}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}>
              Contact Us
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.wrapper}>
            <MaterialCommunityIcons
              style={{
                marginLeft: 3,
              }}
              size={22}
              name="script-text"
              color={PRIMARY_COLOR}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}>
              Terms and Conditions
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={styles.wrapper}>
            <Entypo
              style={{
                marginLeft: 3,
              }}
              size={25}
              name="users"
              color={PRIMARY_COLOR}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
              }}>
              About Us
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
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
    paddingTop: 5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsScreen;
