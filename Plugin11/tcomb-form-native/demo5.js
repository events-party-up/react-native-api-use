import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'


const Country = t.enums({
  'IT': 'Italy',
  'US': 'United States'
}, 'Country');

export default class AwesomeProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: null 
    }
  }

  getType(value) {
    if (value.country === 'IT') {
      return t.struct({
        country: Country,
        rememberMe: t.Boolean
      });
    } else if (value.country === 'US') {
      return t.struct({
        country: Country,
        name: t.String
      });
    } else {
      return t.struct({
        country: Country
      });
    }
  }

  getInitialState() {
    const value = {};
    return { value, type: this.getType(value) };
  }

  onChange(value) {
    // recalculate the type only if strictly necessary
    const type = value.country !== this.state.value.country ?
      this.getType(value) :
      this.state.type;
    this.setState({ value, type });
  }

  onPress() {
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    console.log('AwesomeProject 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <t.form.Form
          ref="form"
          type={this.state.type}
          value={this.state.value}
          onChange={this.onChange}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}