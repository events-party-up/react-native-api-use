import React from "react"
import {
  TimePickerAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class TimePickerAndroidExample extends React.Component {
  state = {
    isoFormatText: 'pick a time (24-hour format)',
    presetHour: 4,
    presetMinute: 4,
    presetText: 'pick a time, default: 4:04AM',
    simpleText: 'pick a time',
  };

  showPicker = async (stateKey, options) => {
    console.log('showPicker ：', stateKey, options)
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      const newState = {};
      console.log('await TimePickerAndroid.open(options) ：', await TimePickerAndroid.open(options));
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = _formatTime(hour, minute);
        newState[stateKey + 'Hour'] = hour;
        newState[stateKey + 'Minute'] = minute;
      } else if (action === TimePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    console.log('TimePickerAndroidExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <View>
          <Text style={styles.text}>简单的时间选择器 title="Simple time picker"</Text>
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'simple', {})}>
            <Text style={styles.text}>{this.state.simpleText}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>带有预选选择时间的选择器 title="Time picker with pre-set time"</Text>
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'preset', {
              hour: this.state.presetHour,
              minute: this.state.presetMinute,
            })}>
            <Text style={styles.text}>{this.state.presetText}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.text}>时间选择器的带有24小时格式化 title="Time picker with 24-hour time format"</Text>
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'isoFormat', {
              hour: this.state.isoFormatHour,
              minute: this.state.isoFormatMinute,
              is24Hour: true,
            })}>
            <Text style={styles.text}>{this.state.isoFormatText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/**
 * Returns e.g. '3:05'.
 */
function _formatTime(hour, minute) {
  console.log('_formatTime ：', hour, minute)
  return hour + ':' + (minute < 10 ? '0' + minute : minute);
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

