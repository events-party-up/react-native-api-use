import React, { Component } from 'react';
import { View } from 'react-native';
import CircleSlider from './CircleSlider';

export default class CircleSliderContainer extends Component {
  render() {
    console.log('CircleSliderContainer 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <CircleSlider
          value={90}
        />

      </View>
    )
  }
}