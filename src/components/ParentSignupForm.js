import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {
    Text as EText,
    Button as EButton,
} from 'react-native-elements';
import {
    TextInput as PTextInput,
} from 'react-native-paper';
import TextInputMask  from 'react-native-text-input-mask';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

const { height: HEIGHT} = Dimensions.get('window');

class ParentSignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            phoneNo: '',
            password: '',
            cnic: '',
            loading: false, 
        };
        this._emailInputRef = React.createRef();
        this._phoneNoInputRef = React.createRef();
        this._passwordInputRef = React.createRef();
        this._CNICInputRef = React.createRef();
        this._handleSignup = this._handleSignup.bind(this);
    }

    _handleSignup() {

    }

    render() {
        return (
            <View
                style={styles.signupCard}
            >
                <KeyboardAwareScrollView
                    style={styles.signupFormWrapper}
                    contentContainerStyle={styles.signupFormContentContainer}
                >
                    <PTextInput
                        style={styles.signupFormInput}
                        mode="outlined"
                        label="Full Name"
                        placeholder="Enter Full Name"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.fname}
                        onChangeText={(fname) => {
                            this.setState({ fname });
                        }}
                        onSubmitEditing={() => this._emailInputRef.current.focus()}
                    />
                    <PTextInput
                        ref={this._emailInputRef}
                        style={styles.signupFormInput}
                        mode="outlined"
                        label="Email"
                        placeholder="Enter Email"
                        keyboardType="email-address"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={(email) => {
                            this.setState({ email });
                        }}
                        onSubmitEditing={() => this._passwordInputRef.current.focus()}
                    />
                    <PTextInput
                        ref={this._passwordInputRef}
                        style={styles.signupFormInput}
                        mode="outlined"
                        label="Password"
                        placeholder="Atleast 6 Characters"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={(password) => {
                            this.setState({ password });
                        }}
                        onSubmitEditing={() => {
                            this._phoneNoInputRef.focus();
                        }}
                    />
                    <PTextInput
                        style={styles.signupFormInput}
                        mode="outlined"
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        keyboardType="phone-pad"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onSubmitEditing={() => {
                            this._CNICInputRef.focus();
                        }}
                        render={props =>
                            <TextInputMask
                                {...props}
                                refInput={ref => { this._phoneNoInputRef = ref }}
                                mask="+92 [000]-[0000000]"
                            />
                        }
                    />
                    <PTextInput
                        style={styles.signupFormInput}
                        mode="outlined"
                        label="CNIC"
                        keyboardType="number-pad"
                        returnKeyType="done"
                        value={this.state.cnic}
                        onChangeText={(cnic) => {
                            this.setState({cnic});
                        }}
                        render={props =>
                            <TextInputMask
                                {...props}
                                refInput={ref => { this._CNICInputRef = ref }}
                                mask="[00000]-[0000000]-[0]"
                            />
                        }
                    />
                    <EButton
                        title="Signup"
                        ViewComponent={LinearGradient}
                        linearGradientProps={{
                            colors: ['#3185E8', '#0221A0'],
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0 },
                        }}
                        loading={this.state.loading}
                        loadingProps={{ size: 'large', color: 'white' }}
                        titleStyle={styles.signupBtnTitle}
                        containerStyle={styles.signupBtnContainer}
                        buttonStyle={styles.signupBtn}
                    />
                </KeyboardAwareScrollView>
                <View style={styles.regAccWrapper}>
                    <EText style={styles.regAccText}>
                        Already Registered?
                    </EText>
                    <TouchableOpacity
                        style={styles.regAccLoginBtn}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <EText style={styles.regAccLoginBtnText}>
                            Log in
                        </EText>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    signupCard: {
        marginTop: '10%',
        height: HEIGHT - 220,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 30,
    },
    signupFormWrapper: {
        borderRadius: 30,
        ...StyleSheet.absoluteFill,
    },
    signupFormContentContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '5%',
    },
    signupFormInput: {
        width: '80%',
        height: 50,
        marginTop: '2%',
    },
    signupBtnStyle: {
        width: '70%',
        height: 50,
        borderRadius: 30,
        marginTop: '2%',
    },
    signupBtnContainer: {
        width: '70%',
        height: 50,
        borderRadius: 30,
        marginTop: '5%',
    },
    signupBtn: {
        borderRadius: 30,
    },
    signupBtnTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    regAccWrapper: {  
        position: 'absolute',
        bottom: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    regAccText: {
        color: 'rgba(0,0,0,0.7)',
        marginTop: '3%',
    },
    regAccLoginBtn: { 
        marginLeft: '3%', 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    regAccLoginBtnText: {
        fontSize: 16, 
        borderBottomWidth: 1, 
        borderBottomColor: '#3185E8',
    },
});

export default withNavigation(ParentSignupScreen);