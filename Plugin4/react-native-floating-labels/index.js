import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import FloatingLabel from 'react-native-floating-labels'

export default class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      dirty: false,
    };
  }
  onBlur() {
    console.log('#####: onBlur');
  }
  render() {
    console.log('Form 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
            value='john@email.com'
            onBlur={this.onBlur}
          >Email</FloatingLabel>
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}

            style={styles.formInput}
          >First Name</FloatingLabel>
        <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            style={styles.formInput}
          >Last Name</FloatingLabel>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'white',
  },
  labelInput: {
    color: '#673AB7',
  },
  formInput: {    
    borderBottomWidth: 1.5, 
    marginLeft: 20,
    borderColor: '#333',       
  },
  input: {
    borderWidth: 0
  }
});