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
import Entypo from 'react-native-vector-icons/Entypo';
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

    _gotoMapScreen = () => {
        const {
            navigation: {
                navigate,
            }
        } = this.props;
        navigate('TeacherDetail');
    }

    render() {
        return (
          <View style={styles.wrapper}>
            <Row>
              <Col style={styles.avatarWrapper} size={0.5}>
                <Avatar.Image source={personImage} />
              </Col>
              <Col style={styles.textWrapper} size={2}>
                <Title>
                  John Doe 4.7
                  <AntDesign
                    name="star"
                    size={18}
                    color={YELLOW_COLOR}
                  />
                </Title>
                <Subheading>Matric Physics</Subheading>
              </Col>
              <Col size={1.5}>
                <Row style={{ alignItems: 'center' }}>
                  <Text>Slot: 6pm to 7pm</Text>
                </Row>
                <Row style={{flexDirection: 'column'}} >
                  <Text>Minimum Charges: 400/hr</Text>
                  <Entypo 
                    name="compass"
                    size={25}
                    onPress={this._gotoMapScreen}
                  />
                </Row>
              </Col>
            </Row>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        width: WIDTH - 10,
        padding: 10,
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