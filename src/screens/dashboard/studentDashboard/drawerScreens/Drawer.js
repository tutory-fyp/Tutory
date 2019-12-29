import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import ViewAttendanceScreen from './ViewAttendanceScreen';
import AttendanceDetailsScreen from './AttendanceDetailsScreen';
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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontisoIcon from 'react-native-vector-icons/Fontisto';
import ViewMarksScreen from './ViewMarksScreen';

// Drawer Component 

class Drawer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._gotoViewAttendance = this._gotoViewAttendance.bind(this);
        this._gotoViewMarks = this._gotoViewMarks.bind(this);
    }
    
    _gotoViewMarks() {
        this.props.navigation.navigate('ViewMarks');
    }

    _gotoViewAttendance() {
        this.props.navigation.navigate('AttendanceNavigation');
    }

    render() {

        const {
            profileImage,
        } = styles;

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
                        () => <FontisoIcon
                            name="date"
                            color="#000"
                            size={20}
                        />
                    }
                />
                <PDrawer.Item
                    label="View Marks"
                    onPress={this._gotoViewMarks}
                    icon={
                        () => <AntDesignIcon
                            name="book"
                            color="#000"
                            size={22}
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

// Navigation for the Drawer

const attendanceStack = createStackNavigator({
    ViewAttendance: ViewAttendanceScreen,
    AttendanceDetails: AttendanceDetailsScreen,
}, {
    defaultNavigationOptions: {
        header: null,
    }
});

const rootNav = createSwitchNavigator({
    AttendanceNavigation: attendanceStack,
    ViewMarks: ViewMarksScreen,
});

export { Drawer as default, rootNav as DrawerNav, };