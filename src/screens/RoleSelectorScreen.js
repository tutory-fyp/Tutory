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
import { Dropdown } from 'react-native-material-dropdown';


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class RoleSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: ''
        };
        this._handleLogin=this._handleLogin.bind(this);
    }

    _handleLogin() {
        console.log(this.state);
        if (this.state.role == "Student") {
            this.props.navigation.navigate("StudentSignup")
        }
        if (this.state.role == "Tutor") {
            this.props.navigation.navigate("TutorSignup")
        }
        if (this.state.role == "Parent") {
            this.props.navigation.navigate("ParentSignup")
        }
    }



    render() {
        let data = [{
            value: 'Tutor',
        }, {
            value: 'Student',
        }, {
            value: 'Parent',
        }];
        return (
            <ImageBackground
                source={require('../../assets/Login/backGround.png')}
                style={styles.bg}
            >
                <EText h1 style={styles.loginText} >
                    Tutory
                    </EText>
                <View style={styles.loginCard}>
                    <EText style={styles.selectorText}>How Would You Like To Sign up</EText>
                    <Dropdown
                        label='Select'
                        data={data}
                        textColor="rgba(0,0,0,0.5)"
                        fontSize={18}
                        onChangeText={(data) => {
                            this.setState({ role: data });
                        }}
                        containerStyle={{ width: 200, marginTop: '10%' }}
                    />
                    <EButton
                        title="Proceed"
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
        resizeMode: 'contain',
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
        left: '9%',
        color: 'white',
    },
    loginCard: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: WIDTH - 70,
        paddingTop: '1%',
        height: 310,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
    },
    selectorText: {
        color: 'rgba(0,0,0,0.5)',
        marginTop: 50,
        width: 250,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 17,
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

export default RoleSelector;