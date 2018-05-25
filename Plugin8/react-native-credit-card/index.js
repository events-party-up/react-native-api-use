import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import CreditCard from 'react-native-credit-card'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CreditCard 
          type={this.state.type}
          imageFront={require('./images/card-front.png')}
          imageBack={require('./images/card-back.png')}
          shiny={false}
          bar={false}
          focused={this.state.focused}
          number={this.state.number}
          name={this.state.name}
          expiry={this.state.expiry}
          cvc={this.state.cvc}/>
      </View>
    );
  }
}