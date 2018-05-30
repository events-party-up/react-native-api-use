import React, { Component } from 'react';

import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

class Example extends Component {
  async createPDF() {
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
  }

  render() {
    <View>
      <TouchableHighlight onPress={this.createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  }
}