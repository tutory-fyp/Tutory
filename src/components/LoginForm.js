import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Image,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';
import {
    Text as EText,
    Button as EButton,
    Input as EInput,
} from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import authApi from '../api/authApi';

const { width: WIDTH } = Dimensions.get('window');

class LoginForm extends Component {

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
                <KeyboardAvoidingView behavior="position" style={styles.container} >
                    <Image
                        source={require(`../../assets/logo.jpg`)}
                        style={styles.logo}
                        resizeMethod="scale"
                    />
                    <EInput
                        label="Email"
                        value={this.state.email}
                        errorStyle={styles.inputErrorStyle}
                        onChangeText={(email) => this.setState({ email })}
                        leftIcon={<FAIcon name="user" size={35} color="white" />}
                        placeholder="Enter Email"
                        inputStyle={{ paddingLeft: 10, fontSize: 20 }}
                        errorMessage={this.state.emailErrMsg}
                        inputContainerStyle={styles.inputConainerStyle}
                        placeholderTextColor="white"
                        labelStyle={styles.inputLabelStyle}
                        containerStyle={styles.containerStyle}
                    />
                    <EInput
                        label="Password"
                        placeholder="Enter Password"
                        errorStyle={styles.inputErrorStyle}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry
                        leftIcon={<FAIcon name="lock" size={37} color="white" />}
                        errorMessage={this.state.passwordErrMsg}
                        inputStyle={{ paddingLeft: 12, fontSize: 20 }}
                        inputContainerStyle={styles.inputConainerStyle}
                        placeholderTextColor="white"
                        labelStyle={styles.inputLabelStyle}
                        containerStyle={styles.containerStyle}
                    />
                    <EButton
                        title="Login"
                        loading={false}
                        containerStyle={styles.btnContainerStyle}
                        buttonStyle={styles.btnStyle}
                        titleStyle={styles.btnTitleStyle}
                        icon={<FAIcon name="sign-in" size={30} color="white" style={{ marginLeft: 15, }} />}
                        iconContainerStyle={styles.btnIconContainerStyle}
                        loading={this.state.loading}
                        loadingProps={{ size: "large" }}
                        iconRight={true}
                        onPress={(event) => {
                            let re_email = /\S+@\S+\.\S+/;
                            let re_password = /\S{6,}/;
                            if (re_email.test(this.state.email) == true) {
                                this.setState({ emailErrMsg: '' });
                            } else {
                                this.setState({emailErrMsg: 'Invalid Email'});
                            }
                            if (re_password.test(this.state.password) == true) {
                                this.setState({ passwordErrMsg: '' });
                            } else {
                                this.setState({ passwordErrMsg: 'Password must be 4 characters' });
                            }
                            if (re_email.test(this.state.email) && re_password.test(this.state.password)) {
                                this.setState({ loading: true });
                                authApi.post('', {
                                    email: this.state.email,
                                    password: this.state.password,
                                    returnSecureToken: true
                                }).then((res) => {
                                    console.log(res.data);
                                    if(res.data.registered) {
                                        this.props.navigation.navigate('Dashboard');
                                    }
                                }).catch((err) => {
                                    Alert.alert(
                                        'Login Failed',
                                        'Incorrect Email or Password',
                                        [
                                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                                        ],
                                        { cancelable: true, onDismiss: () => {}},
                                    );
                                    this.setState({loading: false});
                                });
                            }
                        }}
                    />
                    <EButton
                        title="Signup"
                        buttonStyle={styles.btnStyle}
                        containerStyle={styles.btnContainerStyle}
                        onPress={() => {
                            this.props.navigation.navigate('Signup');
                        }}  
                    />
                </KeyboardAvoidingView>
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
    logo: {
        opacity: 0.9,
        height: 230,
        width: 230,
        borderRadius: 100,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: "10%",
    },
    containerStyle: {
        width: WIDTH - 50,
        marginLeft: 15,
    },
    inputConainerStyle: {
        borderBottomWidth: 0,
        paddingLeft: 0,
    },
    inputLabelStyle: {
        color: 'white',
        fontSize: 25,
        marginRight: 15,
    },
    inputErrorStyle: {
        fontSize: 18,
    },
    btnContainerStyle: {
        marginTop: 20,
        width: WIDTH - 150,
        alignSelf: 'center',
        borderRadius: 20,
    },
    btnStyle: {
        borderRadius: 25,
    },
    btnTitleStyle: {
        fontSize: 25,
    },
    btnIconContainerStyle: {
    },
});

export default withNavigation(LoginForm);