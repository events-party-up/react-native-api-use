import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'

export default class My extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    console.log('My 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>My</Text>
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