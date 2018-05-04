import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'

const {width, height} = Dimensions.get('window')
console.log('Dimensions ：', Dimensions.get('window'))

class Dimensionss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

export default Dimensionss;