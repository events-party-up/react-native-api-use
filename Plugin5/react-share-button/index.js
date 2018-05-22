import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import ShareBtn from 'react-share-button';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ShareBtn
          url={url}
          text={text}
          className='ib'
          displayText='Share'
        />
      </View>
    );
  }
}