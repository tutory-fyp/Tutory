import React from 'react';
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
import { withNavigation } from 'react-navigation';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

class AttendanceCard extends React.Component {
    constructor(props) {
        super(props);
        this._gotoDetails = this._gotoDetails.bind(this);
    }

    _gotoDetails() {
        this.props.navigation.navigate('AttendanceDetails', {
            data: this.props.data,
        });
    }

    render() {
        return (
            <View style={styles.cardWrapper} >
                <Headline>
                    Course: Course 101
                </Headline>
                <Subheading>
                    Tutor: John Doe
                </Subheading>
                <Divider style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} />
                <Subheading>
                    Present: 10/10
                </Subheading>
                <TouchableRipple
                    style={styles.viewDetailsBtnWrapper}
                    onPress={this._gotoDetails}
                    rippleColor="#3185E8"
                >
                    <Text style={styles.viewDetailsBtnText} >View Details</Text>
                </TouchableRipple>
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
    viewDetailsBtnWrapper: {
        position: 'absolute',
        right: 15,
        bottom: 12,
    },
    viewDetailsBtnText: {
        fontSize: 15,
    },
});

export default withNavigation(AttendanceCard);