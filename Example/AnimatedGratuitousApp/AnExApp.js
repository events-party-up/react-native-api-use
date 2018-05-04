import React from "react"
import {
  Animated,
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  View,
} from 'react-native'

import AnExSet from './AnExSet'

const CIRCLE_SIZE = 80;
const CIRCLE_MARGIN = 18;
const NUM_CIRCLES = 30;

class Circle extends React.Component {
  constructor(props) {
    super();
    this._onLongPress = this._onLongPress.bind(this);
    this._toggleIsActive = this._toggleIsActive.bind(this);
    this.state = {
      isActive: false,
      pan: new Animated.ValueXY(), // Vectors reduce boilerplate.  (step1: uncomment)
      pop: new Animated.Value(0),  // Initial value.               (step2a: uncomment)
    };
  }

  _onLongPress() {
    const config = {tension: 40, friction: 3};
    this.state.pan.addListener((value) => {  // Async listener for state changes  (step1: uncomment)
      this.props.onMove && this.props.onMove(value);
    });
    Animated.spring(this.state.pop, {
      toValue: 1,                  //  Pop to larger size.                      (step2b: uncomment)
      ...config,                   //  Reuse config for convenient consistency  (step2b: uncomment)
    }).start();

    console.log('_onLongPress this.state, this.props ：', this.state, this.props, )
    
    this.setState({panResponder: PanResponder.create({
      onPanResponderMove: Animated.event([
        null,                                         // native event - ignore      (step1: uncomment)
        {dx: this.state.pan.x, dy: this.state.pan.y}, // links pan to gestureState  (step1: uncomment)
      ]),
      onPanResponderRelease: (e, gestureState) => {
        LayoutAnimation.easeInEaseOut();  // @flowfixme animates layout update as one batch (step3: uncomment)
        Animated.spring(this.state.pop, {
          toValue: 0,                     // Pop back to 0                       (step2c: uncomment)
          ...config,
        }).start();
        this.setState({panResponder: undefined});
        this.props.onMove && this.props.onMove({
          x: gestureState.dx + this.props.restLayout.x,
          y: gestureState.dy + this.props.restLayout.y,
        });
        this.props.onDeactivate();
        this.state.pan.removeAllListeners();
      },
    })}, () => {
      this.props.onActivate();
    });
  }

  render() {
    if (this.state.panResponder) {
      const handlers = this.state.panResponder.panHandlers;
      const dragStyle = {                 //  Used to position while dragging
        position: 'absolute',           //  Hoist out of layout                    (step1: uncomment)
        ...this.state.pan.getLayout(),  //  Convenience converter                  (step1: uncomment)
      };
    } else {
      handlers = {
        onStartShouldSetResponder: () => !this.state.isActive,
        onResponderGrant: () => {
          this.state.pan.setValue({x: 0, y: 0});           // reset                (step1: uncomment)
          this.state.pan.setOffset(this.props.restLayout); // offset from onLayout (step1: uncomment)
          this.longTimer = setTimeout(this._onLongPress, 300);
        },
        onResponderRelease: () => {
          if (!this.state.panResponder) {
            clearTimeout(this.longTimer);
            this._toggleIsActive();
          }
        }
      };
    }
    const animatedStyle = {
      shadowOpacity: this.state.pop,    // no need for interpolation            (step2d: uncomment)
      transform: [
        {scale: this.state.pop.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.3]         // scale up from 1 to 1.3               (step2d: uncomment)
        })},
      ],
    };
    const openVal = this.props.openVal;
    if (this.props.dummy) {
      animatedStyle.opacity = 0;
    } else if (this.state.isActive) {
      const innerOpenStyle = [styles.open, {                                 // (step4: uncomment)
        left: openVal.interpolate({inputRange: [0, 1], outputRange: [this.props.restLayout.x, 0]}),
        top: openVal.interpolate({inputRange: [0, 1], outputRange: [this.props.restLayout.y, 0]}),
        width: openVal.interpolate({inputRange: [0, 1], outputRange: [CIRCLE_SIZE, this.props.containerLayout.width]}),
        height: openVal.interpolate({inputRange: [0, 1], outputRange: [CIRCLE_SIZE, this.props.containerLayout.height]}),
        margin: openVal.interpolate({inputRange: [0, 1], outputRange: [CIRCLE_MARGIN, 0]}),
        borderRadius: openVal.interpolate({inputRange: [-0.15, 0, 0.5, 1], outputRange: [0, CIRCLE_SIZE / 2, CIRCLE_SIZE * 1.3, 0]}),
      }];
    }

    console.log('Circle 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <Animated.View
        onLayout={this.props.onLayout}
        style={[styles.dragView, dragStyle, animatedStyle, this.state.isActive ? styles.open : null]}
        {...handlers}>
        <Animated.View style={[styles.circle, innerOpenStyle]}>
          <AnExSet
            containerLayout={this.props.containerLayout}
            id={this.props.id}
            isActive={this.state.isActive}
            openVal={this.props.openVal}
            onDismiss={this._toggleIsActive}
          />
        </Animated.View>
      </Animated.View>
    );
  }
  _toggleIsActive(velocity) {
    console.log('_toggleIsActive ：', velocity)
    const config = {tension: 30, friction: 7};
    if (this.state.isActive) {
      Animated.spring(this.props.openVal, {toValue: 0, ...config}).start(() => { // (step4: uncomment)
        this.setState({isActive: false}, this.props.onDeactivate);
      });                                                                        // (step4: uncomment)
    } else {
      this.props.onActivate();
      this.setState({isActive: true, panResponder: undefined}, () => {
        // this.props.openVal.setValue(1);                                             // (step4: comment)
        Animated.spring(this.props.openVal, {toValue: 1, ...config}).start();    // (step4: uncomment)
      });
    }
  }
}

