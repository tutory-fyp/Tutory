import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import {
    Appbar,
} from 'react-native-paper';
import {
    studentComponents,
} from '../../../components';

const {
    Message,
} = studentComponents;

class MessagesScreen extends Component {

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
                <View style={styles.content} >
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={new Array(10).fill(0)}
                        renderItem={({ item, index }) => (
                            <Message
                                online={ index % 2 ? true : false }
                            />
                        )}
                        ListHeaderComponent={() => (
                            <View style={{ marginTop: 10, }} />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginVertical: 5, }} />
                        )}
                        ListFooterComponent={() => (
                            <View style={{ marginBottom: 10, }} />
                        )}
                    />
                </View>
            </View>
        );
    }

    componentDidMount() {
        const {
            navigation: {
                navigate,
            }
        } = this.props;
        navigate('Message');
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

export default MessagesScreen;