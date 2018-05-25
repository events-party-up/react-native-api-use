
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import _ from 'lodash'
import { SelectMultipleButton } from '../index.js'

const ios_blue = '#007AFF'
const multipleData = ['running', 'riding', 'reading', 'coding', 'Niuer']
const radioData = ['Female', 'Male', 'Other', 'Rather not say']

export default class SimpleButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      multipleSelectedData: [],
    }
  }

  render() {
    console.log('SimpleButton 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Text style={styles.welcome}>
          implement the multiple-select buttons demo by SelectMultipleButton
         </Text>
        <Text style={{ color: ios_blue, marginLeft: 10 }}>
          I like {_.join(this.state.multipleSelectedData, ', ')}
        </Text>
        <View
          style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          {
            multipleData.map((interest) =>
              <SelectMultipleButton
                key={interest}
                buttonViewStyle={{
                  borderRadius: 10,
                  height: 40
                }}
                textStyle={{
                  fontSize: 15,
                }}
                highLightStyle={{
                  borderColor: 'gray',
                  backgroundColor: 'transparent',
                  textColor: 'gray',
                  borderTintColor: ios_blue,
                  backgroundTintColor: ios_blue,
                  textTintColor: 'white',
                }}
                multiple={true}
                value={interest}
                selected={this.state.multipleSelectedData.includes(interest)}
                singleTap={(valueTap) => this._singleTapMultipleSelectedButtons(interest)} />
            )
          }
        </View>
        <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />

        <Text style={styles.welcome}>
          implement the radio-select buttons demo by SelectMultipleButton
         </Text>
        <Text style={{ color: 'green', marginLeft: 10 }}>
          I am {this.state.radioSelectedData}
        </Text>
        <View
          style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          {
            radioData.map((gender) =>
              <SelectMultipleButton
                key={gender}
                multiple={false}
                value={gender}
                displayValue={gender + '.'}
                highLightStyle={{
                  borderColor: 'gray',
                  backgroundColor: 'transparent',
                  textColor: 'gray',
                  borderTintColor: 'green',
                  backgroundTintColor: 'green',
                  textTintColor: 'white',
                }}
                selected={this.state.radioSelectedData === gender}
                singleTap={(valueTap) => this._singleTapRadioSelectedButtons(valueTap, gender)} />
            )
          }
        </View>
      </View>

    )
  }

  _singleTapRadioSelectedButtons(valueTap, gender) {
    // Alert.alert('', valueTap)
    this.setState({
      radioSelectedData: gender
    })
  }

  _singleTapMultipleSelectedButtons(interest) {
    if (this.state.multipleSelectedData.includes(interest)) {
      _.remove(this.state.multipleSelectedData, (ele) => { return ele === interest })
    } else {
      this.state.multipleSelectedData.push(interest)
    }

    this.setState(
      {
        multipleSelectedData: this.state.multipleSelectedData
      }
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    margin: 10,
    marginTop: 30,
    color: 'gray'
  },
})