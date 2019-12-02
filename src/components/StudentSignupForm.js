import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    Text,
} from 'react-native';
import {
    Input as EInput,
    Button as EButton,
} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

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
    }

    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="white"
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="white"
                    keyboardType="email-address"
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor="white"
                    keyboardType="phone-pad"
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="CNIC"
                    placeholderTextColor="white"
                    keyboardType="number-pad"
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry
                    style={styles.inputs}
                />
                <EButton
                    containerStyle={styles.submitButton}
                    title="Signup"
                    onPress={ async () => {
                        console.log('dad');
                        const documentSnapshot = await firestore()
                            .collection('students')
                            .doc('1').set({ name: "Muhammad Usman" , email: "usmanzahoor123@gmail.com" })
                            .catch(error => {
                                console.log(error);
                            });
                    }}
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