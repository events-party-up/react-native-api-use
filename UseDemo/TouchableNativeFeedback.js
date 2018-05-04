import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native'

class TouchableNativeFeedbacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  _onPressButton = (e, v) => {
    console.log('_onPressButton ：', e, v)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this._onPressButton.bind(this, )}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default TouchableNativeFeedbacks;