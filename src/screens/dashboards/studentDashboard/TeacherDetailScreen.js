import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Appbar, Avatar, Button } from 'react-native-paper';
import Ripple from 'react-native-material-ripple';
import { personImage } from '../../../constants/images';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import { Textarea } from 'native-base';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <View>
              <Avatar.Image size={150} source={personImage} />
            </View>
            <View
              style={{
                marginLeft: 100,
                marginTop: 50,
              }}>
              <Ripple>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 15,

                    color: 'black',
                  }}>
                  SLot: 8AM-4PM
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 15,

                    color: 'black',
                  }}>
                  20 mins away!!
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 15,

                    color: 'black',
                  }}>
                  Rating: 4.7
                </Text>
              </Ripple>
            </View>
          </View>
          {
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
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                  }}>
                  Contact:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 20,
                  }}>
                  555-555-555
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 14,
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
                  Address:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 20,
                  }}>
                  Block A, Sector B-17, Islamabad
                </Text>
                <Textarea style={{ height: 20 }}>hahahaha</Textarea>
              </View>
              <View
                style={{
                  marginVertical: 14,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
            </View>
          }
          <Textarea
            style={{
              marginLeft: 30,
              marginTop: 40,
              height: 100,
              marginRight: 50,
              borderWidth: 2,
              borderColor: 'black',
            }}
            placeholder="Enter Your Description"
          />
          <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,

                color: PRIMARY_COLOR,
              }}>
              Click here to see cv
            </Text>
            <Button
              style={{
                marginLeft: 60,
                borderWidth: 2,
                borderColor: 'black',
              }}>
              BUY PACKAGE
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
  header: {
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
  },
});

export default ProfileScreen;
