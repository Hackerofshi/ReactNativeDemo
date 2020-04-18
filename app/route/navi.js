import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

import SectionListDemo from '../list/section_list'

class NAV1 extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `练习`,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>this is nav1</Text>
                <Button
                    style={styles.btn}
                    title={'点击前往nav2'}
                    onPress={() => {
                        this.props.navigation.push('nav2')//push方法 跳转到
                    }}
                />
                <Button
                    style={{ marginTop: 10,paddingBottom:10 }}
                    title={'点击前往nav3'}
                    onPress={() => {
                        this.props.navigation.push('nav3')//push方法 跳转到
                    }}
                />
                <Button
                    style={{ marginTop: 10 }}
                    title={'点击前往SectionListDemo'}
                    onPress={() => {
                        this.props.navigation.push('nav4')//push方法 跳转到
                    }}
                />
            </View>
        )
    }
}

class NAV2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>this is nav2</Text>
                <Button
                    style={styles.btn}
                    title={'点击前往nav3'}
                    onPress={() => {
                        this.props.navigation.push('nav3')
                    }}
                />
            </View>
        )
    }
}

class NAV3 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>this is nav3</Text>
                <Button
                    style={styles.btn}
                    title={'返回上一层'}
                    onPress={() => {
                        this.props.navigation.goBack();//goBack  返回到上一层
                    }}
                />
                <Button
                    style={styles.btn}
                    title={'返回到nav1'}
                    onPress={() => {
                        this.props.navigation.navigate('nav1');
                        //直接设置navigate  这个属性如果nav1不在堆栈中，则将新路由推送到堆栈导航器，否则它将跳转到该屏幕。
                    }}
                />
                <Button
                    style={styles.btn}
                    title={'返回到nav1 及返回第一层'}
                    onPress={() => {
                        this.props.navigation.popToTop();//因为nav1也是一底层  所以也可以用popToTop() 这种方式返回
                    }}
                />
            </View>
        )
    }
}

export default SimpleAppNavigator = createStackNavigator(
    {
        //设置需要进行push的所有组件
        nav1: {
            screen: NAV1
        },
        nav2: {
            screen: NAV2

        },
        nav3: {
            screen: NAV3
        },
        nav4: {
            screen: SectionListDemo
        }
    }, {
    initialRouteName: 'nav1',//这个设置是初始化设置 初始化显示modul为nav1  可以尝试改变这个值为nav2

}
)

// export default class Pages extends Component{

//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <SimpleAppNavigator/>
//         )
//     }
// }


const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        padding: 10,
        backgroundColor: 'pink',
        fontSize: 25,
        marginBottom: 10
    },
    btn: {
        marginTop: 10,
        paddingBottom: 10,
        marginBottom: 10,

    }
})