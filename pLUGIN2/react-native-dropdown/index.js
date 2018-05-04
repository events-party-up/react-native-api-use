import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'


const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canada: ''
    };
  }

  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }
  _getOptionList() {
    console.log('_getOptionList ：', )
    return this.refs['OPTIONLIST'];
  }
  _canada(province) {
    console.log('_canada ：', province)
    this.setState({
      ...this.state,
      canada: province
    });
  }
  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}>
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
            <Option>Nunavut</Option>
            <Option>Ontario</Option>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>

          <Text>Selected provicne of Canada: {this.state.canada}</Text>
          
          <OptionList ref="OPTIONLIST"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});