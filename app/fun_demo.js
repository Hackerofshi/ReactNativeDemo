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