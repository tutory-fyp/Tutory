import ViewAttendanceScreen from './ViewAttendanceScreen'
import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Image,
} from 'react-native';
import {
  Drawer as PDrawer,
  Headline as PHeadline,
  Appbar as PAppbar, 
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';

class Drawer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._gotoViewAttendance = this._gotoViewAttendance.bind(this);
    }
    
    _gotoViewAttendance() {
        this.props.navigation.navigate('ViewAttendance');
    }

    render() {

        const {
            profileImage,
        } = styles;

        const {
            navigation,
        } = this.props;

        return(
            <View style={styles.container} >
                <PDrawer.Section>
                    <Image
                        style={profileImage}
                        source={require('../../../../../assets/dp_placeholder.png')}
                    />
                    <PHeadline>
                        Muhammad Usman
                    </PHeadline>
                </PDrawer.Section>
                <PDrawer.Item 
                    label="View Attendance"
                    onPress={this._gotoViewAttendance}
                    icon={
                        () => <Icon
                            name="book"
                            color="#000"
                            size={20}
                        />
                    }
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

export default Drawer;