import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native'


class TouchableHighlights extends React.Component {
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
        <TouchableHighlight onPress={this._onPressButton.bind(this, )}>
          <Image
            style={styles.button}
            source={require('./button.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}


export default TouchableHighlights;