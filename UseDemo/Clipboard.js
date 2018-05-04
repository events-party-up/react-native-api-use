import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Clipboard,
} from 'react-native'


class ClipboardExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Content will appear here'
    }
  }
  _setClipboardContent = async () => {
    console.log('_setClipboardContent ：', )
    Clipboard.setString('Hello World');
    try {
      var content = await Clipboard.getString();
      console.log('content ：', content)
      this.setState({content});
    } catch (e) {
      this.setState({content:e.message});
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
          Tap to put "Hello World" in the clipboard
        </Text>
        <Text style={{color: 'red', marginTop: 20}}>
          {this.state.content}
        </Text>
      </View>
    );
  }
}

export default Clipboards;