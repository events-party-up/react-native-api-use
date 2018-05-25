import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { Slide,Slide3D,Flip } from 'react-native-flip-menu'

export default class APP extends Component {
  render() {
    return (
      <View>
        <Flip Main={Main} Menu={Menu} />
      </View>
    );
  } 
}

class Main extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>{ 
        //trigger by button
          this.props.open()
        }}>
          <Text>Open Menu</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=>{ 
        //trigger by button
          this.props.close()
        }}>
          <Text>Open Menu</Text>
        </TouchableOpacity>
      </View>
    )
  }
}