import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Picker,
    Button,
} from 'react-native';
import {
    Button as EButton,
} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import StudentSignupForm from './StudentSignupForm';
import TutorSignupForm from './TutorSignupForm';
import ParentSignupForm from './ParentSignupForm';

class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'student',
        };
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}} >
                <Image
                    source={require('../../assets/logo.jpg')}
                    style={styles.logo}
                />
                <Picker
                    selectedValue={this.state.role}
                    onValueChange={(value) => {
                        this.setState({ role: value });
                    }}
                    style={styles.rolePicker}
                >
                    <Picker.Item label="Student" value="student" />
                    <Picker.Item label="Tutor" value="tutor" />
                    <Picker.Item label="Parent" value="parent" />
                </Picker>
                {
                    (
                        () => {
                            switch (this.state.role) {
                                case 'student': {
                                    return <StudentSignupForm />
                                    break;
                                }
                                case 'tutor': {
                                    return <TutorSignupForm />
                                    break;
                                }
                                case 'parent': {
                                    return <ParentSignupForm />
                                    break;
                                }
                            }
                        }
                    )()
                }
                <EButton
                    title="Login"
                    onPress={() => {
                        this.props.navigation.navigate('Login');
                    }}
                    containerStyle={{ marginVertical: '2%', width: '40%' }} 
                />
            </ScrollView>
        );
    }

    componentDidMount() {
        SplashScreen.hide();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: '10%',
        resizeMode: 'contain',
        opacity: 0.9,
        borderRadius: 100,
    },
    rolePicker: {
        height: 60,
        width: 150,
        color: 'white',
    },
});

export default withNavigation(SignupForm);