import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import {
  drag,
  pinch,
  GestureView
} from 'react-native-gestures';

export default class Demo extends Component {
  onGestureError(err) {
    console.error(err);
  }
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <GestureView
          style={movable}
          gestures={[drag, pinch]}
          toStyle={(layout) => {
            return {
              top: layout.y,
              left: layout.x,
              width: layout.width,
              height: layout.height,
              transform: [{rotate: `${layout.rotate}deg`}]
            }
          }}
          onError={console.error.bind(console)}>
          <Text>HEHE</Text>
          <Text>HEHE</Text>
        </GestureView>
      </View>
    );
  }
}