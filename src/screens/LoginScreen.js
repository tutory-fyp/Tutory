import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView,
    View,
    StatusBar,
    Dimensions,
    Platform,
    TouchableOpacity,
} from 'react-native';
import {  
    Text as EText,
    Input as EInput,
    Button as EButton,
    CheckBox as ECheckBox,
} from 'react-native-elements';
import {
  TextInput as PTextInput, 
} from 'react-native-paper';
import SplashScreen from 'react-native-smart-splash-screen';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            emailErrMsg: '',
            passwordErrMsg: '',
            rememberMe: false,
        };
        this._handleRememberMe = this._handleRememberMe.bind(this);
        this.passwordInputRef = React.createRef();
    }

    _handleRememberMe() {
        if(this.state.rememberMe) {
            this.setState({ rememberMe: false });
        } else { 
            this.setState({ rememberMe: true });
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/Login/login_bg.png')}
                style={styles.bg}
            >
                <StatusBar backgroundColor="#3185E8" />
                <EText h4 style={styles.welcomeText} >
                    Welcome Back,
                </EText>
                <EText h2 style={styles.loginText} >
                    Log In!
                    </EText>
                <View
                    style={styles.loginCard}
                >
                    <PTextInput
                        label="Email"
                        placeholder="Enter Email"
                        mode="outlined"
                        style={styles.inputTextStyle}
                    />
                    <PTextInput
                        label="Password"
                        placeholder="Password must be of atleast 6 characters"
                        mode="outlined"
                        style={styles.inputTextStyle}
                    />
                    <View style={styles.forgotPassword} >
                        <ECheckBox
                            title="Remember Me"
                            textStyle={{color: 'rgba(0,0,0,0.3)'}}
                            containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                            checked={this.state.rememberMe}
                            checkedColor="black"
                            onPress={this._handleRememberMe}
                        />
                        <TouchableOpacity style={{flexDirection: 'row'}} >
                            <EText
                                style={{alignSelf: 'center', color: 'rgba(0,0,0,0.3)',}}
                            >
                                Forgot your Password?
                            </EText>
                        </TouchableOpacity>
                    </View>
                    <EButton
                        title="Log in"
                        containerStyle={styles.btnContainerStyle}
                        buttonStyle={styles.btnStyle}
                    />
                    <View style={styles.signUpText} >
                        <EText 
                            style={{color: 'rgba(0,0,0,0.3)', alignSelf: 'center', marginLeft: '6%'}}
                        >
                            Dont Have an Account?
                        </EText>
                        <TouchableOpacity style={{alignSelf: 'center', marginLeft: '3%'}} >
                            <EText style={{ color: '#3185E8', fontSize: 16}} >
                                Signup Instead
                            </EText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
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
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    welcomeText: {
        position: 'absolute',
        top: '2%',
        left: '5%',
        color: 'white',
    },
    loginText: {
        position: 'absolute',
        top: '7%',
        left: '5%',
        color: 'white',
    },
    loginCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH - 80,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
    },
    signUpText: {
        position: 'absolute',
        bottom: 10,
        height: 50,
        width: '90%',
        flexDirection: 'row',
    },
    forgotPassword: {
        flexDirection: 'row',
        marginTop: '2%',
        width: '100%',
    },
    inputTextStyle: {
        width: '90%',
        marginTop: '2%',
        borderColor: 'red',
    },
    errMsgStyle: {
        fontSize: 15,
    },
    btnContainerStyle: {
        width: '80%',
        marginTop: '8%',
    },
    btnStyle: {
        borderRadius: 30,
        backgroundColor: 'black',
    },
});

export default LoginScreen;