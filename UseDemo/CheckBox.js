import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
  CheckBox,
} from 'react-native'

class CheckBoxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: false,
    }
  }
  onChange = (e) => {
    console.log('onChange ：', e)
    
  }
  
  render() {
    console.log('isCheck 组件 this.state, this.props ：', this.state, this.props, )
    const {isCheck, } = this.state
    return (
      <View style={styles.container}>
        <CheckBox
          disabled={true}
        />
        <CheckBox
          disabled={false}
        />
        <CheckBox
          onChange={this.onChange.bind(this, )}
        />
        <CheckBox
          disabled={false}
        />
        <CheckBox
          value={true}
        />
        <CheckBox
          value={false}
        />
      </View>
    );
  }
}

export default CheckBoxs;