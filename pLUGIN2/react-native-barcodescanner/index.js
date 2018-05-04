import React from "react"
import {
	Slider,
	Text,
	StyleSheet,
	View,
	NetInfo,
	TouchableOpacity,
} from 'react-native'
import BarcodeScanner from 'react-native-barcodescanner';
  
export default class BarcodeScannerApp extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
			torchMode: 'off',
			cameraType: 'back',
	  };
	}
  
	barcodeReceived(e) {
	  console.log('Barcode: ' + e.data);
	  console.log('Type: ' + e.type);
	}
  
	render() {
		console.log('BarcodeScannerApp 组件 this.state, this.props ：', this.state, this.props, )
	  return (
			<BarcodeScanner
				onBarCodeRead={this.barcodeReceived}
				style={{ flex: 1 }}
				torchMode={this.state.torchMode}
				cameraType={this.state.cameraType}
			/>
		);
	}
}
