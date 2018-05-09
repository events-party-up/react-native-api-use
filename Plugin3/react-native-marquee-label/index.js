import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import MarqueeLabel from'@remobile/react-native-marquee-label'
  
export default class Demo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MarqueeLabel style={styles.marqueeLabel}
              scrollDuration={3.0}
              >
              fangyunjiang is a good developer
          </MarqueeLabel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },

  marqueeLabel: {
      backgroundColor: 'blue',
      width:260,
      height:200,
      fontSize:30,
      fontWeight:'800',
      color:'white',
  }
});