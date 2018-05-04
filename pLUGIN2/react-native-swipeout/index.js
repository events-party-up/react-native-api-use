import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

import Swipeout from 'react-native-swipeout';

// Buttons
const swipeoutBtns = [
  {
    text: 'Button'
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Swipeout right={swipeoutBtns}>
          <View>
            <Text>Swipe me left</Text>
          </View>
        </Swipeout>
      </View>
    );
  }
}

export default Home