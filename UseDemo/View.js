import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'


class Views extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
          <MyCustomComponent {...customProps} />
        </View>
      </View>
    );
  }
}

export default Views;