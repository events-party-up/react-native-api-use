import React,{
  Component
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import PDFView from 'react-native-pdf-view';

export default class PDF extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('PDF 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <PDFView ref={(pdf)=>{this.pdfView = pdf;}}
        src={"sdcard/pdffile.pdf"}
        onLoadComplete = {(pageCount)=>{
          this.pdfView.setNativeProps({
              zoom: 1.5
          });
        }}
        style={styles.pdf}/>
    )
  }
}
var styles = StyleSheet.create({
  pdf: {
      flex:1
  }
});