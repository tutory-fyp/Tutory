import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import 
{
    Button,
    Input,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container} >
                <Text>
                    This is the Login Screen
                </Text>
                <Button
                    title="This is a Button"
                    onPress={() => {
                        this.props.navigation.navigate('Signup');
                    }}    
                />     
                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
            </View>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default LoginScreen;