import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
  CameraRoll, 
  ToastAndroid
} from 'react-native'  
import RNFS from "react-native-fs"
import QRCode from 'react-native-qrcode-svg'

export default class MyComponent extends Component {
  getDataURL() {
    this.svg.toDataURL(this.callback);
  }
  callback(dataURL) {
    console.log(dataURL);
  }
  saveQrToDisk() {
   	this.svg.toDataURL((data) => {
   		RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
   		  .then((success) => {
   			  return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
   		  })
   		  .then(() => {
   			  this.setState({ busy: false, imageSaved: true  })
   			  ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
   		  })
   	})
  }
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
    let logoFromFile = require('../assets/logo.png');
    return (
      <View>
        <QRCode
          value="http://awesome.link.qr"
        />

        <QRCode
          value="Just some string value"
          logo={{uri: base64Logo}}
          logoSize={30}
          logoBackgroundColor='transparent'
        />

        <QRCode
          value="Just some string value"
          logo={logoFromFile}
        />

        <QRCode
          value="Just some string value"
          getRef={(c) => (this.svg = c)}
        />

        <Text onPress={this.saveQrToDisk.bind(this, )}>saveQrToDisk</Text>
      </View>
    );
  }
}