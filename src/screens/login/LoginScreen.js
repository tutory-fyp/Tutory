import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Text as EText,
  Input as EInput,
  Button as EButton,
  CheckBox as ECheckBox,
} from 'react-native-elements';
import { TextInput as PTextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-smart-splash-screen';
import { connect } from 'react-redux';
import { initState, login, setUser } from '../../redux/modules/user';
import auth from '@react-native-firebase/auth';
import { Dropdown } from 'react-native-material-dropdown';
import validator from 'validator';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
      emailErr: false,
      passwordErr: false,
      rememberMe: false,
      role: '',
    };
    this._handleRememberMe = this._handleRememberMe.bind(this);
    this._handleEmailInput = this._handleEmailInput.bind(this);
    this._handlePasswordInput = this._handlePasswordInput.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._checkEmail = this._checkEmail.bind(this);
    this._checkPassword = this._checkPassword.bind(this);
    this._passwordInputRef = null;
    this.data = [
      {
        value: 'Tutor',
      },
      {
        value: 'Student',
      },
      {
        value: 'Parent',
      },
    ];
  }

  _handleRememberMe() {
    if (this.state.rememberMe) {
      this.setState({ rememberMe: false });
    } else {
      this.setState({ rememberMe: true });
    }
  }

  _handleEmailInput(email) {
    this.setState({ email });
  }

  _handlePasswordInput(password) {
    this.setState({ password });
  }

  _checkEmail() {
    if (this.state.email.length != 0) {
      let re_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
      if (re_email.test(this.state.email)) {
        return true;
      } else {
        return false;
      }
    }
  }

  _checkPassword() {
    if (this.state.password.length != 0) {
      let re_password = /\S{6,}/;
      if (re_password.test(this.state.password)) {
        return true;
      } else {
        return false;
      }
    }
  }

  _handleLogin() {
    if (!validator.isEmail(this.state.email)) {
      Alert.alert(
        'Invalid Email',
        'The Entered Email is Invalid',
        [{ text: 'OK' }],
        { cancelable: true },
      );
      return;
    }
    if (this.state.password.length < 6) {
      Alert.alert(
        'Invalid Password',
        'Password length must be atleast 6 characters',
        [{ text: 'OK' }],
        { cancelable: true },
      );
      return;
    }
    if (!this.state.role) {
      Alert.alert('Select Role', 'Please Select a Role', [{ text: 'OK' }], {
        cancelable: true,
      });
      return;
    }
    this.setState({ loading: true });
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <ImageBackground
        source={require('../../../assets/Login/backGround.png')}
        style={styles.bg}>
        <EText h1 style={styles.loginText}>
          Tutory
        </EText>
        <View style={styles.loginCard}>
          <PTextInput
            label="Email"
            mode="outlined"
            theme={{ primary: '#3185E8' }}
            placeholder="Enter Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            value={this.state.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onSubmitEditing={() => this._passwordInputRef.focus()}
            onChangeText={this._handleEmailInput}
          />
          <PTextInput
            ref={ref => (this._passwordInputRef = ref)}
            label="Password"
            mode="outlined"
            value={this.state.password}
            secureTextEntry
            placeholder="Enter Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="done"
            onChangeText={this._handlePasswordInput}
            style={styles.input}
          />
          <Dropdown
            label="Role"
            data={this.data}
            textColor="#3185E8"
            fontSize={18}
            onChangeText={role => {
              this.setState({ role });
            }}
            containerStyle={styles.input}
          />
          <EButton
            title="Login"
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
          <View style={styles.signUpText}>
            <EText
              style={{
                color: 'rgba(0,0,0,0.3)',
              }}>
              Dont Have an Account?
            </EText>
            <TouchableOpacity
              style={{ alignSelf: 'center', marginLeft: '2%' }}
              onPress={() => {
                this.props.navigation.navigate('RoleSelector');
              }}>
              <EText
                style={{
                  color: '#3185E8',
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: '#3185E8',
                }}>
                Sign up
              </EText>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
    this.setState({
      email: 'student1@a.com',
      password: '123456',
      role: 'Student',
    });
  }

  componentDidUpdate() {
    if (this.props.loginError) {
      Alert.alert(
        'Login Failed',
        'Email or Password is Incorrect',
        [{ text: 'OK' }],
        { cancelable: true },
      );
      console.log('Login Error', this.props.loginError);
      this.props.initState();
      this.setState({ loading: false });
    } else if (this.props.user) {
      switch (this.state.role) {
        case 'Student': {
          this.props?.navigation?.navigate('studentDashboard');
          return;
        }
        case 'Tutor': {
          this.props?.navigation?.navigate('tutorDashboard');
          return;
        }
        case 'Parent': {
          this.props?.navigation?.navigate('parentDashboard');
          return;
        }
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
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
    left: '8%',
    color: 'white',
  },
  loginCard: {
    width: wp(80),
    padding: wp(3),
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
  },
  signUpText: {
    marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    marginTop: '2%',
    borderColor: 'red',
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

const mapStateToProps = state => {
  const {
    login: { error: loginError, user },
  } = state;

  return { loginError, user };
};

const mapDispatchToProps = {
  initState,
  login,
  setUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
