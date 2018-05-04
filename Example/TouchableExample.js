import React from "react"
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
  NativeModules
} from 'react-native'

const forceTouchAvailable = (NativeModules.PlatformConstants &&
  NativeModules.PlatformConstants.forceTouchAvailable) || false;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    const mScale = new Animated.Value(1);
    Animated.timing(mScale, {toValue: 0.3, duration: 1000}).start();
    const style = {
      backgroundColor: 'rgb(180, 64, 119)',
      width: 200,
      height: 100,
      transform: [{scale: mScale}]
    };


    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          TouchableHighlight  
        </Text>
        <View>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => console.log('stock THW image - highlight')}>
              <Image
                source={heartImage}
                style={styles.image}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              activeOpacity={1}
              animationVelocity={0}
              underlayColor="rgb(210, 230, 255)"
              onPress={() => console.log('custom THW text - highlight')}>
              <View style={styles.wrapperCustom}>
                <Text style={styles.text}>
                  Tap Here For Custom Highlight!
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <Text style={styles.text}>
          'TouchableNativeFeedback with Animated child',
        </Text>
      <View>
        <View style={styles.row}>
          <TouchableNativeFeedback>
            <Animated.View style={style}/>
          </TouchableNativeFeedback>
        </View>
      </View>
        
        <Text style={styles.text}>
          'Text onPress={fn}> with highlight',
        </Text>
        <TextOnPressBox />
        
        <Text style={styles.text}>
          'Touchable feedback events',
        </Text>
        <TouchableFeedbackEvents />
        
        <Text style={styles.text}>
          'Touchable delay for events',
        </Text>
        <TouchableDelayEvents />

        <Text style={styles.text}>
          '3D Touch / Force Touch',
        </Text>
        <ForceTouchExample />
        
        <Text style={styles.text}>
          'Touchable Hit Slop',
        </Text>
        <TouchableHitSlop />


        <Text style={styles.text}>
          'Disabled Touchable*',
        </Text>
        <TouchableDisabled />
      </ScrollView>
    );
  }
}
class TextOnPressBox extends React.Component {
  state = {
    timesPressed: 0,
  };

  textOnPress = () => {
    console.log('textOnPress this.state, this.props ：', this.state, this.props, )
    this.setState({
      timesPressed: this.state.timesPressed + 1,
    });
  };

  render() {
    const textLog = '';
    if (this.state.timesPressed > 1) {
      textLog = this.state.timesPressed + 'x text onPress';
    } else if (this.state.timesPressed > 0) {
      textLog = 'text onPress';
    }
    console.log('TextOnPressBox 组件 this.state, this.props ：', textLog, this.state, this.props, )
    return (
      <View>
        <Text
          style={styles.textBlock}
          onPress={this.textOnPress}>
          Text has built-in onPress handling
        </Text>
        <View style={styles.logBox}>
          <Text>
            {textLog}
          </Text>
        </View>
      </View>
    );
  }
}

class TouchableFeedbackEvents extends React.Component {
  state = {
    eventLog: [],
  };

  render() {
    console.log('TouchableFeedbackEvents 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View testID="touchable_feedback_events">
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <TouchableOpacity
            style={styles.wrapper}
            testID="touchable_feedback_events_button"
            accessibilityLabel="touchable feedback events"
            accessibilityTraits="button"
            accessibilityComponentType="button"
            onPress={() => this._appendEvent('press')}
            onPressIn={() => this._appendEvent('pressIn')}
            onPressOut={() => this._appendEvent('pressOut')}
            onLongPress={() => this._appendEvent('longPress')}>
            <Text style={styles.button}>
              Press Me
            </Text>
          </TouchableOpacity>
        </View>
        <View testID="touchable_feedback_events_console" style={styles.eventLogBox}>
          {this.state.eventLog.map((e, ii) => <Text key={ii}>{e}</Text>)}
        </View>
      </View>
    );
  }

  _appendEvent = (eventName) => {
    const limit = 6;
    const eventLog = this.state.eventLog.slice(0, limit - 1);
    eventLog.unshift(eventName);
    console.log('_appendEvent ：', eventName, eventLog, )
    this.setState({eventLog});
  };
}

class TouchableDelayEvents extends React.Component {
  state = {
    eventLog: [],
  };

  render() {
    console.log('TouchableDelayEvents 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View testID="touchable_delay_events">
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <TouchableOpacity
            style={styles.wrapper}
            testID="touchable_delay_events_button"
            onPress={() => this._appendEvent('press')}
            delayPressIn={400}
            onPressIn={() => this._appendEvent('pressIn - 400ms delay')}
            delayPressOut={1000}
            onPressOut={() => this._appendEvent('pressOut - 1000ms delay')}
            delayLongPress={800}
            onLongPress={() => this._appendEvent('longPress - 800ms delay')}>
            <Text style={styles.button}>
              Press Me
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventLogBox} testID="touchable_delay_events_console">
          {this.state.eventLog.map((e, ii) => <Text key={ii}>{e}</Text>)}
        </View>
      </View>
    );
  }

  _appendEvent = (eventName) => {
    const limit = 6;
    const eventLog = this.state.eventLog.slice(0, limit - 1);
    eventLog.unshift(eventName);
    console.log('_appendEvent ：', eventName, eventLog)
    this.setState({eventLog});
  };
}

