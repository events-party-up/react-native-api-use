import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import Interactable from 'react-native-interactable';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Interactable.View
          horizontalOnly={true}
          snapPoints={[{x: 0}, {x: -200}]}
          onSnap={this.onDrawerSnap}>

          <View style={styles.container}>
            <Text style={styles.text}>111111111</Text>
          </View>
        </Interactable.View>
      </View>
    );
  }
}