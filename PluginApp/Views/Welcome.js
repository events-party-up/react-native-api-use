import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {RootDrawer} from '../index';

export default class WelcomePage extends Component {
  componentDidMount() {
    console.log('WelcomePage  componentDidMount ：', this.props )
    this.props.navigator.resetTo({
      component: RootDrawer
    })
    // this.timer = setTimeout(() => {
    //   console.log('WelcomePage  setTimeout ：',  )
    //   // 让该页成为路由的主页
    //   this.props.navigator.resetTo({
    //     component: RootDrawer
    //   })
    // }, 200)
  }
  componentWillUnmount() {
    console.log('WelcomePage  componentWillUnmount ：',  )
    // 清空定时器，防止定时器还未结束组件卸载报错
    this.timer && clearTimeout(this.timer)
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.tips}>
          欢迎
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'gray'
  },
});