import React from 'react';
import {Text, View, Button, Image, Alert, StyleSheet} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

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
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarUnderlineStyle={styles.lineStyle}
        tabBarActiveTextColor="#FF0000">
        <Text style={styles.textStyle} tabLabel="娱乐">
          娱乐ggg
        </Text>
        <Text style={styles.textStyle} tabLabel="科技">
          科技
        </Text>
        <Text style={styles.textStyle} tabLabel="军事">
          军事
        </Text>
        <Text style={styles.textStyle} tabLabel="体育">
          体育
        </Text>
      </ScrollableTabView>
    );
  }
  _handleClick() {
    console.log(this.state.book);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  lineStyle: {
    height: 2,
    backgroundColor: 'red',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
});

export default MineScreen;
