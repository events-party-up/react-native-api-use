import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import CardView from 'react-native-cardview'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
          <Text>
              Elevation 0
          </Text>
        </CardView>
      </View>
    );
  }
}