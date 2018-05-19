import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import SnackBar from 'react-native-snackbar-component'

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <SnackBar visible={true} textMessage="Hello There!" actionHandler={()=>{console.log("snackbar button clicked!")}} actionText="let's go"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});