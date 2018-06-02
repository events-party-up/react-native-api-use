import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'

const Type = t.struct({
  disable: t.Boolean, // if true, name field will be disabled
  name: t.String
});

// see the "Rendering options" section in this guide
const options = {
  fields: {
    name: {}
  }
};

export default class AwesomeProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: options,
      value: null
    }
  }

  onChange(value) {
    // tcomb immutability helpers
    // https://github.com/gcanti/tcomb/blob/master/docs/API.md#updating-immutable-instances
    const options = t.update(this.state.options, {
      fields: {
        name: {
          editable: {'$set': !value.disable}
        }
      }
    });
    this.setState({options: options, value: value});
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
          type={Type}
          options={this.state.options}
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