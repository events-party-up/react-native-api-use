import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import HealthCard from 'react-native-health-card'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <HealthCard
          showSwipeBar
          focus="memberNumber"
          memberNumber="123456789"
          memberNumberLength={10}
          issueDate="01/01/2015"
          rank="01"
          issueNumber="02"
          showRank={false}
          type="medibank"
        />
      </View>
    );
  }
}