import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import {
    Appbar,
    Avatar,
} from 'react-native-paper';
import { 
    GiftedChat,
} from 'react-native-gifted-chat';
import { personImage } from '../../../constants/images';

let messages = [
    {
        _id: 1,
        text: 'My message',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        image: 'https://facebook.github.io/react/img/logo_og.png',
    }
]

class MessageScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: messages,
        };
    }
    
    _goBack = () => {
        const {
            navigation: {
                goBack,
            },
        } = this.props;
        goBack();
    }

    _onSend = (messages = []) => {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return(
            <View style={styles.container} >
                <Appbar style={styles.header} >
                    <Appbar.BackAction onPress={this._goBack} />
                    <Avatar.Image source={personImage} size={50} />
                    <Appbar.Content 
                        title="John Doe"
                        subtitle="Physics HSSC-I"
                    />
                </Appbar>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this._onSend}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        );
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
    }

} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 5,
    }
});

export default MessageScreen;