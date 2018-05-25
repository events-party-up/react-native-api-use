import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import SwipeActions from 'swipe-actions'

const mainComponent = (<View>
  <Text>
    Child Component
  </Text>
</View>);

// components shown on swipe
const node = pos => (
  <View>
    <Text>
      {`${pos} Action`}
    </Text>
  </View>);

// callbacks fired on release
const action = pos => () => Alert.alert(`${pos} Action Fired!`);

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Playground 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <SwipeActions
          upperAction={action('Upper')}
          lowerAction={action('Lower')}
          upperNode={node('Upper')}
          lowerNode={node('Lower')}>
          {mainComponent}
        </SwipeActions>
      </View>
    )
  }
}
