import React from "react"
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Slider,
} from 'react-native'

const AnimatedSlider = Animated.createAnimatedComponent(Slider);

class Tester extends React.Component {
  state = {
    native: new Animated.Value(0),
    js: new Animated.Value(0),
  };

  current = 0;

  onPress = () => {
    console.log('onPress this.state, this.props ：', this.state, this.props, )
    const animConfig = (
      this.current && this.props.reverseConfig ? this.props.reverseConfig : this.props.config
    );
    this.current = this.current ? 0 : 1;
    const config = {
      ...animConfig,
      toValue: this.current,
    };

    Animated[this.props.type](this.state.native, { ...config, useNativeDriver: true }).start();
    Animated[this.props.type](this.state.js, { ...config, useNativeDriver: false }).start();
  };

  render() {
    console.log('Tester 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View>
          <View>
            <Text>Native:</Text>
          </View>
          <View style={styles.row}>
            {this.props.children(this.state.native)}
          </View>
          <View>
            <Text>JavaScript:</Text>
          </View>
          <View style={styles.row}>
            {this.props.children(this.state.js)}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class ValueListenerExample extends React.Component {
  state = {
    anim: new Animated.Value(0),
    progress: 0,
  };

  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    this.state.anim.addListener((e) => this.setState({ progress: e.value }));
  }

  componentWillUnmount() {
    this.state.anim.removeAllListeners();
  }

  _onPress = () => {
    console.log('_onPress this.state, this.props ：', this.state, this.props, )
    this._current = this._current ? 0 : 1;
    const config = {
      duration: 1000,
      toValue: this._current,
    };

    Animated.timing(this.state.anim, { ...config, useNativeDriver: true }).start();
  };

  render() {
    console.log('ValueListenerExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <View style={styles.row}>
            <Animated.View
              style={[
                styles.block,
                {
                  opacity: this.state.anim,
                }
              ]}
            />
          </View>
          <Text>Value: {this.state.progress}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class InternalSettings extends React.Component {
  render() {
    console.log('InternalSettings 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <View
          initialValue={false}
          label="强迫js停止 Force JS Stalls"
          onEnable={() => {
            this._stallInterval = setInterval(() => {
              const start = Date.now();
              console.warn('burn CPU');
              while ((Date.now() - start) < 100) {}
            }, 300);
          }}
          onDisable={() => {
            clearInterval(this._stallInterval || 0);
          }}
        />
        <View
          initialValue={false}
          label="跟踪js的停止 Track JS Stalls"
          onEnable={() => {
            require('JSEventLoopWatchdog').install({thresholdMS: 25});
            this.setState({busyTime: '<none>'});
            require('JSEventLoopWatchdog').addHandler({
              onStall: ({busyTime}) => this.setState((state) => ({
                busyTime,
                filteredStall: (state.filteredStall || 0) * 0.97 + busyTime * 0.03,
              })),
            });
          }}
          onDisable={() => {
            console.warn('Cannot disable yet....');
          }}
        />
        {this.state && <Text>
          js停止过滤 JS Stall filtered: {Math.round(this.state.filteredStall)}, last: {this.state.busyTime}
        </Text>}
      </View>
    );
  }
}

class EventExample extends React.Component {
  state = {
    scrollX: new Animated.Value(0),
  };

  render() {
    const opacity = this.state.scrollX.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
    });
    console.log('EventExample 组件 this.state, this.props ：', this.state, this.props, opacity)
    return (
      <View>
        <Animated.View
          style={[
            styles.block,
            {
              opacity,
            }
          ]}
        />
        <Animated.ScrollView
          horizontal
          style={{ height: 100, marginTop: 16 }}
          scrollEventThrottle={16}
          onScroll={
            Animated.event([{
              nativeEvent: { contentOffset: { x: this.state.scrollX } }
            }], {
              useNativeDriver: true,
            })
          }
        >
          <View style={{ width: 600, backgroundColor: '#eee', justifyContent: 'center' }}>
            <Text>滚动我 Scroll me!</Text>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    zIndex: 1,
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});

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
        <Text style={styles.text}>
          内部设置'Internal Settings',
        </Text>

        <InternalSettings />

        <Text style={styles.text}>
          动画事件 'Animated events',
        </Text>
        <EventExample />
        
        <Text style={styles.text}>
          动画值监听 'Animated value listener',
        </Text>
        <ValueListenerExample />

        <Text style={styles.text}>
          自定义驱动 'Drive custom property',
        </Text>
        <Tester
          type="timing"
          config={{ duration: 1000 }}>
          {anim => (
            <AnimatedSlider style={{}} value={anim} />
          )}
        </Tester>

        <Text style={styles.text}>
          动画转换-衰退 'translateX => Animated.decay',
        </Text>
        <Tester
          type="decay"
          config={{ velocity: 0.5 }}
          reverseConfig={{ velocity: -0.5 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  transform: [
                    {
                      translateX: anim
                    },
                  ],
                }
              ]}
            />
          )}
        </Tester>

