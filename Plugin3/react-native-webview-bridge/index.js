
import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'
import WebViewBridge from 'react-native-webview-bridge'

const injectScript = `
  (function () {
    if (WebViewBridge) {
      WebViewBridge.onMessage = function (message) {
        if (message === "hello from react-native") {
          WebViewBridge.send("got the message inside webview");
        }
      };
      WebViewBridge.send("hello from webview");
    }
  }());
`;

export default class Sample2 extends React.Component {
  onBridgeMessage (message) {
    const { webviewbridge } = this.refs;

    switch (message) {
      case "hello from webview":
        webviewbridge.sendToBridge("hello from react-native");
        break;
      case "got the message inside webview":
        console.log("we have got a message from webview! yeah");
        break;
    }
  }
  render() {
    console.log('Sample2 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
      <WebViewBridge
        ref="webviewbridge"
        onBridgeMessage={this.onBridgeMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectScript}
        source={{uri: "https://google.com"}}/>
        <WebViewBridge
        ref="webviewbridge2"
        onBridgeMessage={this.onBridgeMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectScript}
        source={require('./test.html')}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});