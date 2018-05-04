import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Picker,
} from 'react-native'


class Pickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'zyb',
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang, v) => {
            console.log('onValueChange  lang ：', lang, v)
            this.setState({language: lang})
          }}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

export default Pickers;