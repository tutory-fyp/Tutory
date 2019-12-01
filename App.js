import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Signup from './src/screens/SignupScreen';
import Login from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import DashboardScreen from './src/screens/DashboardScreen';

const navigator = createSwitchNavigator({
  Splash: SplashScreen,
  Login: Login,
  Signup: Signup,
  Dashboard: DashboardScreen,
}, {
  initialRouteName: 'Dashboard',
});

const App = createAppContainer(navigator);

export default App;