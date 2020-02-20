import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Appbar,
} from 'react-native-paper';

class NotificationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goBack = () => {
    const {
      navigation: {
        goBack
      }
    } = this.props;
    goBack();
  }

  render() {
    return (
      <View style={styles.container} >
        <Appbar style={styles.header} >
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Notifications" />
        </Appbar>
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
});

export default NotificationScreen;