import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import {
    Text as EText,
    Button as EButton,
} from 'react-native-elements';
import {
    TextInput as PTextInput,
    HelperText,
} from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const { height: HEIGHT } = Dimensions.get('window');

class TutorSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            phoneNo: '',
            password: '',
            cnic: '',
            loading: false,
            filePath: {},
            disable: false,
        };
        this._emailInputRef = React.createRef();
        this._phoneNoInputRef = React.createRef();
        this._passwordInputRef = React.createRef();
        this._CNICInputRef = React.createRef();
        this._handleSignup = this._handleSignup.bind(this);
    }

    _chooseFile = () => {
        let options = {
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

    _handleSignup() {
        this.setState( {disable: true} );
        // let regex_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if(this.state.fname.length === 0) {
        //     Alert.alert(
        //         'Empty Fullname',
        //         'Fullname cannot be empty',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if(this.state.email.length === 0) {
        //     Alert.alert(
        //         'Empty Email',
        //         'Email cannot be empty',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if (!regex_email.test(this.state.email)) {
        //     Alert.alert(
        //         'Invalid Email',
        //         'The Entered Email is Invalid',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if (this.state.password.length < 6) {
        //     Alert.alert(
        //         'Invalid Password',
        //         'Password length must be atleast 6 characters',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if (this.state.phoneNo.length === 0) {
        //     Alert.alert(
        //         'Empty Phone Number',
        //         'Phone Number cannot be empty',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if (this.state.phoneNo.length < 13) {
        //     Alert.alert(
        //         'Invalid Phone Number',
        //         'Phone Number Entered is Invalid',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if (this.state.cnic.length === 0) {
        //     Alert.alert(
        //         'CNIC Empty',
        //         'CNIC cannot be empty',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if (this.state.cnic.length < 15) {
        //     Alert.alert(
        //         'Invalid CNIC',
        //         'CNIC Entered is Invalid',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // if(!this.state.filePath.path) {
        //     Alert.alert(
        //         'No Image File Selected',
        //         'Please select image of latest academic document',
        //         [
        //             { text: 'OK' },
        //         ],
        //         { cancelable: true },
        //     );
        //     return;
        // }
        // this.setState({ loading: true });
        // let authentication = auth();
        // authentication.createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then(userCredential => {
        //     (async () => {
        //         try {
        //             let tutors = await firestore().collection('tutors');
        //             let tutor = await tutors.add({
        //                 id: userCredential.user.uid,
        //                 fname: this.state.fname,
        //                 email: this.state.email,
        //                 phoneNo: this.state.phoneNo,
        //                 cnic: this.state.cnic,
        //             });
        //             let ref = await tutor.get();
        //             console.log(ref.get('fname'));
        //         }
        //         catch(err) {
        //             Alert.alert(
        //                 'Error',
        //                 'Something went wrong with signup',
        //                 [
        //                     { text: 'OK', onPress: () => { console.log(err) } },
        //                 ],
        //                 { cancelable: true },
        //             );
        //             this.setState({ loading: false });
        //         }
        //     })();
        //     let ref = storage().ref(`academicImages/${userCredential.user.uid}/${this.state.filePath.fileName}`);
        //     let task = ref.putFile(this.state.filePath.path, {
        //         cacheControl: 'no-store',
        //     });
        //     task.then((snapshot) => {
        //         this.props.navigation.navigate('Login');
        //     })
        //     .catch(err => {
        //         Alert.alert(
        //             'Error',
        //             'Something went wrong with signup',
        //             [
        //                 { text: 'OK', onPress: () => { console.log(error.code) } },
        //             ],
        //             { cancelable: true },
        //         );
        //         this.setState({ loading: false });
        //     });
        // })
        // .catch(error => {
        //     if(error.code == 'auth/email-already-in-use') {
        //         Alert.alert(
        //             'Email Already in use',
        //             'The Email you entered is already in use',
        //             [
        //                 { text: 'OK' },
        //             ],
        //             { cancelable: true },
        //         );
        //         this.setState({ loading: false });
        //         return;
        //     }
        //     else {
        //         Alert.alert(
        //             'Error',
        //             'Something went wrong with signup',
        //             [
        //                 { text: 'OK', onPress: () => { console.log(error.code) } },
        //             ],
        //             { cancelable: true },
        //         );
        //         this.setState({ loading: false });
        //         return;
        //     }
        // });
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
                        disabled={this.state.disable}
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
                        disabled={this.state.disable}
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
                        placeholder="Enter Password"
                        returnKeyType="next"
                        autoCapitalize="none"
                        disabled={this.state.disable}
                        autoCorrect={false}
                        secureTextEntry
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
                        disabled={this.state.disable}
                        autoCorrect={false}
                        value={this.state.phoneNo}
                        onChangeText={(phoneNo) => {
                            this.setState({ phoneNo });
                        }}
                        onSubmitEditing={() => {
                            this._CNICInputRef.focus();
                        }}
                        render={props =>
                            <TextInputMask
                                {...props}
                                refInput={ref => { this._phoneNoInputRef = ref }}
                                mask="+92[000]-[0000000]"
                            />
                        }
                    />
                    <PTextInput
                        style={styles.signupFormInput}
                        mode="outlined"
                        label="CNIC"
                        placeholder="Enter CNIC"
                        keyboardType="number-pad"
                        returnKeyType="done"
                        disabled={this.state.disable}
                        value={this.state.cnic}
                        onChangeText={(cnic) => {
                            this.setState({ cnic });
                        }}
                        render={props =>
                            <TextInputMask
                                {...props}
                                refInput={ref => { this._CNICInputRef = ref }}
                                mask="[00000]-[0000000]-[0]"
                            />
                        }
                    />
                    <View
                        style={styles.uploadImageWrapper}
                    >
                        <EButton
                            containerStyle={styles.uploadImageBtnContainer}
                            buttonStyle={styles.uploadImageBtn}
                            icon={<Icon name="upload" size={20} color="white" />}
                            onPress={() => {
                                this._chooseFile();
                            }}
                        />
                        <Image
                            source={{ uri: this.state.filePath.uri }}
                            style={styles.uploadImagePlaceholder}
                        />
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
                        onPress={this._handleSignup}
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
        height: HEIGHT - 160,
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
    uploadImageWrapper: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    uploadImageBtnContainer: {
        width: '18%',
        marginTop: '4%',
    },
    uploadImageBtn: { 
        borderRadius: 30, 
    },
    uploadImagePlaceholder: { 
        width: 35, 
        height: 60, 
        marginTop: '2%', 
        marginLeft: 20 
    },
});

export default withNavigation(TutorSignupForm);