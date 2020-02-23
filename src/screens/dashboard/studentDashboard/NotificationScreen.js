import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';
import Notification from '../../../components/studentDashboard/Notification';


class NotificationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _goBack = () => {
        const {
            navigation: {
                goBack
            }
        } = this.props;
        goBack();
    }

    render() {
        return (
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.BackAction onPress={this._goBack} />
                    <Appbar.Content title="Notifications" />
                </Appbar>
                <View style={styles.content} >
                    <FlatList
                        keyExtractor={(item, index) => index.toString()} 
                        data={new Array(5).fill(0)}
                        renderItem={({item, index}) => (
                            <Notification
                            />
                        )}
                        ListHeaderComponent={() => (
                            <View style={{marginTop: 5,}} />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginVertical: 5, }} />
                        )}
                        ListFooterComponent={() => (
                            <View style={{marginBottom: 5,}} />
                        )}
                    />
                </View>
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
    content: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
});

export default NotificationScreen;