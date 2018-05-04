import React from "react"
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Flip extends React.Component {
  state = {
    theta: new Animated.Value(45),
  };

  componentDidMount() {
    this._animate();
  }

  _animate = () => {
    console.log('_animate ：', )
    this.state.theta.setValue(0);
    Animated.timing(this.state.theta, {
      toValue: 360,
      duration: 5000,
    }).start(this._animate);
  };

  render() {
    console.log('Flip 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.flipCardContainer}>
        <Animated.View style={[
          styles.flipCard,
          {transform: [
            {perspective: 850},
            {rotateX: this.state.theta.interpolate({
              inputRange: [0, 180],
              outputRange: ['0deg', '180deg']
            })},
          ]}]}>
          <Text style={styles.flipText}>
            This text is flipping great.
          </Text>
        </Animated.View>
        <Animated.View style={[styles.flipCard, {
          position: 'absolute',
          top: 0,
          backgroundColor: 'red',
          transform: [
            {perspective: 850},
            {rotateX: this.state.theta.interpolate({
              inputRange: [0, 180],
              outputRange: ['180deg', '360deg']
            })},
          ]}]}>
          <Text style={styles.flipText}>
            On the flip side...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  box1: {
    left: 0,
    backgroundColor: 'green',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {translateX: 100},
      {translateY: 50},
      {rotate: '30deg'},
      {scaleX: 2},
      {scaleY: 2},
    ],
    width: 50,
  },
  box2: {
    left: 0,
    backgroundColor: 'purple',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {scaleX: 2},
      {scaleY: 2},
      {translateX: 100},
      {translateY: 50},
      {rotate: '30deg'},
    ],
    width: 50,
  },
  box3step1: {
    left: 0,
    backgroundColor: 'lightpink',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {rotate: '30deg'},
    ],
    width: 50,
  },
  box3step2: {
    left: 0,
    backgroundColor: 'hotpink',
    height: 50,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    transform: [
      {rotate: '30deg'},
      {scaleX: 2},
      {scaleY: 2},
    ],
    width: 50,
  },
  box3step3: {
    left: 0,
    backgroundColor: 'deeppink',
    height: 50,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    transform: [
      {rotate: '30deg'},
      {scaleX: 2},
      {scaleY: 2},
      {translateX: 100},
      {translateY: 50},
    ],
    width: 50,
  },
  box4: {
    left: 0,
    backgroundColor: 'darkorange',
    height: 50,
    position: 'absolute',
    top: 0,
    transform: [
      {translate: [200, 350]},
      {scale: 2.5},
      {rotate: '-0.2rad'},
    ],
    width: 100,
  },
  box5: {
    backgroundColor: 'maroon',
    height: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 50,
  },
  box5Transform: {
    transform: [
      {translate: [-50, 35]},
      {rotate: '50deg'},
      {scale: 2},
    ],
  },
  flipCardContainer: {
    marginVertical: 40,
    flex: 1,
    alignSelf: 'center',
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden',
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
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
          'Perspective, Rotate, Animation',
        </Text>
        <Flip />

        <Text style={styles.text}>
          'Translate, Rotate, Scale'
        </Text>
        <View style={styles.container}>
          <View style={styles.box1} />
        </View>

        
        <Text style={styles.text}>
          'Scale, Translate, Rotate, ',
        </Text>
        <View style={styles.container}>
          <View style={styles.box2} />
        </View>

        
        <Text style={styles.text}>
          'Rotate',
        </Text>
        <View style={styles.container}>
          <View style={styles.box3step1} />
        </View>

        
        <Text style={styles.text}>
          'Rotate, Scale',
        </Text>
        <View style={styles.container}>
          <View style={styles.box3step2} />
        </View>

        
        <Text style={styles.text}>
          'Rotate, Scale, Translate ',
        </Text>
        <View style={styles.container}>
          <View style={styles.box3step3} />
        </View>

        
        <Text style={styles.text}>
          'Translate, Scale, Rotate',
        </Text>
        <View style={styles.container}>
          <View style={styles.box4} />
        </View>

        
        <Text style={styles.text}>
          'Translate, Rotate, Scale',
        </Text>
        <View style={styles.container}>
          <View style={[styles.box5, styles.box5Transform]} />
        </View>

      </ScrollView>
    );
  }
}