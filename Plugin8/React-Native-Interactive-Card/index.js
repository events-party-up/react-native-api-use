import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import InteractiveCard, { Content, Header } from 'react-native-interactive-card'

const cardOptions = { overlayOpacity : 1 };
const contentOptions = { enterFrom: "right" }

const headerStyle = {
	backgroundColor: "#68E9FF", padding: 30, 
	marginBottom: 10, borderRadius: 5 
};
const textStyle = {
	fontSize: 40, opacity: 0.6,
	textAlign: 'center', fontWeight: 'bold'
};
const contentStyle = {
	width: "90%", padding: 50, 
	backgroundColor: "#E85F53"
};

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <InteractiveCard>
            <Header>
            </Header>
            <Content>
            </Content>
        </InteractiveCard>
                
        <InteractiveCard {...cardOptions}>
            <Header>
              <View style={headerStyle}>
              <Text style={styles.text}>Header</Text>
          </View>
            </Header>
            <Content {...contentOptions}>
              <View style={contentStyle}>
              <Text style={textStyle}>Content</Text>
          </View>
            </Content>
        </InteractiveCard>
      </View>
    );
  }
}