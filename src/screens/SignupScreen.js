import React, { Component } from 'react';
import { 
    StyleSheet,
    ImageBackground,
} from 'react-native';
import {
  Text as EText,
} from 'react-native-elements';
import ParentSignupForm from '../components/ParentSignupForm';
import StudentSignupForm from '../components/StudentSignupForm';
import TutorSignupForm from '../components/TutorSignupForm';

class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'tutor',
        };
        this._emailInputRef = null;
        this._phoneNoInputRef = null;
        this._passwordInputRef = null;
        this._conPassInputRef = null;
        this._CNICInputRef = null;
        this._renderForm = this._renderForm.bind(this);
    }
    
    _renderForm() {
        switch(this.state.role) {
            case 'parent': {
                return (
                    <ParentSignupForm />
                );
            }
            case 'student': {
                return (
                    <StudentSignupForm />
                );
            }
            case 'tutor': {
                return (
                    <TutorSignupForm />
                );
            }
            default: {
                return null;
            }
        }
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/Login/backGround.png')}
                style={styles.bg}
            >
                <EText 
                    h1
                    style={styles.signupText}
                >
                    Sign up
                </EText>
               {this._renderForm()}
            </ImageBackground>
        );
    }

    componentDidMount() {
        let role = this.props.navigation.getParam('role');
        this.setState({ role });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupText: {
        position: 'absolute',
        left: '6%',
        top: '4%',
        color: 'white',
    },
});

export default SignupScreen;