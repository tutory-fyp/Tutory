import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';

class MessageScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.Action icon="menu" onPress={this.props.navigation.openDrawer} />
                    <Appbar.Content title="Messages" />
                </Appbar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 8,
    },
});

export default MessageScreen;