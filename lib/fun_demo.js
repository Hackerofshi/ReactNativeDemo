import React, { Component } from "react";
import {
    View, StyleSheet, TextInput, Text,
} from "react-native";


export default class LearnRN extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPw: '',
        };
    }

    updateNum(newText) {
        this.setState((state) => {
            return {
                inputedNum: newText,
            }
        });
    }

    updatePW(newText) {
        this.setState(() => {
            return {
                inputedPw: newText
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                    placeholder={'请输入手机号'}
                    onChangeText={(newText) => this.updateNum(newText)}
                />
                <Text style={styles.textPromptStyle} >
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle}
                    placeholder={'请输入密码'}
                    onChangeText={this.updatePW}
                ></TextInput>
                <Text style={styles.bigTextPrompt}>
                    确定
                </Text>
                <View style={{ width: 100, height: 15, marginTop: 30, backgroundColor: 'gray' }}>
                    <Text style={{ fontSize: 16 }}>尺寸</Text>
                </View>
                {/*横轴和竖轴*/}
                {/*flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';*/}
                <View style={{ flexDirection: 'row', height: 40, borderBottomWidth: 1, borderColor: 'yellow' }}>
                    <View style={{ flex: 1, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>flex:1</Text>
                    </View>
                    <View style={{ flex: 2, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>flex:2</Text>
                    </View>
                    <View style={{ flex: 3, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>flex:3</Text>
                    </View>
                </View>
                {/*row-reverse: 从右向左依次排列*/}
                <View style={{ flexDirection: 'row-reverse', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>

                {/*row-reverse: 从右向左依次排列*/}
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>
            </View>
        );
    }

}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textInputStyle: {
        margin: 10,
        backgroundColor: 'gray',
        fontSize: 20
    },
    textPromptStyle: {
        margin: 10,

        fontSize: 20
    },
    bigTextPrompt: {
        margin: 10,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }

})