import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  Linking,
} from 'react-native'


class Linkings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial url is: ' + url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  linkAction = () => {
    console.log('linkAction ：', )
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('supported ：', supported)
        console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.linkAction.bind(this, )}>linkAction</Text>
      </View>
    );
  }
}

export default Linkings;