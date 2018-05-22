import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'


// 很多demo
import { RadioButtons, SegmentedControls,  } from 'react-native-radio-buttons'

export default class MyComponent extends Component {
    
    render() {
    const options = [
      "Option 1",
      "Option 2"
    ];
  
    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption
      });
    }
  
    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold'} : {};
  
      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }
  
    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
        <View style={{margin: 20}}>
            <RadioButtons
                options={ options }
                onSelection={ setSelectedOption.bind(this) }
                selectedOption={this.state.selectedOption }
                renderOption={ renderOption }
                renderContainer={ renderContainer }
            />
            <Text>Selected option: {this.state.selectedOption || 'none'}</Text>

            
            <SegmentedControls
                options={ options }
                onSelection={ setSelectedOption.bind(this) }
                selectedOption={ this.state.selectedOption }
            />
        </View>
    );
    }
}