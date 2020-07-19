import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import { tutorComponents } from '../../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { EnrolledStudentCard } = tutorComponents;

const studentsPlaceholder = [
  {
    name: 'John Doe',
    class: 'Matric',
  },
  {
    name: 'Braxton Woods',
    class: 'Matric',
  },
  {
    name: 'Susan Devine',
    class: 'FSC',
  },
  {
    name: 'Hattie Oliver',
    class: 'O Level',
  },
];

class PreviousEnrolledStudentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [...studentsPlaceholder],
      searchText: '',
    };
  }

  _goBack = () => {
    const {
      navigation: { goBack },
    } = this.props;
    goBack();
  };

  _searchFilter = text => {
    const newData = studentsPlaceholder.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.class.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    this.setState({ students: newData, searchText: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={styles.header}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Previously Enrolled Students" />
        </Appbar>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: wp(2),
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: PRIMARY_COLOR,
              fontSize: hp(5),
              textAlign: 'center',
            }}>
            There are no Previous Students For Now
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PreviousEnrolledStudentsScreen;
