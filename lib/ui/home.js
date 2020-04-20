import React from 'react'
import {
  Text,
  View,
  Button,
  Image,
  Alert,
  AsyncStorage,
  StyleSheet,
  Dimensions
} from 'react-native';

import ViewPager from '../ui/component/viewpage.ios'
import HomeItemComponent from '../ui/component/HomeItemComponent'
import Icon from 'react-native-vector-icons/FontAwesome';
const screenW = Dimensions.get('window').width * 0.9

const imageUrls = ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=760528960,2729756840&fm=26&gp=0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558514797592&di=b7404ddc598d9e395f33f36ef883ebf4&imgtype=0&src=http%3A%2F%2Fc4.haibao.cn%2Fimg%2F600_0_100_0%2F1530690356.3493%2F81eaeb56a5255d33fdb280712f3b252d.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558514797592&di=4fc04bc668b9a3ec1e1e75208aeb4b43&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F4b90f603738da977a600eedebb51f8198618e31c.jpg'];

const imageUrl = imageUrls[0];
const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" >
    Login with Facebook
  </Icon.Button>
);
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this._pushDetail = this._pushDetail.bind(this)
    this.state = {
      backName: 'go to detail'
    }
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: '首页',//这个属性可以支持自定义组件
      headerRight: (
        <Button onPress={navigation.getParam('inCreaseCount')}
          title='info'
          color='#ffffff' />
      ),
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ inCreaseCount: this._inCreaseCount })
  }
  state = {
    count: 0,
  }
  _inCreaseCount = () => {
    this.setState({ count: this.state.count + 1 })
    Alert.alert(this.state.count)
  }

  //登出操作
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth')
  }

  //进入详情页,传递参数
  _pushDetail(itemId) {
    this.props.navigation.navigate('Detail', {
      itemId: itemId,
      otherParas: 'add other params you want',
      callback: (data) => {
        this.setState({
          backName: data
        })
      }
    })
  }

  render() {
    console.log('this is home page')
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ height: 250, alignItems: 'center' }}>
          <ViewPager imageUrls={imageUrls} />
          <HomeItemComponent _pushDetail={this._pushDetail.bind(this)} />
        </View>
        <Button onPress={this._pushDetail}
          title={this.state.backName} />
        <Button onPress={this._signOutAsync}
          title='退出登录' />
        <View style={[styles.test1, styles.test2]}></View>
        {/* <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Login with Facebook</Text>
        </Icon.Button> */}
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        <View style={styles.item}>
          <View style={styles.itemline1}>
            <Text style={{ flex: 1, color: '#ffffff' }}>石斑鱼塘</Text>
            <View
              style={{
                height: 20,
                width: 20,
                marginLeft: 20,
                marginRight: 10,
                backgroundColor: '#F54252',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,//圆角属性；
              }}>
              <Text style={{ color: '#ffffff', fontSize: 16 }}>1</Text>
            </View>
          </View>
          <View style={styles.itemline1}>
            <Text style={{ color: '#ffffff' }}>3个设备</Text>
            <Text style={{ width: 2, backgroundColor: 'white', marginLeft: 10 }} />
            <Text style={{ color: '#ffffff', marginLeft: 10 }}>3个设备</Text>
          </View>
          <View style={styles.itemline2} >
            <Text style={{ color: '#333333', marginLeft: 10 }}>3个设备</Text>
            <Text style={{ width: 2, backgroundColor: '#333333', marginLeft: 10 }} />
            <Text style={{ color: '#333333', marginLeft: 10 }}>3个设备</Text>
            <Button style={{ color: '#333333', marginLeft: 10 }} title="ggg" onPress={
              () => {
                console.log('request url:', "8888");  //打印请求参数
              }
            }></Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test1: {
    width: 100,
    height: 30,
  },
  test2: {
    backgroundColor: 'red'
  },
  item: {
    width: screenW,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    flexDirection: "column",
    backgroundColor: "gray",
    borderRadius: 5,
    borderColor: "#333333",
    borderWidth: 0.5
  },
  itemline1: {
    width: screenW,
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    marginRight: 10,
    flexDirection: "row",
    paddingRight: 10
  },
  itemline2: {
    flex: 1,
    width: screenW - 2,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    flexDirection: "row",
    paddingRight: 10
  },
})

export default HomeScreen;