import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Switch,
} from 'react-native'


class Switchs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onChange = (e) => {
    console.log('onChange ：', e)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Switch
          disabled={true}
        />
        <Switch
          disabled={false}
        />
        <Switch
          onChange={this.onChange.bind(this, )}
        />
        <Switch
          tintColor={'blue'}
        />
        <Switch
          onTintColor={'red'}
        />
        <Switch
          value={true}
        />
        <Switch
          value={false}
        />
        <Switch
          thumbTintColor={'red'}
        />
      </View>
    );
  }
}

export default Switchs;