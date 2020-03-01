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
import { PRIMARY_COLOR } from '../../../constants/commonColors';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

class CourseCardDrawer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.cardWrapper} >
                <Headline>
                    Course: {this.props.data.courseName}
                </Headline>
                <Subheading>
                    Tutor: {this.props.data.tutorName}
                </Subheading>
                <Divider style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} />
                <Subheading>
                    {
                        this.props.isMarks === true ? null : 
                        <Text>
                            Present: {this.props.data.present}/{this.props.data.maxSessions}
                        </Text>
                    }
                </Subheading>
                <TouchableRipple
                    style={styles.viewDetailsBtnWrapper}
                    onPress={this.props.viewDetails}
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
        backgroundColor: "#fff",//'#eceff1',
        marginVertical: 3,
        width: WIDTH - 10,
        height: 100,
        borderRadius: 0,
        paddingHorizontal: 15,
        elevation: 2,
    },
    viewDetailsBtnWrapper: {
        position: 'absolute',
        right: 15,
        bottom: 12,
    },
    viewDetailsBtnText: {
        fontSize: 15,
        color: PRIMARY_COLOR,
    },
});

export default withNavigation(CourseCardDrawer);