import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

import { setBreakPoints } from 'react-native-responsive-grid';

setBreakPoints({
  SMALL_Width: 414,
  MEDIUM_Width: 600,
  LARGE_Width: 1024
})

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('Home 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <Row  style={{paddingTop: '6%', paddingBottom: '6%', backgroundColor: 'white', borderBottomColor: 'lightgray', borderBottomWidth: 1}}>
            <Col size={80} offset={6}>
              <Row>
                <Col size={50} smSize={100}>      
                  <Text style={{fontSize: 15, color: '#BD1206', fontWeight:'bold'}}>March 9, 2017</Text>
                  <Row>
                    <Col size={5}>
                      <FontAwesome name='cutlery' size={17} color='gray'/>
                    </Col>
                    <Col size={60} offset={2.5}>
                      <Text style={{fontSize: 12, color: 'gray', lineHeight: 20}}>TAKEOUT ORDER</Text>
                    </Col>
                  </Row>
                </Col>
                <Col size={50} smSize={100}>
                  <Text style={{fontSize: 16, color: '#0a0a0a'}}>Double Cheese Burger</Text>                                                                          
                </Col>
              </Row>
            </Col>
            <Col size={14} offset={-6} hAlign='right'>
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="#BD1206" style={{left: 5}} />
            </Col>
        </Row>
      </View>
    );
  }
}