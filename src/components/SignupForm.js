import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    Text,
    Picker,
    Button,
    TouchableOpacity,
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
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{
                        marginLeft: '8%',
                        fontSize: 16,
                        alignSelf: 'center'
                    }} >
                        Already Have an Account?
                    </Text>
                    <TouchableOpacity 
                        style={{
                            marginLeft: '2%',
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('Login');
                        }} 
                    >
                        <Text style={{
                            fontSize: 16,
                            color: '#3185E8',
                        }} >
                            Login Instead!
                        </Text>
                    </TouchableOpacity>
                </View>
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