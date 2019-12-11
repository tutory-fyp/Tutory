import React, { Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    ActivityIndicator,
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
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-smart-splash-screen';
import auth from '@react-native-firebase/auth';
import LinearGradientButton from '../components/LinearGradientButton';

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
            emailErr: false,
            passwordErr: false,
            rememberMe: false,
        };
        this._handleRememberMe = this._handleRememberMe.bind(this);
        this._handleEmailInput = this._handleEmailInput.bind(this);
        this._handlePasswordInput = this._handlePasswordInput.bind(this);
        this._handleLogin = this._handleLogin.bind(this);
        this._checkEmail = this._checkEmail.bind(this);
        this._checkPassword = this._checkPassword.bind(this);
        this.passwordInputRef = null;
    }

    _handleRememberMe() {
        if (this.state.rememberMe) {
            this.setState({ rememberMe: false });
        } else {
            this.setState({ rememberMe: true });
        }
    }

    _handleEmailInput(email) {
        this.setState({ email });
    }

    _handlePasswordInput(password) {
        this.setState({ password });
    }

    _checkEmail() {
        if (this.state.email.length != 0) {
            let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
            if (!re_email.test(this.state.email)) {
                this.setState({ emailErr: true });
            }
        }
    }

    _checkPassword() {
        if (this.state.password.length != 0) {
            let re_password = /\S{6,}/;
            if (!re_password.test(this.state.password)) {
                this.setState({ passwordErr: true });
            }
        }
    }

    _handleLogin() {
        let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        let re_password = /\S{6,}/;
        if (!re_email.test(this.state.email)) {
            this.setState({ emailErrMsg: 'Invalid Email' });
        }
        if (!re_password.test(this.state.password)) {
            this.setState({ passwordErrMsg: 'Password length must be 6 characters' });
        }
        if (re_email.test(this.state.email) && re_password.test(this.state.password)) {
            this.setState({ loading: true });
            (async (email, password) => {
                try {
                    let res = await auth().signInWithEmailAndPassword(email, password);
                    if(res.user.uid) {
                        this.props.navigation.navigate('Signup');
                    }
                } catch (error) {
                    this.setState({loading: false});
                    console.log(error);
                }
            })(this.state.email, this.state.password);
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/Login/login_bg.png')}
                style={styles.bg}
            >
                <StatusBar backgroundColor="#3185E8" />
                {/* <EText h1 style={styles.welcomeText} >
                    Tutory
                </EText> */}
                <EText h1 style={styles.loginText} >
                    Tutory
                    </EText>
                <View
                    style={styles.loginCard}
                >
                    <PTextInput
                        label='Email'
                        mode='outlined'
                        theme={{ primary: '#3185E8'}}
                        placeholder='Enter Email'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        value={this.state.email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputTextStyle}
                        onSubmitEditing={() => this.passwordInputRef.focus()}
                        onChangeText={this._handleEmailInput}
                    />
                    <PTextInput
                        ref={(ref) => this.passwordInputRef = ref}
                        label='Password'
                        mode='outlined'
                        value={this.state.password}
                        secureTextEntry
                        placeholder='Atleast 6 characters'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="go"
                        onChangeText={this._handlePasswordInput}
                        style={styles.inputTextStyle}
                    />
                    <View style={styles.forgotPassword} >
                        <ECheckBox
                            title="Remember Me"
                            textStyle={{ color: 'rgba(0,0,0,0.3)' }}
                            containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
                            checked={this.state.rememberMe}
                            checkedColor="black"
                            onPress={this._handleRememberMe}
                        />
                        <TouchableOpacity style={{ flexDirection: 'row' }} >
                            <EText
                                style={{ alignSelf: 'center', color: 'rgba(0,0,0,0.5)', paddingLeft: '7%' }}
                            >
                                Forgot Password?
                            </EText>
                        </TouchableOpacity>
                    </View>
                    <LinearGradientButton
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#3185E8', '#0221A0']}
                        containerStyle={styles.loginBtnStyle}
                        label="Login"
                        labelColor="white"
                        labelFontSize={20}
                        labelFontWeight="bold"
                        loading={this.state.loading}
                        loadingSize="large"
                        loadingColor="white"
                        onPress={this._handleLogin}
                    />
                    <View style={styles.signUpText} >
                        <EText
                            style={{ color: 'rgba(0,0,0,0.3)', alignSelf: 'center', marginLeft: '15%', }}
                        >
                            Dont Have an Account?
                        </EText>
                        <TouchableOpacity
                            style={{ alignSelf: 'center', marginLeft: '2%', }}
                            onPress={() => this.props.navigation.navigate('RoleSelector')}
                        >
                            <EText style={{ color: '#3185E8', fontSize: 16, borderBottomWidth: 1, borderColor: '#3185E8' }} >
                                Sign up
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
        top: '5%',
        left: '13%',
        color: 'white',
    },
    loginCard: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: WIDTH - 80,
        paddingTop: '8%',
        height: 350,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
    },
    signUpText: {
        position: 'absolute',
        bottom: 5,
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
    loginBtnStyle: {
        width: '80%',
        height: 50,
        borderRadius: 30,
        marginTop: '3%',
    },
    btnStyle: {
        borderRadius: 30,
        backgroundColor: 'black',
    },
});

export default LoginScreen;