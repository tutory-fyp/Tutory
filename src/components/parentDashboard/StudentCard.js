import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Surface, Title, Subheading } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { withNavigation } from 'react-navigation';
import { personImage } from '../../constants/images';
import { PRIMARY_COLOR } from '../../constants/commonColors';
import Entypo from 'react-native-vector-icons/Entypo';

class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _gotoViewStudentScreen = () => {
    this.props?.navigation.navigate('ViewStudent');
  };

  render() {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={this._gotoViewStudentScreen}>
        <Surface style={styles.container}>
          <Avatar.Image source={personImage} size={hp('10%')} />
          <View
            style={{
              marginLeft: wp('3%'),
              flex: 2,
            }}>
            <Title>{this.props.name}</Title>
            <Subheading>{this.props.class}</Subheading>
          </View>
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
        </Surface>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 100 / 8,
    padding: wp('3%'),
    marginVertical: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default withNavigation(StudentCard);
