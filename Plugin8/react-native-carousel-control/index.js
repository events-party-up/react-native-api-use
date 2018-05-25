import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Carousel from "react-native-carousel-control";

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Carousel>
            <Text>Hello</Text>
            <Text>World!</Text>
            <Text>From carousel</Text>
        </Carousel>
      </View>
    );
  }
}