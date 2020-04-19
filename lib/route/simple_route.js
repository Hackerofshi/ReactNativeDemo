
import { AppRegistry, Text, View,Button } from 'react-native';

import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle:{
            backgroundColor:'#00a0e9'
        },
        headerTintColor:'white',
    };
    render() {
        const { navigate } = this.props.navigation;
        return <View>
            <Text>Hello, Chat App!</Text>
            <Button
                onPress={() => navigate('Chat', { user: 'Lucy' })}
                title="Chat with Lucy"
            />
        </View>;
    }
}



class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

export default SimpleApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});