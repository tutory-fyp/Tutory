import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    loginScreens,
} from '../../screens';

// Login Screens

const {
    LoginScreen,
    SignupScreen,
    RoleSelectorScreen,
} = loginScreens;

const loginStack = createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    RoleSelector: RoleSelectorScreen,
}, {
    initialRouteName: "Login",
    defaultNavigationOptions: {
        header: null,
    }
});

export default loginStack;