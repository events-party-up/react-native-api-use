import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Button from 'react-native-simple-button';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        {/*登录按钮*/}
        <Button onPress={this.doLogin} style={{position: 'absolute', top: 320, left: 180, }} disable={true}>登录</Button>
        {/*忘记密码按钮*/}
        <Button onPress={this.doShowForgetPassword} style={{position: 'absolute', right: 5, bottom: 5, }} textStyle={{color:'red'}}>找回密码</Button>
        {/*注册按钮*/}
        <Button onPress={this.doShowRegister} style={{position: 'absolute', left: 5, bottom: 5, }}>注册</Button>
      </View>
    );
  }
}