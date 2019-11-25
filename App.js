import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Signup from './src/screens/SignupScreen';
import Login from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';


const navigator = createSwitchNavigator({
  Splash: SplashScreen,
  Login: Login,
  Signup: Signup,
}, {
  initialRouteName: 'Signup',
});

const App = createAppContainer(navigator);

export default App;