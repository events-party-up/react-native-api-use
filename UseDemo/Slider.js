
import React from 'react'
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

class SliderExample extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: this.props.value,
    }
  }
  static defaultProps = {    
    value: 0,
  }

  render() {
    return (
      <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

class SlidingCompleteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCompletionValue: 0,
      slideCompletionCount: 0,
    }
  }
  
  render() {
    return (
      <View>
        <SliderExample
          {...this.props}
          onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
        <Text>
          Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

class SliderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SliderExample />

        <SliderExample value={0.5} />

        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />

        <SliderExample step={0.25} />

        <SlidingCompleteExample />

        <SliderExample
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
        />

        <SliderExample thumbImage={require('./uie_thumb_big.png')} />

        <SliderExample trackImage={require('./slider.png')} />

        <SliderExample
          minimumTrackImage={require('./slider-left.png')}
          maximumTrackImage={require('./slider-right.png')}
        />
      </View>
    );
  }
}

export default Home;