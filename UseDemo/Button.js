import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
} from 'react-native'

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* Simple  */}
        <Button
          onPress={onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />

        {/* Adjusted color */}
        <Button
          onPress={onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />

        {/* Fit to text layout */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            onPress={onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={onButtonPress}
            title="Ok!"
            color="#841584"
            accessibilityLabel="Ok, Great!"
          />
        </View>

        {/* Disabled Button */}
        <Button
          disabled
          onPress={onButtonPress}
          title="I Am Disabled"
          accessibilityLabel="See an informative alert"
        />

      </View>
    );
  }
}

export default Buttons;