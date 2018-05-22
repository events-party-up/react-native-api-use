import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

import MultiSlider from 'react-native-multi-slider'


export default class SliderExample extends React.Component {
  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

  render() {
    console.log('SliderExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView scrollEnabled={this.state.scrollEnabled}>
        <MultiSlider
          onValuesChangeStart={this.disableScroll}
          onValuesChangeFinish={this.enableScroll}
        />
      <ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
