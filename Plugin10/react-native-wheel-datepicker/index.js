import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { DatePicker } from 'react-native-wheel-datepicker';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <DatePicker
          mode="date"
          textColor="green"
        />
        {/* // use DatePicker */}
        <DatePicker
          mode="date"
        />

        {/* // use Picker */}
        <Picker
          style={{ flex: 1 }}
          selectedValue={1}
          pickerData={[1, 2, 3, 4, 5, 6]}
          onValueChange={value => this.setState({ value })}
        />
      </View>
    );
  }
}