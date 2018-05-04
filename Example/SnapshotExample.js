import React from "react"
import {
  Image,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native'

class ScreenshotExample extends React.Component {
  state = {
    uri: undefined,
  };

  render() {
    console.log('ScreenshotExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Text onPress={this.takeScreenshot} style={style.button}>
          点击拍摄一个快照 Click to take a screenshot
        </Text>
        <Image style={style.image} source={{uri: this.state.uri}}/>
      </View>
    );
  }

  takeScreenshot = () => {
    console.log('takeScreenshot ：', )
    UIManager
      .takeSnapshot('window', {format: 'jpeg', quality: 0.8}) // See UIManager.js for options
      .then((uri) => this.setState({uri}))
      .catch((error) => alert(error));
  };
}

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
        <ScreenshotExample />
      </ScrollView>
    );
  }
}


const style = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  image: {
    flex: 1,
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
});
