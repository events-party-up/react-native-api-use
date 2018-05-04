import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Keyboard,
  TextInput,
} from 'react-native'


class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow = () => {
    alert('Keyboard Shown');
  }
  _keyboardDidHide = () => {
    alert('Keyboard Hidden');
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    );
  }
}

export default Keyboard;