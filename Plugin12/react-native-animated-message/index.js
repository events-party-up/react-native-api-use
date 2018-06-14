import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Button
} from 'react-native'  
import Message from 'react-native-animated-message';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Button 
          title="Show top"
          onPress={()=> this.message.showMessage('This is a message', 3000)}
        />
        <Message
          ref={(message) => this.message = message }
          animation={'slideX'}
          position={'top'}>
        </Message>
      </View>
    );
  }
}