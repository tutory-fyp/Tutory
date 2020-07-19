import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Drawer as PDrawer,
  Headline as PHeadline,
  Appbar as PAppbar,
} from 'react-native-paper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontisoIcon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { initState } from '../../../../redux/modules/user';
import { personImage } from '../../../../constants/images';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _logout = () => {
    const { navigation, initState } = this.props;
    initState();
    navigation.navigate('loginStack');
  };

  _iconHandler = (name, type, size) => {
    if (type === 'FontisoIcon') {
      return () => <FontisoIcon name={name} size={size} />;
    } else if (type === 'AntDesignIcon') {
      return () => <AntDesignIcon name={name} size={size} />;
    } else if (type === 'MaterialCommunityIcons') {
      return () => <MaterialCommunityIcons name={name} size={size} />;
    }
  };

  render() {
    const { profileImage } = styles;

    return (
      <View style={styles.container}>
        <PDrawer.Section>
          <Image style={profileImage} source={personImage} />
          <PHeadline>John Doe</PHeadline>
        </PDrawer.Section>
        <View
          style={{
            marginVertical: 10,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <PDrawer.Item
          label="Logout"
          onPress={this._logout}
          icon={this._iconHandler('logout', 'MaterialCommunityIcons', 22)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatch = {
  initState,
};

export default connect(
  mapStateToProps,
  mapDispatch,
)(Drawer);
