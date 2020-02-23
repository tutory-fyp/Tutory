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
import Ripple from 'react-native-material-ripple';
import {
    personImage,
} from '../../constants/images';


const {
    width: WIDTH,
} = Dimensions.get('window');

class Notification extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <Ripple>
                <View style={styles.wrapper} >
                    <View style={styles.avatarWrapper} >
                        <Avatar.Image
                            style={styles.avatar}
                            source={personImage}
                        />
                        {/* <Badge 
                                containerStyle={styles.badgeWrapper}
                                badgeStyle={[styles.badge,]}
                                status={"primary"}
                            /> */}
                    </View>
                    <View style={styles.textWrapper} >
                        <Title>
                            Jhon Doe
                            </Title>
                        <Subheading>
                            Has Sent you request
                    </Subheading>
                    </View>
                    <View style={styles.timeWrapper} >
                        <Text style={styles.timeText} >
                            4 min
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
        width: WIDTH - 20,
        elevation: 2,
        borderRadius: 25,
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
        fontSize: 20,
    }
});

export default Notification;