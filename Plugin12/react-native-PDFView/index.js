import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import PDFView from 'react-native-view-pdf';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <PDFView
          style={{ flex: 1 }}
          onError={(error) => console.log('onError', error)}
          onLoad={() => console.log('PDF rendered from url')}
          resource="http://www.pdf995.com/samples/pdf.pdf"
          resourceType="url"
        />
        <PDFView
          style={{ flex: 1 }}
          onError={(error) => console.log('onError', error)}
          onLoad={() => console.log('PDF rendered from base 64 data')}
          resource="JVBERi0xLjMKJcfs..."
          resourceType= 'base64'
        />
        <PDFView
          style={{ flex: 1 }}
          onError={(error) => console.log('onError', error)}
          onLoad={() => console.log('PDF rendered from file')}
          resource={Platform.OS === 'ios' ? 'test-pdf.pdf' : '/sdcard/Download/test-pdf.pdf'}
          resourceType="file"
        />
      </View>
    );
  }
}