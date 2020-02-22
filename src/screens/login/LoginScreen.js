import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {
    Text as EText,
    Input as EInput,
    Button as EButton,
    CheckBox as ECheckBox,
} from 'react-native-elements';
import {
    TextInput as PTextInput,
    HelperText,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-smart-splash-screen';
import { connect } from 'react-redux';
import { initState } from '../../redux/modules/user/actionCreators';
import { login } from '../../redux/modules/user/thunks';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
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
        this._passwordInputRef = null;
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
            if (re_email.test(this.state.email)) {
                return true;
            } else {
                return false;
            }
        }
    }

    _checkPassword() {
        if (this.state.password.length != 0) {
            let re_password = /\S{6,}/;
            if (re_password.test(this.state.password)) {
                return true;
            } else {
                return false;
            }
        }
    }

    _handleLogin() {
        let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        let re_password = /\S{6,}/;
        if (this.state.email.length === 0) {
            Alert.alert(
                'Empty Email',
                'Email cannot be empty',
                [
                    { text: 'OK' },
                ],
                { cancelable: true },
            );
            return;
        }
        if (!re_email.test(this.state.email)) {
            Alert.alert(
                'Invalid Email',
                'The Entered Email is Invalid',
                [
                    { text: 'OK' },
                ],
                { cancelable: true },
            );
            return;
        }
        if (!re_password.test(this.state.password)) {
            Alert.alert(
                'Invalid Password',
                'Password length must be atleast 6 characters',
                [
                    { text: 'OK' },
                ],
                { cancelable: true },
            );
            return;
        }
        this.setState({loading: true});
        this.props.login(this.state.email, this.state.password);
        //login(this.state.email, this.state.password);
        // if (re_email.test(this.state.email) && re_password.test(this.state.password)) {
        //     this.setState({ loading: true });
        //     (async (email, password) => {
        //         try {
        //             await auth().signInWithEmailAndPassword(email, password);
        //             this.setState({ loading: false });
        //             this.props.navigation.navigate('dashboardFlow');
        //         } catch (error) {
        //             this.setState({loading: false});
        //             Alert.alert(
        //                 'Login Failed',
        //                 'Email or Password is Incorrect',
        //                 [
        //                     { text: 'OK' },
        //                 ],
        //                 { cancelable: true },
        //             );
        //             console.log(error.code);
        //             return;
        //         }
        //     })(this.state.email, this.state.password);
        // }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../../assets/Login/backGround.png')}
                style={styles.bg}
            >
                <EText h1 style={styles.loginText} >
                    Tutory
                </EText>
                <View
                    style={styles.loginCard}
                >
                    <PTextInput
                        label='Email'
                        mode='outlined'
                        theme={{ primary: '#3185E8' }}
                        placeholder='Enter Email'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        value={this.state.email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputTextStyle}
                        onSubmitEditing={() => this._passwordInputRef.focus()}
                        onChangeText={this._handleEmailInput}
                    />
                    <PTextInput
                        ref={(ref) => this._passwordInputRef = ref}
                        label='Password'
                        mode='outlined'
                        value={this.state.password}
                        secureTextEntry
                        placeholder='Enter Password'
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="done"
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
                    <EButton
                        title="Login"
                        ViewComponent={LinearGradient}
                        linearGradientProps={{
                            colors: ['#3185E8', '#0221A0'],
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0 },
                        }}
                        loading={this.state.loading}
                        loadingProps={{ size: 'large', color: 'white' }}
                        titleStyle={styles.loginBtnTitle}
                        containerStyle={styles.loginBtnContainer}
                        buttonStyle={styles.loginBtn}
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
                            onPress={() => {
                                this.props.navigation.navigate('RoleSelector');
                            }}
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
        });
        const {
            navigation: {
                navigate,
            },
        } = this.props;
        navigate('studentDashboard');
    }

    componentDidUpdate() {
        if (this.props.loginError) {
            Alert.alert(
                'Login Failed',
                'Email or Password is Incorrect',
                [
                    { text: 'OK' },
                ],
                { cancelable: true },
            );
            console.log(this.props.loginError);
            //this.props.initState();
            this.setState({loading: false});
        }
        else if (this.props.user) {
            const {
                navigate,
            } = this.props.navigation;
            navigate('studentDashboard');
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
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
        left: '8%',
        color: 'white',
    },
    loginCard: {
        marginTop: '3%',
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
    loginBtnContainer: {
        width: '80%',
        height: 50,
        borderRadius: 30,
        marginTop: '3%',
    },
    loginBtn: {
        borderRadius: 30,
    },
    loginBtnTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => {
    
    const {
        login: {
            error: loginError,
            user
        }
    } = state;
    
    return {loginError, user };

}

const mapDispatchToProps = {
    initState,
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);