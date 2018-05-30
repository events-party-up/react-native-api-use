import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ModalPicker from 'react-native-modal-picker'

export default  class SampleApp extends Component {

    constructor() {
        super();

        this.state = {
            textInputValue: ''
        }
    }

    render() {
      console.log('SampleApp 组件 this.state, this.props ：', this.state, this.props, )
      let index = 0;
      const data = [
          { key: index++, section: true, label: 'Fruits' },
          { key: index++, label: 'Red Apples' },
          { key: index++, label: 'Cherries' },
          { key: index++, label: 'Cranberries' },
          { key: index++, label: 'Pink Grapefruit' },
          { key: index++, label: 'Raspberries' },
          { key: index++, section: true, label: 'Vegetables' },
          { key: index++, label: 'Beets' },
          { key: index++, label: 'Red Peppers' },
          { key: index++, label: 'Radishes' },
          { key: index++, label: 'Radicchio' },
          { key: index++, label: 'Red Onions' },
          { key: index++, label: 'Red Potatoes' },
          { key: index++, label: 'Rhubarb' },
          { key: index++, label: 'Tomatoes' }
      ];

      return (
        <View style={{flex:1, justifyContent:'space-around', padding:50}}>

            <ModalPicker
                data={data}
                initValue="Select something yummy!"
                onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />

            <ModalPicker
                data={data}
                initValue="Select something yummy!"
                onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                
                <TextInput
                    style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                    editable={false}
                    placeholder="Select something yummy!"
                    value={this.state.textInputValue} />
                    
            </ModalPicker>
        </View>
    );
  }
}