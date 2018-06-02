import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import {height} from '../Config'

export default class LinkAge extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    console.log('LinkAge 组件 this.state, this.props ：', this.state, this.props, )
    const {
      // 事件
      onPress, 

      // 属性
      data,
      isScroll,
      scrollItem,

      // 样式
      scrollWrapper, 
      leftStyle,
      rightStyle,

      // 组件
    } = this.props

    return (
      <View style={[styles.scrollWrapper, scrollWrapper]}>
        <View style={[styles.leftStyle, leftStyle]}>
          {scrollLeft}
        </View>
        <View style={[styles.rightStyle, rightStyle]}>
          {scrollRight}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
  },
  leftStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightStyle: {
    width: 30,
    height: height - 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
})