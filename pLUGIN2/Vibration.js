import React from "react"
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
  Platform,
} from 'react-native'

const pattern, patternLiteral, patternDescription;
if (Platform.OS === 'android') {
  pattern = [0, 500, 200, 500];
  patternLiteral = '[0, 500, 200, 500]';
  patternDescription = `${patternLiteral}
  arg 0: duration to wait before turning the vibrator on.
  arg with odd: vibration length.
  arg with even: duration to wait before next vibration.
  `;
  } else {
    pattern = [0, 1000, 2000, 3000];
    patternLiteral = '[0, 1000, 2000, 3000]';
    patternDescription = `${patternLiteral}
  vibration length on iOS is fixed.
  pattern controls durations BETWEEN each vibration only.

  arg 0: duration to wait before turning the vibrator on.
  subsequent args: duration to wait before next vibrattion.
  `;
}


class Vibrations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Vibrations 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        {/* Pattern Descriptions */}
        <View style={styles.wrapper}>
          <Text>{patternDescription}</Text>
        </View>

        {/* Vibration.vibrate() */}
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate()}>
          <View style={styles.button}>
            <Text>Vibrate 震动</Text>
          </View>
        </TouchableHighlight>


        {/* Vibration.vibrate(${patternLiteral}) */}
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate(pattern)}>
          <View style={styles.button}>
            <Text>Vibrate once 震动一次</Text>
          </View>
        </TouchableHighlight>

        {/* Vibration.vibrate(${patternLiteral}, true) */}
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.vibrate(pattern, true)}>
          <View style={styles.button}>
            <Text>Vibrate until cancel 震动直到停止</Text>
          </View>
        </TouchableHighlight>

        {/* Vibration.cancel() */}
        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.cancel()}>
          <View style={styles.button}>
            <Text>Cancel 取消震动</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

export default Vibrations;