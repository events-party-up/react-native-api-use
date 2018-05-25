import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

const options = [
  { label: '01:00', value: '1' },
  { label: '01:30', value: '1.5' },
  { label: '02:00', value: '2' }
];

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        
        <SwitchSelector options={options} initial={0} onPress={value => console.log(`Call onPress with value: ${value}`)} />
      </View>
    );
  }
}