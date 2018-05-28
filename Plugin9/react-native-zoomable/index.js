import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Zoomable from 'react-native-zoomable'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Zoomable
          zoomScale={3}
          onScrollOrZoom={(e) => alert('did that thing!')}
          tapToZoomOut="double"
        >
          <Image source={{ uri }} style={{ width: 50, height: 50 }} />
        </Zoomable>
      </View>
    );
  }
}