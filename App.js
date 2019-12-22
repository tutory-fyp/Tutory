import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './src/screens/dashboard';
import LoginScreen from './src/screens/login/LoginScreen';
import RoleSelectorScreen from './src/screens/login/RoleSelectorScreen';
import SignupScreen from './src/screens/login/SignupScreen';

const loginFlowNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Login: LoginScreen,
        RoleSelector: RoleSelectorScreen,
        Signup: SignupScreen,
    }, {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            header: null,
        },
    }),
}, {
    initialRouteName: 'loginFlow',
});

const rootNavigator = createSwitchNavigator({
    loginFlow: loginFlowNavigator,
    dashboardFlow: Dashboard,
}, {
    initialRouteName: 'loginFlow',
    headerMode: 'none'
})

export default createAppContainer(rootNavigator);
