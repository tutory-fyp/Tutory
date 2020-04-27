import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import {
    Badge,
} from 'react-native-elements';
import {
    Avatar,
    Title,
    Subheading,
} from 'react-native-paper';
import {
    withNavigation,
} from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';
import {
    personImage,
} from '../../constants/images';
import {
    YELLOW_COLOR, PRIMARY_COLOR,
} from '../../constants/commonColors';
import {
    Grid,
    Row,
    Col,
} from 'react-native-easy-grid';

const {
    width: WIDTH,
} = Dimensions.get('window');

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
          <View style={styles.wrapper} >
              <View style={styles.avatarWrapper} >
                  <Avatar.Image
                      style={styles.avatar}
                      source={personImage}
                  />
              </View>
              <View style={styles.textWrapper} >
                  <Title>
                      John Doe
                      4.7
                      <AntDesign
                          name='star'
                          size={18}
                          color={YELLOW_COLOR}
                      />
                  </Title>
                  <Subheading>
                      Matric Physics
                  </Subheading>
              </View>
              <View style={styles.timeWrapper} >
                  <Ripple onPress={() => {
                      this.props.navigation.navigate("Map");
                  }} >
                      <Text
                          style={{
                              fontSize: 15,
                              color: PRIMARY_COLOR,
                              borderBottomWidth: StyleSheet.hairlineWidth,
                              borderBottomColor: PRIMARY_COLOR,
                          }}
                      >
                          View on Map
                      </Text>
                  </Ripple>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: 100,
        width: WIDTH - 10,
        elevation: 1,
        borderRadius: 0,
    },
    avatarWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    badgeWrapper: {
        position: 'absolute',
        bottom: 3,
        right: 0,
    },
    badge: {
        width: 20,
        height: 20,
        borderRadius: 100
    },
    textWrapper: {
        alignSelf: 'center',
        marginLeft: 25,
    },
    timeWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        marginRight: 10,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
    },
    timeText: {
        fontWeight: '900',
        fontSize: 16,
    }
});

export default withNavigation(SearchResult);