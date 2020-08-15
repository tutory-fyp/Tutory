import React, { Component } from 'react';
import { StyleSheet, View, Picker, ScrollView, FlatList } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';
import { tutorComponents } from '../../../components';

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

class EnrolledStudentsScreen extends Component {
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
          <Appbar.Content title="Currently Enrolled Students" />
        </Appbar>
        <Searchbar
          value={this.state.searchText}
          onChangeText={this._searchFilter}
          placeholder="Search Students"
        />
        <FlatList
          data={this.state.students}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <EnrolledStudentCard name={item.name} class={item.class} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EnrolledStudentsScreen;
