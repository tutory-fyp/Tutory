import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { PRIMARY_COLOR } from '../../../constants/commonColors';

class AddStudentScreen extends Component {
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
          <Appbar.Content title="Add Student" />
        </Appbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddStudentScreen;
