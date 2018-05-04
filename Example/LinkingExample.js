import React from "react"
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import propTypes from 'prop-types'

class OpenURLButton extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      console.log('supported ：', this.props.url, supported)
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    console.log('OpenURLButton 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
        <View style={styles.button}>
          <Text style={styles.text}>Open 打开 {this.props.url}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class IntentAndroidExample extends React.Component {
  render() {
    console.log('IntentAndroidExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View title="Open external URLs">
        <OpenURLButton url={'https://www.facebook.com'} />
        <OpenURLButton url={'http://www.facebook.com'} />
        <OpenURLButton url={'http://facebook.com'} />
        <OpenURLButton url={'fb://notifications'} />
        <OpenURLButton url={'geo:37.484847,-122.148386'} />
        <OpenURLButton url={'tel:9876543210'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

module.exports = IntentAndroidExample;
