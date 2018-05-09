import React from "react"
import {
  DatePickerAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
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
    minText: '选择一个日期不早于今天 pick a date, no earlier than today',
    maxText: '选择一个日期不晚于今天 pick a date, no later than today',
    presetText: '选择一个日期预设日期是2020/5/5 pick a date, preset to 2020/5/5',
    allText: '选择一个日期 时间范围是2020/5/1 and 2020/5/10 pick a date between 2020/5/1 and 2020/5/10',
  };

  showPicker = async (stateKey, options) => {
    console.log('showPicker ：', stateKey, options)
    try {
      const newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      console.log('await DatePickerAndroid.open(options) ：', action, year, month, day);
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
      <ScrollView title="DatePickerAndroid">
        <View style={styles.mt20}>  
          <Text style={styles.text}>最简单的日期选择器 title="Simple date picker"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})} color='#4e86ff' title={this.state.simpleText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>带加载的选择器 title="Simple spinner date picker"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'spinner', {date: this.state.spinnerDate, mode: 'spinner'})} color='#4e86ff' title={this.state.spinnerText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>日历选择器 title="Simple calendar date picker"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'calendar', {date: this.state.calendarDate, mode: 'calendar'})} color='#4e86ff' title={this.state.calendarText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>带有默认值的选择器 title="Simple default date picker"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'default', {date: this.state.defaultDate, mode: 'default'})} color='#4e86ff' title={this.state.defaultText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>带有预设值的选择器 title="Date picker with pre-set date"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})} color='#4e86ff' title={this.state.presetText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>带有最小日期的选择器 title="Date picker with minDate"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'min', {
              date: this.state.minDate,
              minDate: new Date(),
            })} color='#4e86ff' title={this.state.minText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>带有最大日期的选择器 title="Date picker with maxDate"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'max', {
              date: this.state.maxDate,
              maxDate: new Date(),
            })} color='#4e86ff' title={this.state.maxText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>

        <View style={styles.mt20}>  
          <Text style={styles.text}>带有所有配置的选择器 title="Date picker with all options"</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'all', {
              date: this.state.allDate,
              minDate: new Date(2020, 4, 1),
              maxDate: new Date(2020, 4, 10),
            })} color='#4e86ff' title={this.state.allText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>


        <View style={styles.mt20}>  
          <Text style={styles.text}>选择器模式： clock</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'all', {
              date: this.state.allDate,
              minDate: new Date(2020, 4, 1),
              maxDate: new Date(2020, 4, 10),
                mode: 'clock'
            })} color='#4e86ff' title={this.state.allText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>
        <View style={styles.mt20}>  
          <Text style={styles.text}>选择器模式： spinner</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'all', {
              date: this.state.allDate,
              minDate: new Date(2020, 4, 1),
              maxDate: new Date(2020, 4, 10),
                mode: 'spinner'
            })} color='#4e86ff' title={this.state.allText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>
        <View style={styles.mt20}>  
          <Text style={styles.text}>选择器模式： default</Text>
          <TouchableOpacity>
            <Button onPress={this.showPicker.bind(this, 'all', {
              date: this.state.allDate,
              minDate: new Date(2020, 4, 1),
              maxDate: new Date(2020, 4, 10),
                mode: 'default'
            })} color='#4e86ff' title={this.state.allText} style={styles.btn}></Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
  },
  mt20: {
    marginTop: 20,
  },
});
