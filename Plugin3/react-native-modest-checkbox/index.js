
import React, { Component } from 'react'
import CheckBox from 'react-native-modest-checkbox'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          label='Text for checkBox'
          onChange={(checked) => console.log('Checked!')}
        />

        <CheckBox checkedImage={require('./path/to/image.png')} uncheckedImage={require('./path/to/otherImage.png')} />

        <CheckBox
          checkedComponent={<Icon name="hand-peace-o" size={25} color="#222" />}
          uncheckedComponent={<Icon name="hand-paper-o" size={25} color="#222" />} 
          label='Custom Component'
          onChange={(checked) => console.log('Checked!')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
// Imagine some amazing styles right here..
})
