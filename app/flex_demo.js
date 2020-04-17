import React, { Component } from "react";
import {
    View, StyleSheet, TextInput, Text,
} from "react-native";


export default class FlexDemo extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                {/* 父视图属性(容器属性)：
                    flexDirection enum('row', 'column','row-reverse','column-reverse')
                    flexWrap enum('wrap', 'nowrap')
                    justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
                    alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
                    */}
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

                {/*flexWrap enum('wrap', 'nowrap')*/}
                {/*wrap flex的元素在一行排列不下时，就进行多行排列*/}
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 200, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 200, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 40, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>

                {/*justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')*/}
                {/*justifyContent属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-start。*/}
                {/* flex-end 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
                    center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
                    space-between 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
                    space-around 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
                    */}
                <View style={{ justifyContent: 'center', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
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
                {/*alignItems enum('flex-start', 'flex-end', 'center', 'stretch')*/}
                {/*flex-start 元素向侧轴起点对齐。
                    flex-end 元素向侧轴终点对齐。
                    center 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
                    stretch 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。*/}
                <View style={{ justifyContent: 'center', flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20 }}>
                    <View style={{ width: 40, height: 20, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>1</Text>
                    </View>
                    <View style={{ width: 40, height: 20, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>2</Text>
                    </View>
                    <View style={{ width: 40, height: 20, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>3</Text>
                    </View>
                    <View style={{ width: 40, height: 20, backgroundColor: "darkcyan", margin: 5 }}>
                        <Text style={{ fontSize: 16 }}>4</Text>
                    </View>
                </View>
                {/* alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch') */}
                {/* alignSelf属性以属性定义了flex容器内被选中项目的对齐方式。注意：alignSelf 属性可重写灵活容器的 alignItems 属性。
                    auto(default) 元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。
                    stretch 元素被拉伸以适应容器。
                    center 元素位于容器的中心。
                    flex-start 元素位于容器的开头。
                    flex-end 元素位于容器的结尾。 */}
                <View style={{ alignSelf: 'baseline', width: 60, height: 20, backgroundColor: "darkcyan", margin: 5 }}>
                    <Text style={{ fontSize: 16, alignSelf: 'center', marginTop: 20 }}>1</Text>
                </View>
                {/* FlexShrink
                    flex-shrink属性定义了项目的缩小比例，默认为0，即空间不足的情况下，如果item按从左到右排序的话，最后一个item缩小。

                    如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。

                    如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
                    */}
                <View style={{
                    height: 50,
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderWidth: 2,
                    borderColor: "#ff0000"
                }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            flexShrink: 1,  // 空间不足时，先被压缩
                            backgroundColor: '#ff8500'
                        }}>标题</Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            marginLeft: 10,
                            backgroundColor: '#00ff00'
                        }}>标签</Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            flexGrow: 1,       //占据额外空间
                            marginLeft: 10,
                            textAlign: 'right',  //居右
                        }}>距离</Text>
                </View>

                {/* FlexGrow
                    flexGrow属性定义项目的放大比例。

                    默认为0，即如果存在剩余空间，也不放大。它和Android中的weight很像。

                    如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。

                    如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
                    */}


                {/* 其他布局 in React Native
                    以下属性是React Native所支持的除Flex以外的其它布局属性。

                    视图边框
                    borderBottomWidth number 底部边框宽度
                    borderLeftWidth number 左边框宽度
                    borderRightWidth number 右边框宽度
                    borderTopWidth number 顶部边框宽度
                    borderWidth number 边框宽度
                    border<Bottom|Left|Right|Top>Color 个方向边框的颜色
                    borderColor 边框颜色

                    尺寸
                    width number
                    height number

                    外边距
                    margin number 外边距
                    marginBottom number 下外边距
                    marginHorizontal number 左右外边距
                    marginLeft number 左外边距
                    marginRight number 右外边距
                    marginTop number 上外边距
                    marginVertical number 上下外边距

                    内边距
                    padding number 内边距
                    paddingBottom number 下内边距
                    paddingHorizontal number 左右内边距
                    paddingLeft number 做内边距
                    paddingRight number 右内边距
                    paddingTop number 上内边距
                    paddingVertical number 上下内边距
                    边缘
                    left number 属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。
                    right number 属性规定元素的右边缘。该属性定义了定位元素右外边距边界与其包含块右边界之间的偏移
                    top number 属性规定元素的顶部边缘。该属性定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。
                    bottom number 属性规定元素的底部边缘。该属性定义了一个定位元素的下外边距边界与其包含块下边界之间的偏移。
                    定位(position)
                    position enum('absolute', 'relative')属性设置元素的定位方式，为将要定位的元素定义定位规则。

                    absolute：生成绝对定位的元素，元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
                    relative：生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
                    */}
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