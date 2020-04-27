import React from 'react';
import {Text, View, Button, Image, Alert} from 'react-native';

class MineScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: 'yufen',
    };

    this.handleClick = this._handleClick.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: '我的',
      // headerRight: (
      //   <Button onPress={() => navigation.navigate('Mine')}
      //     title='Mine'
      //     color='#fff' />),
    };
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#e10008', fontSize: 20}}> Profile Screen</Text>
        <Button
          style={{color: '#e10008', fontSize: 20}}
          title="点击"
          onPress={this.handleClick}
        />
      </View>
    );
  }
  _handleClick() {
    console.log(this.state.book);
  }
}

export default MineScreen;