class ForceTouchExample extends React.Component {
  state = {
    force: 0,
  };

  _renderConsoleText = () => {
    console.log('_renderConsoleText ：', )
    return forceTouchAvailable ?
      'Force: ' + this.state.force.toFixed(3) :
      '3D Touch is not available on this device';
  };

  render() {
    console.log('ForceTouchExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View testID="touchable_3dtouch_event">
        <View style={styles.forceTouchBox} testID="touchable_3dtouch_output">
          <Text>{this._renderConsoleText()}</Text>
        </View>
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <View
            style={styles.wrapper}
            testID="touchable_3dtouch_button"
            onStartShouldSetResponder={() => true}
            onResponderMove={(event) => this.setState({force: event.nativeEvent.force})}
            onResponderRelease={(event) => this.setState({force: 0})}>
            <Text style={styles.button}>
              Press Me
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class TouchableHitSlop extends React.Component {
  state = {
    timesPressed: 0,
  };

  onPress = () => {
    console.log('onPress this.state, this.props ：', this.state, this.props, )
    this.setState({
      timesPressed: this.state.timesPressed + 1,
    });
  };

  render() {
    const log = '';
    if (this.state.timesPressed > 1) {
      log = this.state.timesPressed + 'x onPress';
    } else if (this.state.timesPressed > 0) {
      log = 'onPress';
    }
    console.log('TouchableHitSlop 组件 this.state, this.props ：', log, this.state, this.props, )
    return (
      <View testID="touchable_hit_slop">
        <View style={[styles.row, {justifyContent: 'center'}]}>
          <TouchableOpacity
            onPress={this.onPress}
            style={styles.hitSlopWrapper}
            hitSlop={{top: 30, bottom: 30, left: 60, right: 60}}
            testID="touchable_hit_slop_button">
            <Text style={styles.hitSlopButton}>
              Press Outside This View
            </Text>
          </TouchableOpacity>
         </View>
        <View style={styles.logBox}>
          <Text>
            {log}
          </Text>
        </View>
      </View>
    );
  }
}

class TouchableDisabled extends React.Component {
  render() {
    console.log('TouchableDisabled 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TouchableOpacity disabled={true} style={[styles.row, styles.block]}>
          <Text style={styles.disabledButton}>Disabled TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={false} style={[styles.row, styles.block]}>
          <Text style={styles.button}>Enabled TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableHighlight
          activeOpacity={1}
          disabled={true}
          animationVelocity={0}
          underlayColor="rgb(210, 230, 255)"
          style={[styles.row, styles.block]}
          onPress={() => console.log('custom THW text - highlight')}>
          <Text style={styles.disabledButton}>
            Disabled TouchableHighlight
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={1}
          animationVelocity={0}
          underlayColor="rgb(210, 230, 255)"
          style={[styles.row, styles.block]}
          onPress={() => console.log('custom THW text - highlight')}>
          <Text style={styles.button}>
            Enabled TouchableHighlight
          </Text>
        </TouchableHighlight>

        {Platform.OS === 'android' &&
          <TouchableNativeFeedback
            style={[styles.row, styles.block]}
            onPress={() => console.log('custom TNF has been clicked')}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View>
              <Text style={[styles.button, styles.nativeFeedbackButton]}>
                Enabled TouchableNativeFeedback
              </Text>
            </View>
          </TouchableNativeFeedback>
        }

        {Platform.OS === 'android' &&
          <TouchableNativeFeedback
            disabled={true}
            style={[styles.row, styles.block]}
            onPress={() => console.log('custom TNF has been clicked')}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View>
              <Text style={[styles.disabledButton, styles.nativeFeedbackButton]}>
                Disabled TouchableNativeFeedback
              </Text>
            </View>
          </TouchableNativeFeedback>
        }
      </View>
    );
  }
}

const heartImage = {uri: 'https://pbs.twimg.com/media/BlXBfT3CQAA6cVZ.png:small'};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
  },
  block: {
    padding: 10,
  },
  button: {
    color: '#007AFF',
  },
  disabledButton: {
    color: '#007AFF',
    opacity: 0.5,
  },
  nativeFeedbackButton: {
    textAlign: 'center',
    margin: 10,
  },
  hitSlopButton: {
    color: 'white',
  },
  wrapper: {
    borderRadius: 8,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  hitSlopWrapper: {
    backgroundColor: 'red',
    marginVertical: 30,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  eventLogBox: {
    padding: 10,
    margin: 10,
    height: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  forceTouchBox: {
    padding: 10,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  textBlock: {
    fontWeight: '500',
    color: 'blue',
  },
});
