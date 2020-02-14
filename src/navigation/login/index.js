import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../../screens/login/LoginScreen';
import SignupScreen from '../../screens/login/SignupScreen';
import RoleSelectorScreen from '../../screens/login/RoleSelectorScreen';

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