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
  surname: t.maybe(t.String),
  age: t.Number,
  rememberMe: t.Boolean
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

  componentDidMount() {
    // give focus to the name textbox
    this.refs.form.getComponent('name').refs.input.focus();
  }

  onPress () {
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}