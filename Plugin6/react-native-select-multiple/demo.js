import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples', 'Oranges', 'Pears']
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}
 
export default class App extends Component {
  state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render () {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <SelectMultiple
          items={fruits}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }
}