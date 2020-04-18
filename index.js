/**
 * @format
 */

import { AppRegistry, Text, View,Button } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import LearnRN from './app/fun_demo'
import FlexDemo from './app/flex_demo'
import SimpleAppNavigator from './app/route/navi'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';




AppRegistry.registerComponent(appName, () => createAppContainer(SimpleAppNavigator));
