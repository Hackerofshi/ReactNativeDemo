import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class GlobalConstant extends Component {
  constructor(props){
    super(props);
    this.state = {
      zuoye:{
        book:'语文',
      },
      father:{
        name:'xxx',
        phone:'11111111',
      },
      mother:{
        name:'xxx',
        phone:'00000000',
      },
    }
    this.callParent = this.callParent.bind(this);
}
  callParent = (parent) => {
    alert(this.state[parent].phone);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={ ()=> this.callParent('father')}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome} onPress={ ()=> this.callParent('mother')}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});