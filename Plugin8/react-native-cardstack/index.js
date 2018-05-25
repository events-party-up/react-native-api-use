import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { CardStack, Card } from 'react-cardstack';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CardStack
          height={500}
          width={400}
          backgroundColor='#f8f8f8'
          hoverOffset={25}>

          <Card backgroundColor='#2980B9'>
            <NumberOne />
          </Card>

          <Card backgroundColor='#27AE60'>
            <NumberTwo />
          </Card>

        </CardStack>
      </View>
    );
  }
}