import React from "react"
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import AnExBobble from './AnExBobble'
import AnExChained from './AnExChained'
import AnExScroll from './AnExScroll'
import AnExTilt from './AnExTilt'

class AnExSet extends React.Component {
  constructor(props) {
    super(props);
    function randColor() {
      const colors = [0,1,2].map(() => Math.floor(Math.random() * 150 + 100));
      return 'rgb(' + colors.join(',') + ')';
    }
    console.log('randColor()构造函数 组件 this.state, this.props ：', this.state, this.props, )
    this.state = {
      closeColor: randColor(),
      openColor: randColor(),
    };
  }
  render() {
    const backgroundColor = this.props.openVal ?
      this.props.openVal.interpolate({
        inputRange: [0, 1],
        outputRange: [
          this.state.closeColor,  // interpolates color strings
          this.state.openColor
        ],
      }) :
      this.state.closeColor;
    const panelWidth = this.props.containerLayout && this.props.containerLayout.width || 320;
    console.log('AnExSet 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.header, { backgroundColor }]}
          {...this.state.dismissResponder.panHandlers}>
          <Text style={[styles.text, styles.headerText]}>
            {this.props.id}
          </Text>
        </Animated.View>
        {this.props.isActive &&
          <View style={styles.stream}>
            <View style={styles.card}>
              <Text style={styles.text}>
                July 2nd
              </Text>
              <AnExTilt isActive={this.props.isActive} />
              <AnExBobble />
            </View>
            <AnExScroll panelWidth={panelWidth}/>
            <AnExChained />
          </View>
        }
      </View>
    );
  }

  componentWillMount() {
    console.log(' componentDidMount组件即将挂载 ：', this.state, this.props,  )
    this.state.dismissY = new Animated.Value(0);
    this.state.dismissResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => this.props.isActive,
      onPanResponderGrant: () => {
        Animated.spring(this.props.openVal, {          // Animated value passed in.
          toValue: this.state.dismissY.interpolate({   // Track dismiss gesture
            inputRange: [0, 300],                      // and interpolate pixel distance
            outputRange: [1, 0],                       // to a fraction.
          }),
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: Animated.event(
        [null, {dy: this.state.dismissY}],             // track pan gesture
        {useNativeDriver: true}
      ),
      onPanResponderRelease: (e, gestureState) => {
        console.log('onPanResponderRelease ：', e, gestureState, )
        if (gestureState.dy > 100) {
          this.props.onDismiss(gestureState.vy);  // delegates dismiss action to parent
        } else {
          Animated.spring(this.props.openVal, {
            toValue: 1,                           // animate back open if released early
            useNativeDriver: true,
          }).start();
        }
      },
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 18,
    height: 90,
  },
  stream: {
    flex: 1,
    backgroundColor: 'rgb(230, 230, 230)',
  },
  card: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'white',
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {height: 0.5},
  },
  text: {
    padding: 4,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 25,
    color: 'white',
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {height: 1},
  },
});
