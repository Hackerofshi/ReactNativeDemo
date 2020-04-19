import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import '../net/NetUtils'

export default class NetTestPage extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>test</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})