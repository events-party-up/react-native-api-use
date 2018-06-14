import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import AnimatedList from 'react-native-animated-list';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <AnimatedList
            animation="scale"
            items={Data}
            duration={300}
            renderRow={this._renderRow}  
            onRemove={(item) => this._removeItem(item)}
        />
      </View>
    );
  }
}