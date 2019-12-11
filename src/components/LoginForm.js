import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
    KeyboardAvoidingView,
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

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

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
            <View style={styles.container} >
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginCard: {
        position: 'relative',
        bottom: '0%',
        width: WIDTH - 80,
        height: 400,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
    },
});

export default withNavigation(LoginForm);