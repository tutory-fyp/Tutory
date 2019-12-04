import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';
import {  
    
} from 'react-native-elements';
import LoginForm from '../components/LoginForm';
import SplashScreen from 'react-native-smart-splash-screen';

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
                <SafeAreaView style={styles.bg} >
                    <StatusBar backgroundColor='#3185E8' />
                    <KeyboardAvoidingView behavior="position" >
                        <Image
                            source={require('../../assets/logo.jpg')}
                            style={styles.logo}
                        />
                        <LoginForm />
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </>
        );
    }

    componentDidMount() {
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    bg: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: '5%',
    },
});

export default LoginScreen;