export default class AnExApp extends React.Component {
  constructor(props) {
    super(props);
    const keys = [];
    for (const idx = 0; idx < NUM_CIRCLES; idx++) {
      keys.push('E' + idx);
    }
    console.log('keys ：', keys);
    this.state = {
      keys,
      restLayouts: [],
      openVal: new Animated.Value(0),
    };
    this._onMove = this._onMove.bind(this);
  }

  render() {
    const circles = this.state.keys.map((key, idx) => {
      if (key === this.state.activeKey) {
        return <Circle key={key + 'd'} dummy={true} />;
      } else {
        if (!this.state.restLayouts[idx]) {
          const onLayout = function(index, e) {
            const layout = e.nativeEvent.layout;
            this.setState((state) => {
              state.restLayouts[index] = layout;
              return state;
            });
          }.bind(this, idx);
        }
        return (
          <Circle
            key={key}
            id={key}
            openVal={this.state.openVal}
            onLayout={onLayout}
            restLayout={this.state.restLayouts[idx]}
            onActivate={this.setState.bind(this, {
              activeKey: key,
              activeInitialLayout: this.state.restLayouts[idx],
            })}
          />
        );
      }
    });
    if (this.state.activeKey) {
      circles.push(
        <Animated.View key="dark" style={[styles.darkening, {opacity: this.state.openVal}]} />
      );
      circles.push(
        <Circle
          openVal={this.state.openVal}
          key={this.state.activeKey}
          id={this.state.activeKey}
          restLayout={this.state.activeInitialLayout}
          containerLayout={this.state.layout}
          onMove={this._onMove}
          onDeactivate={() => { this.setState({activeKey: undefined}); }}
        />
      );
    }
    console.log('AnExApp 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <View style={styles.grid} onLayout={(e) => this.setState({layout: e.nativeEvent.layout})}>
          {circles}
        </View>
      </View>
    );
  }

  _onMove(position) {
    console.log('_onMove ：', position)
    const newKeys = moveToClosest(this.state, position);
    if (newKeys !== this.state.keys) {
      LayoutAnimation.easeInEaseOut();  // animates layout update as one batch (step3: uncomment)
      this.setState({keys: newKeys});
    }
  }
}

function distance(p1, p2) {
  console.log('distance ：', p1, p2)
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return dx * dx + dy * dy;
}

function moveToClosest({activeKey, keys, restLayouts}, position) {
  const activeIdx = -1;
  const closestIdx = activeIdx;
  const minDist = Infinity;
  const newKeys = [];
  console.log('moveToClosest ：', activeKey, keys, restLayouts, position, )
  keys.forEach((key, idx) => {
    const dist = distance(position, restLayouts[idx]);
    if (key === activeKey) {
      idx = activeIdx;
    } else {
      newKeys.push(key);
    }
    if (dist < minDist) {
      minDist = dist;
      closestIdx = idx;
    }
  });
  if (closestIdx === activeIdx) {
    return keys; // nothing changed
  } else {
    newKeys.splice(closestIdx, 0, activeKey);
    return newKeys;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 1,
    borderColor: 'black',
    margin: CIRCLE_MARGIN,
    overflow: 'hidden',
  },
  dragView: {
    shadowRadius: 10,
    shadowColor: 'rgba(0,0,0,0.7)',
    shadowOffset: {height: 8},
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
  },
  open: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: undefined, // unset value from styles.circle
    height: undefined, // unset value from styles.circle
    borderRadius: 0, // unset value from styles.circle
  },
  darkening: {
    backgroundColor: 'black',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});