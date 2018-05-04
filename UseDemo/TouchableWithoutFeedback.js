import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native'


class TouchableWithoutFeedback extends React.Component {
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
        <TouchableWithoutFeedback onPress={this._onPressButton.bind(this, )}>
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default TouchableWithoutFeedback;