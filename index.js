/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LearnRN from './app/fun_demo'
import FlexDemo from './app/flex_demo'

AppRegistry.registerComponent(appName, () => FlexDemo);
