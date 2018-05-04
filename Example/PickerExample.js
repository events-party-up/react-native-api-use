import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Picker,
  Text,
} from 'react-native'
const Item = Picker.Item;

export default class PickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key1',
      selected2: 'key1',
      selected3: 'key1',
      color: 'red',
      mode: Picker.MODE_DIALOG,
    }
  }
  changeMode = () => {
    console.log('changeMode ：', Picker.MODE_DIALOG, Picker.MODE_DIALOG, )
    const newMode = this.state.mode === Picker.MODE_DIALOG
        ? Picker.MODE_DROPDOWN
        : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

  onValueChange = (key, value) => {
    console.log('onValueChange ：', key, value)
    const newState = {};
    newState[key] = value;
    console.log('newState ：', newState)
    this.setState(newState);
  };
  render() {
    console.log('PickerExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <View>
          <Text style={styles.text}> title="基础选择 Basic Picker"</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this, 'selected1')}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </View>
        <View>
          <Text style={styles.text}> title="禁止选择 Disabled picker"</Text>
          <Picker style={styles.picker} enabled={false} selectedValue={this.state.selected1}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </View>
        <View>
          <Text style={styles.text}> title="下拉选择框 Dropdown Picker"</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange.bind(this, 'selected2')}
            mode="dropdown">
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </View>
        <View>
          <Text style={styles.text}> title="选择器带有提示文本 Picker with prompt message"</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selected3}
            onValueChange={this.onValueChange.bind(this, 'selected3')}
            prompt="Pick one, just one">
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
        </View>
        <View>
          <Text style={styles.text}> title="选择器没有回调 Picker with no listener"</Text>
          <Picker style={styles.picker}>
            <Item label="hello" value="key0" />
            <Item label="world" value="key1" />
          </Picker>
          <Text>
            不能改变该选择器的值 因为没有更新该选择器的值
            Cannot change the value of this picker because it doesn't update selectedValue.
          </Text>
        </View>
        <View>
          <Text style={styles.text}>带有颜色的选择器 title=" Colorful pickers"</Text>
          <Text style={styles.text}>mode="dropdown"</Text>
          <Picker
            style={[styles.picker, {color: 'white', backgroundColor: '#333'}]}
            selectedValue={this.state.color}
            onValueChange={this.onValueChange.bind(this, 'color')}
            mode="dropdown">
            <Item label="red" color="red" value="red" />
            <Item label="green" color="green" value="green" />
            <Item label="blue" color="blue" value="blue" />
          </Picker>
          <Text style={styles.text}>mode="dialog"</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.color}
            onValueChange={this.onValueChange.bind(this, 'color')}
            mode="dialog">
            <Item label="red" color="red" value="red" />
            <Item label="green" color="green" value="green" />
            <Item label="blue" color="blue" value="blue" />
          </Picker>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});
