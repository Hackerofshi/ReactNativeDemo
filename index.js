/**
 * @format
 */

import { AppRegistry, Text, View, Button } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import SimpleAppNavigator from './lib/route/navi'
import AppDemo from './App.Demo';



AppRegistry.registerComponent(appName, () => AppDemo);
