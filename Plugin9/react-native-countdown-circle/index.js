import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import CountdownCircle from 'react-native-countdown-circle'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CountdownCircle
            seconds={10}
            radius={30}
            borderWidth={8}
            color="#ff003f"
            bgColor="#fff"
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => console.log('Elapsed!')}
        />
      </View>
    );
  }
}