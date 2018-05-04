import React, { Component } from 'react';
import { View, Image, Text, findNodeHandle, StyleSheet,  } from 'react-native';
import ViewPager from 'react-native-viewpager';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  imageLoaded() {
    console.log('imageLoaded ：', )
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    console.log('Menu 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ViewPager
            dataSource={this.state.dataSource}
            renderPage={this._renderPage}
            animation = {(animatedValue, toValue, gestureState) => {
            // Use the horizontal velocity of the swipe gesture
            // to affect the length of the transition so the faster you swipe
            // the faster the pages will transition
            var velocity = Math.abs(gestureState.vx);
            var baseDuration = 300;
            var duration = (velocity > 1) ? 1/velocity * baseDuration : baseDuration;

            return Animated.timing(animatedValue,
            {
              toValue: toValue,
              duration: duration,
              easing: Easing.out(Easing.exp)
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});