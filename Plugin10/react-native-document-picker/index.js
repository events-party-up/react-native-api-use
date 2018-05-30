import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker'

export default class MyComponent extends Component {
  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    // iPhone/Android
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.images()],
    },(error,res) => {
      // Android
      console.log(
        res.uri,
        res.type, // mime type
        res.fileName,
        res.fileSize
      );
    });

    // iPad
    const {pageX, pageY} = event.nativeEvent;

    DocumentPicker.show({
    top: pageY,
    left: pageX,
    filetype: ['public.image'],
    }, (error, url) => {
    alert(url);
    });
  }
  
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CollapsingToolbar 
            leftItem={<Icon name="md-menu" size={30} color="#fff" />}
            rightItem={<Icon name="md-create" size={30}  color="#fff" />}   
            toolbarColor='#2196f3'  
            title='Demo Toolbar'
            src={require('../../../images/drawer6.png')}>
            <Text>
                Create             
            </Text>
        </CollapsingToolbar>
      </View>
    );
  }
}