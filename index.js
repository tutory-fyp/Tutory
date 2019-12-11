/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main';
import LoginScreen from './src/screens/LoginScreen';


AppRegistry.registerComponent(appName, () => Main);
