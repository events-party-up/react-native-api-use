import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import LabelSelect from 'react-native-label-select';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <LabelSelect
            ref="labelSelect"
            title="Make Choices"
            enable={true}
            readOnly={false}
            enableAddBtn={true}
            style={yourStyle}
            onConfirm={(list) => {
              console.log('list ：', list);
            }}>

            <LabelSelect.Label
              // key={...}
              data={itemA}
              onCancel={func}>selected ItemA</LabelSelect.Label>
            <LabelSelect.ModalItem
              // key={...}
              data={itemB}>Item B</LabelSelect.ModalItem>
          </LabelSelect>
      </View>
    );
  }
}