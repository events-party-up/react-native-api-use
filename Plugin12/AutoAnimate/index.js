import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import AutoAnimate from 'react-native-auto-animate';

const AnimatedBall = ({ isToggled, toggleBall }) => (
  <AutoAnimate
    spring
    value={isToggled ? 1 : 0}
    tension={isToggled ? 100 : 5}
    friction={isToggled ? 5 : 1}>
    {animation => (
      <TouchableWithoutFeedback onPress={toggleBall}>
        <Animated.View style={[styles.ball, ballAnimationStyle(animation)]}>
          <Text>Ball</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    )}
  </AutoAnimate>
);

const ballAnimationStyle = animation => {
  return {
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    }),
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 100],
        }),
      },
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(0, 100, 100, 1)', 'rgba(0, 255, 0, 1)'],
    }),
  };
};

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <AutoAnimate
          value={visible ? 1 : 0}
          duration={200}
        >
          {opacityAnimation => (
            <Animated.View style={{opacity: opacityAnimation}}>
              <Text>SomeText</Text>
            </Animated.View>
          )}
        </AutoAnimate>

        <AnimatedBall></AnimatedBall>
        
        <ballAnimationStyle></ballAnimationStyle>
      </View>
    );
  }
}