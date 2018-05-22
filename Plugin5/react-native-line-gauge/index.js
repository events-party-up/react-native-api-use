import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import LineGauge from 'react-native-line-gauge';

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
                <LineGauge min={0} max={100} value={42} onChange={this._handleGaugeChange} />
            </View>
        );
    }
  }