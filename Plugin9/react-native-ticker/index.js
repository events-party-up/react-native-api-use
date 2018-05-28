import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Ticker from "react-native-ticker"

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Ticker text={"1235.44"} textStyle={styles.text} rotateTime={250} />;
        <Ticker textStyle={styles.text} rotateTime={250}>
          12345.44
        </Ticker>
      </View>
    );
  }
}