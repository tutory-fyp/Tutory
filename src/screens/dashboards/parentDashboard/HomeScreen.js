import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Keyboard,
    ScrollView,
    FlatList,
    Picker,
    ToastAndroid,
} from 'react-native';
import {
    Searchbar,
    Appbar,
    Text,
    Title as PTitle,
    Chip as PChip,
    Divider as PDivider,
    Button as PButton,
} from 'react-native-paper';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _gotoNotifications = () => {
        const {
            navigation: {
                navigate
            }
        } = this.props;
        navigate('Notifications');
    }

    _gotoSearchScreen = () => {
        const {
            navigate,
        } = this.props.navigation;
        navigate('Search');
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    This is fuckoafaf screen
                </Text>
            </View>
        );
    }

    componentDidMount() {
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 8,
    },
    searchbar: {
        width: "90%",
        alignSelf: 'center',
    },
    title: {
        marginLeft: 8,
    },
    trtcScroll: {
        width: "100%",
        height: 25,
    },
    popcScroll: {
        width: "100%",
        height: 25,
    },
});

export default HomeScreen;