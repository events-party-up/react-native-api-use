import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'

export default class Page3 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    console.log('Page3 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Page3</Text>
        </View>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})