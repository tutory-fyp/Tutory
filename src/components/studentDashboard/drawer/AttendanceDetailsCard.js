import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import {
    Divider,
    Headline,
    Subheading,
    TouchableRipple,
} from 'react-native-paper';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

class AttendanceDetailsCard extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <View style={styles.cardWrapper} >
                <Headline>
                    Session Date: 1-Aug-2019
                </Headline>
                <Subheading>
                    Session Time: 23:00:00 to 24:00:00
                </Subheading>
                <Divider style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} />
                <Subheading>
                    Attendance: Present
                </Subheading>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: '#eceff1',
        marginVertical: 20,
        width: WIDTH - 50,
        height: 100,
        borderRadius: 25,
        paddingHorizontal: 15,
        elevation: 1,
    },
});

export default AttendanceDetailsCard;