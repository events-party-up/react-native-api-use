import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'

export default class Tag extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    console.log('Tag 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Tag</Text>
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