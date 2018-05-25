
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import { ColorWheel } from './ColorWheel';

export default class Example extends Component {
  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{flex: 1}}>
        <ColorWheel
          initialColor="#ee0000"
          onColorChange={color => console.log({color})}
          style={{width: Dimensions.get('window').width}}
          thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
        <ColorWheel
          initialColor="#00ee00"
          style={{ marginLeft: 20, padding: 40, height: 200, width: 200 }} />
      </View>
    )
  }
}