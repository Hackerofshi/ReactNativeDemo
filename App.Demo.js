/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  StatusBar,
  Button,
} from 'react-native'

import {
 createStackNavigator,
 createAppContainer,
 createSwitchNavigator,
}from 'react-navigation'

import MainScreen from './lib/ui/main'
import SignInScreen from './lib/ui/login/login_page'
import ForgetPasswordScreen from './lib/ui/login/forget_password'
import RegisterScreen from './lib/ui/login/register'

class AuthLoadingScreen extends React.Component {
  constructor(props){
    super(props);
    this._bootstrpsAsyns();

  }

  _bootstrpsAsyns = async() =>{
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  render (){
    return(<View>
      <ActivityIndicator/>
     <StatusBar barStyle = 'default'/>
    </View>)
  }
}


const LoginStack = createStackNavigator({
   Login: {screen : SignInScreen},
   SetPW:{screen: ForgetPasswordScreen},
   Register:{screen : RegisterScreen}
})


export default createAppContainer(createSwitchNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    App: MainScreen,
    Auth: LoginStack
},
{
  initialRouteName: 'AuthLoading',
}
))