        <Text style={styles.text}>
          动画转换-spring 'translateX => Animated.spring',
        </Text>
        <Tester
          type="spring"
          config={{ bounciness: 0 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  transform: [
                    {
                      translateX: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 100],
                      })
                    },
                  ],
                }
              ]}
            />
          )}
        </Tester>

        <Text style={styles.text}>
          旋转改写 'Rotate interpolation',
        </Text>
        <Tester
          type="timing"
          config={{ duration: 1000 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  transform: [
                    {
                      rotate: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '90deg'],
                      })
                    }
                  ],
                }
              ]}
            />
          )}
        </Tester>

        <Text style={styles.text}>
          带有透明度的延迟 'Opacity with delay',
        </Text>
        <Tester
          type="timing"
          config={{ duration: 1000, delay: 1000 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  opacity: anim
                }
              ]}
            />
          )}
        </Tester>


        <Text style={styles.text}>
          旋转带有节制改写 'Scale interpolation with clamping',
        </Text>
        <Tester
          type="timing"
          config={{ duration: 1000 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  transform: [
                    {
                      scale: anim.interpolate({
                        inputRange: [0, 0.5],
                        outputRange: [1, 1.4],
                        extrapolateRight: 'clamp',
                      })
                    }
                  ],
                }
              ]}
            />
          )}
        </Tester>


        <Text style={styles.text}>
          多选项复合 'Multistage With Multiply',
        </Text>
        <Tester
          type="timing"
          config={{ duration: 1000 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  transform: [
                    {
                      translateX: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 200],
                      })
                    },
                    {
                      translateY: anim.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [0, 50, 0],
                      })
                    }
                  ],
                  opacity: Animated.multiply(
                    anim.interpolate({
                      inputRange: [0,1],
                      outputRange: [1,0]
                    }), anim.interpolate({
                      inputRange: [0,1],
                      outputRange: [0.25,1]
                  })
                  )
                }
              ]}
            />
          )}
        </Tester>


        <Text style={styles.text}>
          带有旋转复合选项 'Multistage With Multiply and rotation',
        </Text>
        <Tester
          type="timing"
          config={{ duration: 1000 }}>
          {anim => (
            <Animated.View
              style={[
                styles.block,
                {
                  transform: [
                    {
                      translateX: anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 200],
                      })
                    },
                    {
                      translateY: anim.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [0, 50, 0],
                      })
                    },
                    {
                      rotate: anim.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: ['0deg', '90deg', '0deg'],
                      })
                    }
                  ],
                  opacity: Animated.multiply(
                    anim.interpolate({
                      inputRange: [0,1],
                      outputRange: [1,0]
                    }), anim.interpolate({
                      inputRange: [0,1],
                      outputRange: [0.25,1]
                  })
                  )
                }
              ]}
            />
          )}
        </Tester>
      </ScrollView>
    );
  }
}
