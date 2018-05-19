import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput
} from 'react-native';

import Hyperlink from 'react-native-hyperlink'

export default class DemoApp extends Component {
  render() {
    console.log('DemoApp 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={[{flex: 1}]}>
        <Hyperlink linkDefault={ true }>
          <Text style={ { fontSize: 15 } }>
            This text will be parsed to check for clickable strings like https://github.com/obipawan/hyperlink and made clickable.
          </Text>
        </Hyperlink>

        <Hyperlink onPress={ (url, text) => alert(url + ", " + text) }>
          <Text style={ { fontSize: 15 } }>
            This text will be parsed to check for clickable strings like https://github.com/obipawan/hyperlink and made clickable.
          </Text>
        </Hyperlink>

        <Hyperlink onLongPress={ (url, text) => alert(url + ", " + text) }>
          <Text style={ { fontSize: 15 } }>
            This text will be parsed to check for clickable strings like https://github.com/obipawan/hyperlink and made clickable for long click.
          </Text>
        </Hyperlink>

        <Hyperlink onPress={ (url, text) => alert(url + ", " + text) }>
          <View>
            <Text style={ { fontSize: 15 } }>
              A nested Text component https://facebook.github.io/react-native/docs/text.html works equally well <Text>with https://github.com/obipawan/hyperlink</Text>
            </Text>
          </View>
        </Hyperlink>

        <Hyperlink linkStyle={ { color: '#2980b9', fontSize: 20 } }>
          <Text style={ { fontSize: 15 } }>
            Make clickable strings like https://github.com/obipawan/hyperlink stylable
          </Text>
        </Hyperlink>

        <Hyperlink
          linkStyle={ { color: '#2980b9', fontSize: 20 } }
          linkText={ url => url === 'https://github.com/obipawan/hyperlink' ? 'Hyperlink' : url }
        >
          <Text style={ { fontSize: 15 } }>
            Make clickable strings cleaner with https://github.com/obipawan/hyperlink
          </Text>
        </Hyperlink>

      </View>
    );
  }
}