import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import Ripple from 'react-native-material-ripple';
import {
    personImage,
} from '../../constants/images';


const {
    width: WIDTH,
} = Dimensions.get('window');

class Message extends Component {

    static propTypes = {
        online: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        online: true,
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _isOnline = () => {
        return this.props.online ? {} : { backgroundColor: 'grey' };
    }

    _handleMessage = () => {
        const {
            navigation: {
                navigate,
            }
        } = this.props;
        navigate('Message');
    }

    render() {
        return (
            <Ripple onPress={this._handleMessage} >
                <View style={styles.wrapper} >
                    <View style={styles.avatarWrapper} >
                        <Avatar.Image
                            style={styles.avatar}
                            source={personImage}
                        />
                        <Badge
                            status={"success"} 
                            containerStyle={styles.badgeWrapper}
                            badgeStyle={[styles.badge, this._isOnline()]}
                                
                        />
                    </View>
                    <View style={styles.textWrapper} >
                        <Title>
                            John Doe
                        </Title>
                        <Subheading>
                           I can help you in Physics
                        </Subheading>
                    </View>
                    <View style={styles.timeWrapper} >
                        <Text style={styles.timeText} >
                            4 mins ago
                        </Text>
                    </View>
                </View>
            </Ripple>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        height: 80,
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
        marginLeft: 10,
    },
    timeWrapper: {
        position: 'absolute',
        right: 10,
        marginRight: 10,
        alignSelf: 'center',

    },
    timeText: {
        fontWeight: '900',
        fontSize: 16,
    }
});

export default withNavigation(Message);