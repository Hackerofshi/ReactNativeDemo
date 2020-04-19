import React, { Component } from 'react';
import PropsText from './props_demo';
import { View,StyleSheet,Text } from 'react-native';
import '../net/NetUtils'
export default class ParentPage extends Component {

    
    componentWillMount() {
        
    }
    

    render() {
        var params = {name: '李四', age:'30', sex: 'man'};

        return (
            <View style={styles.container}>
                <Text>;;</Text>
                <PropsText name="ff"/>
                <PropsText name='张三' age='20'/>

                <PropsText {...params}/>
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