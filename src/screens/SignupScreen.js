import React, { Component } from 'react';
import { 
    StyleSheet,
    ImageBackground,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import {
  Text as EText,
  Input as EInput,
  Button as EButton,
} from 'react-native-elements';
import {
    TextInput as PTextInput,
} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: null,
        };
        this._emailInputRef = null;
        this._phoneNoInputRef = null;
        this._passwordInputRef = null;
        this._conPassInputRef = null;
        this._CNICInputRef = null;
    }
    
    _chooseFile = () => {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            let source = response;
            this.setState({
                filePath: source,
            });
        });
    }

    render() {
        return (
            <ImageBackground
                source={require('../../assets/Login/backGround.png')}
                style={styles.bg}
            >
                <EText 
                    h2
                    style={styles.signupText}
                >
                    Sign up
                </EText>
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
                            onSubmitEditing={() => this._emailInputRef.focus()}
                        />
                        <PTextInput
                            ref={(ref) => this._emailInputRef = ref}
                            style={styles.signupFormInput}
                            mode="outlined"
                            label="Email"
                            placeholder="Enter Email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing={() => this._passwordInputRef.focus()}
                        />
                        <PTextInput
                            ref={(ref) => this._passwordInputRef = ref}
                            style={styles.signupFormInput}
                            mode="outlined"
                            label="Password"
                            placeholder="Atleast 6 Characters"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing={() => this._phoneNoInputRef.focus()}
                        />
                        {/* <PTextInput
                            ref={(ref) => this._conPassInputRef = ref}
                            style={styles.signupFormInput}
                            mode="outlined"
                            label="Confirm Password"
                            placeholder="Re-Enter Password"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing={() => this._phoneNoInputRef.focus()}
                        /> */}
                        <PTextInput
                            ref={(ref) => this._phoneNoInputRef = ref}
                            style={styles.signupFormInput}
                            mode="outlined"
                            label="Phone Number"
                            placeholder="Enter Phone Number"
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onSubmitEditing={() => this._CNICInputRef.focus()}
                        />
                        <PTextInput
                            ref={(ref) => this._CNICInputRef = ref}
                            style={styles.signupFormInput}
                            mode="outlined"
                            label="CNIC"
                            placeholder="Enter CNIC"
                            keyboardType="phone-pad"
                            returnKeyType="done"
                        />
                        <View style={{flexDirection: 'column', alignItems: 'center',
                                    justifyContent: 'center', marginTop: '2%'}} 
                        >
                            <EText style={{
                                    fontSize: 15, 
                                    color: 'rgba(0,0,0,0.5)',
                                    marginRight: '20%',
                                }} 
                            >
                                Upload Academic Record Image
                            </EText>
                            <View
                                style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} 
                            >
                                <EButton
                                    containerStyle={{
                                        width: '18%',
                                        marginTop: '4%',
                                    }}
                                    buttonStyle={{ borderRadius: 30, }}
                                    icon={<Icon name="upload" size={20} color="white" />}
                                    onPress={() => {
                                        this._chooseFile();
                                    }}
                                />
                                <Image 
                                    source={{ uri: this.state.filePath ? this.state.filePath.uri : 'https://dummyimage.com/640x360/D3D3D3/D3D3D3' }}
                                    style={{ width: 35, height: 60,marginTop:'2%', marginLeft: 20 }}
                                />
                            </View>
                        </View>
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
                        <View style={{ color: 'rgba(0,0,0,0.3)' ,flexDirection:'row',marginTop:'3%' }}>
                            <EText style={{
                                 color: 'rgba(0,0,0,0.5)' }}>
                                Already Registered?
                            </EText>
                            <TouchableOpacity 
                                style={{ marginLeft: '3%',justifyContent:'center' }}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <EText style={{ fontSize: 16, borderBottomWidth: 1, borderBottomColor:'#3185E8',}}>
                                    Log in
                                </EText>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </ImageBackground>
        );
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
        left: '9%',
        top: '1%',
        color: 'white',
    },
    signupCard: {
        marginTop: '10%',
        height: HEIGHT - 140,
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
        marginTop: '2%',
    },
    signupBtn: {
        borderRadius: 30,
    },
    signupBtnTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SignupScreen;