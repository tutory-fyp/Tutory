import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Appbar, Avatar, Button } from 'react-native-paper';
import Ripple from 'react-native-material-ripple';
import { personImage } from '../../../constants/images';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import { Textarea } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class TutorDetailScreen extends Component {
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
          <Appbar.Content title="Tutor Information" />
        </Appbar>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <View>
              <Avatar.Image size={150} source={personImage} />
            </View>
            <View
              style={{
                marginLeft: 80,
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
                    fontSize: 16,
                  }}>
                  Name:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
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
                    fontSize: 16,
                  }}>
                  Email:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
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
                    fontSize: 16,
                  }}>
                  Qualification:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
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
                    fontSize: 16,
                  }}>
                  Contact:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
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
                    fontSize: 16,
                  }}>
                  Address:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
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
          {/* <Textarea
            style={{
              marginLeft: 30,
              marginTop: 40,
              height: 100,
              marginRight: 50,
              borderWidth: 2,
              borderColor: 'black',
            }}
            placeholder="Enter Your Description"
          /> */}
          <View
            style={{
              borderColor: PRIMARY_COLOR,
              borderWidth: 2,
              height: hp('25%'),
              width: wp('93%'),
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
            <Text style={{ textAlign: 'justify', fontSize: 16 }}>
              My current focus is to achieve a mutually beneficial relation with
              a company, where I enjoy spending my time, my skills are polished,
              I work on something that makes a difference, my personality is
              groomed and I have opportunities and resources to excel in
              professional as well as personal life. With my current skills and
              knowledge, I would be able to give back to the company that I work
              for.
            </Text>
          </View>
          <View>
            <Text
              style={{
                flexDirection: 'row',
                marginLeft: 30,
                marginTop: 20,
                fontSize: 16,
              }}>
              Wage: 400/hour
            </Text>
          </View>

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
              style={{ marginLeft: 80 }}
              mode="contained"
              onPress={() => {}}>
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
    marginLeft: 30,
    marginTop: 10,
    width: wp('80%'),
  },
});

export default TutorDetailScreen;
