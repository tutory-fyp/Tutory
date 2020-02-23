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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { initState } from '../../../../redux/modules/user';

class Drawer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._gotoViewAttendance = this._gotoViewAttendance.bind(this);
        this._gotoViewMarks = this._gotoViewMarks.bind(this);
    }
    
    _logout = () => {
        const {
            navigation,
            initState,
        } = this.props;
        initState();
        navigation.navigate("loginStack");
    }

    _gotoViewMarks() {
        this.props.navigation.navigate('ViewCourseMarks');
    }

    _gotoViewAttendance() {
        this.props.navigation.navigate('ViewAttendance');
    }

    _iconHandler = (name, type, size) => {
        if (type === "FontisoIcon") {
            return () => (
                <FontisoIcon
                    name={name}
                    size={size}
                />
            )
        }
        else if (type === "AntDesignIcon") {
            return () => (
                <AntDesignIcon
                    name={name}
                    size={size}
                />
            )
        }
        else if (type === "MaterialCommunityIcons") {
            return () => (
                <MaterialCommunityIcons
                    name={name}
                    size={size}
                />
            )
        }
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
                        this._iconHandler("date", "FontisoIcon", 20)
                    }
                />
                <PDrawer.Item
                    label="View Marks"
                    onPress={this._gotoViewMarks}
                    icon={
                        this._iconHandler("book", "AntDesignIcon", 20)
                    }
                />
                <PDrawer.Item
                    label="Logout"
                    onPress={this._logout}
                    icon={
                        this._iconHandler("logout", "MaterialCommunityIcons", 22)
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

mapStateToProps = state => ({
    user: state.login.user,
})

const mapDispatch = {
    initState,
}

export default connect(mapStateToProps, mapDispatch)(Drawer);