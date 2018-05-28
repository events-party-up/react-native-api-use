import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Expand from 'react-native-simple-expand'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TouchableOpacity onPress={() => this.setState({ open: !this.state.open })}>
        <Text>Toggle Menu</Text>
        </TouchableOpacity>
        <Expand value={this.state.open}>
            <Text>
            Some very very very very very very very very very very very very very very very very very very very very great content
            </Text>
        </Expand>
      </View>
    );
  }
}