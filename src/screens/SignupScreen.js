import React, { Component } from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    StatusBar,
} from 'react-native';
import SignupForm from '../components/SignupForm';

class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                        <SignupForm />
                    </ImageBackground>
                </SafeAreaView>
            </>
        );
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

export default SignupScreen;