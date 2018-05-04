import React from "react"
import {
  DatePickerAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class DatePickerAndroidExample extends React.Component {

  state = {
    presetDate: new Date(2020, 4, 5),
    simpleDate: new Date(2020, 4, 5),
    spinnerDate: new Date(2020, 4, 5),
    calendarDate: new Date(2020, 4, 5),
    defaultDate: new Date(2020, 4, 5),
    allDate: new Date(2020, 4, 5),
    simpleText: 'pick a date',
    spinnerText: 'pick a date',
    calendarText: 'pick a date',
    defaultText: 'pick a date',
    minText: 'pick a date, no earlier than today',
    maxText: 'pick a date, no later than today',
    presetText: 'pick a date, preset to 2020/5/5',
    allText: 'pick a date between 2020/5/1 and 2020/5/10',
  };

  showPicker = async (stateKey, options) => {
    console.log('showPicker ：', stateKey, options)
    try {
      const newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      console.log('await DatePickerAndroid.open(options); ：', await DatePickerAndroid.open(options););
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        const date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      console.log('newState ：', newState)
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    console.log('DatePickerAndroidExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View title="DatePickerAndroid">
        <View title="Simple date picker">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
            <Text style={styles.text}>{this.state.simpleText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Simple spinner date picker">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'spinner', {date: this.state.spinnerDate, mode: 'spinner'})}>
            <Text style={styles.text}>{this.state.spinnerText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Simple calendar date picker">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'calendar', {date: this.state.calendarDate, mode: 'calendar'})}>
            <Text style={styles.text}>{this.state.calendarText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Simple default date picker">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'default', {date: this.state.defaultDate, mode: 'default'})}>
            <Text style={styles.text}>{this.state.defaultText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Date picker with pre-set date">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}>
            <Text style={styles.text}>{this.state.presetText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Date picker with minDate">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'min', {
              date: this.state.minDate,
              minDate: new Date(),
            })}>
            <Text style={styles.text}>{this.state.minText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Date picker with maxDate">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'max', {
              date: this.state.maxDate,
              maxDate: new Date(),
            })}>
            <Text style={styles.text}>{this.state.maxText}</Text>
          </TouchableOpacity>
        </View>
        <View title="Date picker with all options">
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'all', {
              date: this.state.allDate,
              minDate: new Date(2020, 4, 1),
              maxDate: new Date(2020, 4, 10),
            })}>
            <Text style={styles.text}>{this.state.allText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

module.exports = DatePickerAndroidExample;
