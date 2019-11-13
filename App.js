import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';

const navigator = createSwitchNavigator({
  Splash: SplashScreen,
}, {
  initialRouteName: 'Splash',
});

const App = createAppContainer(navigator);

export default App;