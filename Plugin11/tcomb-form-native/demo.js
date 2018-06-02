import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'

const Person = t.struct({
  name: t.String,
  surname: t.maybe(t.String)
});

export default class AwesomeProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: {
        name: 'Giulio',
        surname: 'Canti'
      }
    }
  }

  onChange(value) {
    this.setState({value});
  }

  onPress () {
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    console.log('AwesomeProject 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
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