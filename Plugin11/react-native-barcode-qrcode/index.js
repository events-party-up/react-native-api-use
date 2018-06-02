import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import {BarCode,QRCode} from 'react-native-barcode-qrcode'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <BarCode value={this.props.payCode}
          width="225"
          height="90"
          bgColor="#e7e7eb"
        />
        <QRCode value={this.props.payCode}
          bgColor="#fff"
          fgColor="#333"/>
      </View>
    );
  }
}