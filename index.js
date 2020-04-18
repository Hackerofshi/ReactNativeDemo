/**
 * @format
 */

import { AppRegistry, Text, View,Button } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import LearnRN from './lib/fun_demo'
import FlexDemo from './lib/flex_demo'
import SimpleAppNavigator from './lib/route/navi'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';




AppRegistry.registerComponent(appName, () => createAppContainer(SimpleAppNavigator));
