
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import Tooltips from 'react-native-tooltips'


import Top from "./components/Top";
import Center from "./components/Center";
import Bottom from "./components/Bottom";

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      reference: undefined
    }
  }

  _onPress (ref) {
    this.setState({ visible: true, reference: ref });
  }

  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return <View style={styles.container}>
        <Top style={styles.top} onPress={ref => {
            this._onPress(ref);
          }} />
        <Center style={styles.center} onPress={ref => {
            this._onPress(ref);
          }} />
        <Bottom style={styles.bottom} onPress={ref => {
            this._onPress(ref);
          }} />
        <Tooltips text={"Long Press Description"} visible={this.state.visible} reference={this.state.reference} onHide={() => {
            console.log("On Hide");
          }} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});