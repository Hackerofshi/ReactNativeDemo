import React from 'react'
import { Text, View, Button, Image, Alert } from 'react-native';

class MineScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "我的",
      // headerRight: (
      //   <Button onPress={() => navigation.navigate('Mine')}
      //     title='Mine'
      //     color='#fff' />),
    }
  }
  render() {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#e10008', fontSize: 20 }}>  Profile Screen</Text>
    </View>)
  }
}


export default MineScreen;