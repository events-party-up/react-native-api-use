import React from "react"
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // opacity 0
    }
  }
  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    Animated.timing(       // Uses easing functions
      this.state.fadeAnim, // The value to drive
      {
        toValue: 1,        // Target
        duration: 2000,    // Configuration
      },
    ).start();             // Don't forget start!
  }
  
  render() {
    console.log('FadeInView 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>FadeInView</Text>
        <Text style={styles.text}>'Uses a simple timing animation to ' +
        'bring opacity from 0 to 1 when the component ' +
        'mounts.</Text>
        <Animated.View   // Special animatable View
          style={{
            opacity: this.state.fadeAnim,  // Binds
          }}>
          {this.props.children}
        </Animated.View>
      </ScrollView>
    );
  }
}


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      
    }
  }
  render() {
    this.anim = this.anim || new Animated.Value(0);
    this.anims = this.anims || [1,2,3].map(
      () => new Animated.Value(0)
    );
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Bounce变换  Transform Bounce</Text>
        <Text style={styles.text}>One `Animated.Value` is driven by a ' +
      'spring with custom constants and mapped to an ' +
      'ordered set of transforms.  Each transform has ' +
      'an interpolation to convert the value into the ' +
      'right range and units.</Text>
        <Text style={styles.text} onPress={() => {
            this.setState((state) => (
              {show: !state.show}
            ));
          }}>
          Press to {this.state.show ?
        'Hide' : 'Show'}
        </Text>
        {this.state.show && <FadeInView>
            <View style={styles.content}>
              <Text>淡入视图 FadeInView</Text>
            </View>
          </FadeInView>
        }
        <View>
          <Text onPress={() => {
            Animated.spring(this.anim, {
              toValue: 0,   // Returns to the start
              velocity: 3,  // Velocity makes it move
              tension: -10, // Slow
              friction: 1,  // Oscillate a lot
            }).start(); }}>
            按压来抛他 Press to Fling it!
          </Text>
          <Animated.View
            style={[styles.content, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '360deg' // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]}>
            <Text>Transforms!</Text>
          </Animated.View>
        </View>


        <Text style={styles.text}>复合动画动画  Composite Animations with Easing</Text>
        <Text style={styles.text}>Sequence, parallel, delay, and ' +
      'stagger with different easing functions.</Text>
        <View>
          <Text onPress={() => {
            const timing = Animated.timing;
            Animated.sequence([ // One after the other
              timing(this.anims[0], {
                toValue: 200,
                easing: Easing.linear,
              }),
              Animated.delay(400), // Use with sequence
              timing(this.anims[0], {
                toValue: 0,
                easing: Easing.elastic(2), // Springy
              }),
              Animated.delay(400),
              Animated.stagger(200,
                this.anims.map((anim) => timing(
                  anim, {toValue: 200}
                )).concat(
                this.anims.map((anim) => timing(
                  anim, {toValue: 0}
                ))),
              ),
              Animated.delay(400),
              Animated.parallel([
                Easing.inOut(Easing.quad), // Symmetric
                Easing.back(1.5),  // Goes backwards first
                Easing.ease        // Default bezier
              ].map((easing, ii) => (
                timing(this.anims[ii], {
                  toValue: 320, easing, duration: 3000,
                })
              ))),
              Animated.delay(400),
              Animated.stagger(200,
                this.anims.map((anim) => timing(anim, {
                  toValue: 0,
                  easing: Easing.bounce, // Like a ball
                  duration: 2000,
                })),
              ),
            ]).start(); }}>
            Press to Animate
          </Text>
          {['Composite', 'Easing', 'Animations!'].map(
            (text, ii) => (
              <Animated.View
                key={text}
                style={[styles.content, {
                  left: this.anims[ii]
                }]}>
                <Text>{text}</Text>
              </Animated.View>
            )
          )}
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
