import React, { Component } from 'react';
import { Text ,View} from 'react-native';
import PropTypes from 'prop-types'

export default class PropsText extends Component {
    static defaultProps = {
        name: '张三',
        sex: 'man',
        tel: '13866666666'
    }

       //类型检测方法一
    /*static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,
    }*/
    render() {
        //在这里我们使用props中的name属性
        return (
            <View >
                <Text>姓名：{this.props.name} 年龄:{this.props.age}  性别:{this.props.sex} 电话:{this.props.tel}</Text>
            </View>
        );
    }
}

//设置默认属性方法二
/*PropsTest.defaultProps={
    name:"小红",
    age:20,
    sex:"男"
}*/

//类型检测方法二
// PropsTest.propTypes={
//     name:PropTypes.string,
//     age:PropTypes.number,
//     tel:PropTypes.string.isRequired,
// }