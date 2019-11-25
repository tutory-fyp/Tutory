import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    StatusBar,
} from 'react-native';
import LoginForm from '../components/LoginForm';
import SplashScreen from 'react-native-splash-screen';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            emailErrMsg: '',
            passwordErrMsg: '',
        };
    }

    render() {
        return (
            <>
                <SafeAreaView>
                    <StatusBar backgroundColor='#63a7fa' />
                    <ImageBackground
                        source={require('../../assets/login_bg.jpg')}
                        style={styles.bg}
                    >
                       <LoginForm  />
                    </ImageBackground>
                </SafeAreaView>
            </>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    bg: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});

export default LoginScreen;