import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <CircularSlider
          startAngle={this.state.startAngle}
          angleLength={this.state.angleLength}
          onUpdate={({ startAngle, angleLength }) => this.setState({ startAngle, angleLength })}
          segments={5}
          strokeWidth={40}
          radius={145}
          gradientColorFrom="#ff9800"
          gradientColorTo="#ffcf00"
          showClockFace
          clockFaceColor="#9d9d9d"
          bgCircleColor="#171717"
          // stopIcon={<G><Path .../></G>}
          // startIcon={<G><Path .../></G>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});