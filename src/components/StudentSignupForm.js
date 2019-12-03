import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    Text,
    Alert,
} from 'react-native';
import {
    Input as EInput,
    Button as EButton,
} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const { width: WIDTH } = Dimensions.get('window');

class StudentSignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            phoneNo: '',
            cnic: '',
            password: '',
        };
        this._handleSignup = this._handleSignup.bind(this);
    }

    _handleSignup() {
        let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        if(this.state.fname.length === 0) {
            Alert.alert(
                'Full Name Empty',
                'Full Name cannot be Empty',
                [
                    { text: 'OK', onPress: () => { } },
                ],
                { cancelable: true },
            );
            return;
        }
        if(!re_email.test(this.state.email)) {
            Alert.alert(
                'Invalid Email',
                'The Email You Entered is Invalid',
                [
                    { text: 'OK', onPress: () => {}},
                ],
                { cancelable: true },
            );
            return;
        }
        if (this.state.phoneNo.length != 11) {
            Alert.alert(
                'Invalid Phone Number',
                'The Phone Number you Entered is Invalid',
                [
                    { text: 'OK', onPress: () => { } },
                ],
                { cancelable: true },
            );
            return;
        }
        if (this.state.cnic.length != 13) {
            Alert.alert(
                'Invalid CNIC',
                'The CNIC you Entered is Invalid',
                [
                    { text: 'OK', onPress: () => { } },
                ],
                { cancelable: true },
            );
            return;
        }
        if (this.state.password.length != 6) {
            Alert.alert(
                'Invalid Password',
                'Password must be 6 characters long',
                [
                    { text: 'OK', onPress: () => { } },
                ],
                { cancelable: true },
            );
            return;
        }
        if (this.state.fname.length && re_email.test(this.state.email) && 
            this.state.phoneNo.length == 11 && this.state.cnic.length == 13 && 
            this.state.password.length == 6) {
            console.log('Here');
            (async (email, password, fname, phoneNo, cnic) => {
                try {
                    let authEmailPass = await auth().createUserWithEmailAndPassword(email, password);
                    try {
                        let res = firestore().collection('students').doc(authEmailPass.uid).set({
                            fname,
                            phoneNo,
                            cnic,
                        })
                        console.log(res);
                    } catch (error) {
                        console.log(error);
                    }
                } catch (error) {
                    console.log(error);
                }
            })(this.state.email, this.state.password,
                this.state.fname, this.state.phoneNo, this.state.cnic)
        }
        
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="white"
                    style={styles.inputs}
                    value={this.state.fname}
                    onChangeText={(fname) => {
                        this.setState({ fname });
                    }}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="white"
                    keyboardType="email-address"
                    style={styles.inputs}
                    value={this.state.email}
                    onChangeText={(email) => {
                        this.setState({ email });
                    }}
                />
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="white"
                    keyboardType="phone-pad"
                    style={styles.inputs}
                    value={this.state.phoneNo}
                    onChangeText={(phoneNo) => {
                        this.setState({ phoneNo });
                    }}
                />
                <TextInput
                    placeholder="CNIC"
                    placeholderTextColor="white"
                    keyboardType="number-pad"
                    style={styles.inputs}
                    value={this.state.cnic}
                    onChangeText={(cnic) => {
                        this.setState({ cnic });
                    }}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry
                    style={styles.inputs}
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({ password });
                    }}
                />
                <EButton
                    containerStyle={styles.submitButton}
                    title="Signup"
                    onPress={this._handleSignup}
                />
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    inputs: {
        color: 'white',
        marginVertical: '2%',
        borderRadius: 100,
        backgroundColor: '#3483E8',
        fontSize: 20,
        width: '80%',
        opacity: 0.7,
        paddingLeft: '10%',
    },
    submitButton: {
        marginVertical: '2%',
        width: '50%',
    },
});

export default StudentSignupForm;