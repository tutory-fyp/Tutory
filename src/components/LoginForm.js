import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
} from 'react-native';
import {
    Text as EText,
    Button as EButton,
    Input as EInput,
} from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';
import authApi from '../api/authApi';
import auth from '@react-native-firebase/auth';

const { width: WIDTH } = Dimensions.get('window');

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            emailErrMsg: '',
            passwordErrMsg: '   ',
        };
        this._clearEmailErrMsg = this._clearEmailErrMsg.bind(this);
        this._clearPasswordErrMsg = this._clearPasswordErrMsg.bind(this);
        this._handleEmailInput = this._handleEmailInput.bind(this);
        this._handlePasswordInput = this._handlePasswordInput.bind(this);
        this._handleLogin = this._handleLogin.bind(this);
        this._checkEmail = this._checkEmail.bind(this);
        this._checkPassword = this._checkPassword.bind(this);
    }

    _clearEmailErrMsg() {
        this.setState({ emailErrMsg: '' });
    }

    _clearPasswordErrMsg() {
        this.setState({ passwordErrMsg: '' });
    }

    _handleEmailInput(email) {
        this.setState({email});
    }

    _handlePasswordInput(password) {
        this.setState({password});
    }

    _checkEmail() {
        if(this.state.email.length != 0) {
            let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
            if (!re_email.test(this.state.email)) {
                this.setState({ emailErrMsg: 'Invalid Email' });
            }
        }
    }

    _checkPassword() {
        if(this.state.password.length != 0) {
            let re_password = /\S{6,}/;
            if (!re_password.test(this.state.password)) {
                this.setState({ passwordErrMsg: 'Password length must be 6 characters' });
            }
        }
    }

    _handleLogin() {
        let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        let re_password = /\S{6,}/;
        if(!re_email.test(this.state.email)) {
            this.setState({emailErrMsg: 'Invalid Email'});
        }
        if(!re_password.test(this.state.password)) {
            this.setState({passwordErrMsg: 'Password length must be 6 characters'});
        }
        if(re_email.test(this.state.email) && re_password.test(this.state.password)) {
            this.setState({loading: true});
            // authApi.post('', {
            //     email: this.state.email,
            //     password: this.state.password,
            //     returnSecureToken: true,
            // }).then( res => {
            //     if(res.data.registered) {
            //         this.props.navigation.navigate('Dashboard');
            //     }
            // }).catch(err => {
            //     this.setState({ loading: false });
            //     if(err.response.data.error) {
            //         alert("Incorrect Username or Password");
            //     }
            // });
            (async (email, password) => {
                try {
                    let res = await auth().signInWithEmailAndPassword(email, password);
                    console.log(res);
                } catch (error) {
                    console.log(error);
                }
            })(this.state.email, this.state.password);
        }
    }

    render() {
        return (
            <>
                <View style={styles.formContainer} >
                    <EInput
                        leftIcon={<AntIcon name="user" size={20} color="white" />}
                        containerStyle={StyleSheet.flatten(styles.inputWraper, { marginTop: 15 })}
                        inputContainerStyle={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0)', 
                        flex: 1, marginBottom: '2%' }}
                        inputStyle={styles.inputStyle}
                        placeholder="Username"
                        placeholderTextColor="white"
                        onEndEditing={this._checkEmail}
                        onChangeText={this._handleEmailInput}
                        errorMessage={this.state.emailErrMsg}
                        onFocus={this._clearEmailErrMsg}
                        errorStyle={styles.errorMsgStyle}
                    />
                    <View style={styles.hr} />
                    <EInput
                        leftIcon={<AntIcon name="lock" size={20} color="white" />}
                        containerStyle={styles.inputWraper}
                        inputContainerStyle={styles.inputUsername}
                        inputStyle={styles.inputStyle}
                        placeholder="Password"
                        onEndEditing={this._checkPassword}
                        onChangeText={this._handlePasswordInput}
                        secureTextEntry
                        placeholderTextColor="white"
                        errorMessage={this.state.passwordErrMsg}
                        onFocus={this._clearPasswordErrMsg}
                        errorStyle={styles.errorMsgStyle}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword} >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <EButton
                    containerStyle={styles.loginBtnWrapperStyle}
                    buttonStyle={styles.loginBtnSyle}
                    titleStyle={styles.loginBtnTitleStyle}
                    onPress={this._handleLogin}
                    loading={this.state.loading}
                    loadingStyle={styles.loadingStyle}
                    loadingProps={{ color: '#3185E8', size: 'large'}}
                    title="Login"
                />
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{
                        marginLeft: '15%',
                        fontSize: 16,
                        alignSelf: 'center'
                    }} >
                        Don't Have an Account? 
                    </Text>
                    <TouchableOpacity style={{
                        marginLeft: '2%',
                    }} >
                        <Text style={{
                            fontSize: 16,
                            color: '#3185E8',
                        }} >
                            Sign Up Now!!!
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        height: 180,
        width: WIDTH - 50,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: '15%',
        backgroundColor: '#3185E8',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    hr: {
        borderBottomColor: '#fff',
        marginHorizontal: 25,
        borderBottomWidth: 1,
    },
    inputWraper: {
        flex: 1,
        marginLeft: '2%',
        alignSelf: 'stretch',
    },
    inputStyle: {
        borderBottomWidth: 0,
        fontSize: 23,
    },
    inputUsername: { 
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(0,0,0,0)', 
    },
    errorMsgStyle: {
        fontSize: 18,
        marginLeft: '2%',
        marginBottom: '2%',
    },
    forgotPassword: {
        fontSize: 18,
        color: '#3185E8',
        alignSelf: 'flex-end',
        marginTop: '2%',
        marginRight: '8%',
    },
    loginBtnWrapperStyle: {
        width: WIDTH - 200, 
        alignSelf: 'center', 
        borderColor: "#3185E8", 
        borderWidth: 1,
        marginVertical: '5%',
    },
    loginBtnSyle: { 
        borderRadius: 25, 
        backgroundColor: "#eeeeee" 
    },
    loginBtnTitleStyle: { 
        color: '#3185E8',
        fontSize: 22, 
    },
    loadingStyle: {
        alignSelf: 'center',
        height: 20,
    },
});

export default withNavigation(LoginForm);