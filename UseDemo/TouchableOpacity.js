import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'

class TouchableOpacitys extends React.Component {
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
        <TouchableOpacity onPress={this._onPressButton.bind(this, )}>
          <Image
            style={styles.button}
            source={require('image!myButton')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TouchableOpacitys;