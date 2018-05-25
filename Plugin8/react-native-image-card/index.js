import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import CardPic from 'react-native-image-card';
import {Easing} from 'react-native';

const path = 'https://user-images.githubusercontent.com/14739234/';
const pic4 = [
  `${path}32308676-1cc7c1c0-bf55-11e7-9d81-562eeec45ad4.jpeg`,
  `${path}32309008-bd7baeb4-bf56-11e7-8a87-15217db54f8b.jpeg`,
  `${path}32308770-93f321c2-bf55-11e7-859f-fd4e9cc372ed.jpeg`,
  `${path}32308812-c3e69292-bf55-11e7-90d3-dcd143fbcb76.jpeg`,
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <CardPic
            style={{height:200}}     // 容器样式
            source={pic4}            // 图片URL数组
            mode="multi"             // 图片展示模式
            maskOpacity={1}          // 预览图背景透明度0-1
            easingFunc={Easing.ease} // 动画函数
            rebounceDuration={500}   // 反弹时间
            showDuration={100}       // 打开时间
            closeDuration={150}      // 关闭时间
            enableScaling={false}    // 预览图上下滑动时图片是否会缩放
            disabled={false}         // 是否禁止图片预览
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
