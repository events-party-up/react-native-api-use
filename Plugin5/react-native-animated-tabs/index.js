import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import AnimatedTabs from 'react-native-animated-tabs';

export default class MyComponent extends Component {
    render() {
      return (
        <View>
            <AnimatedTabs>
                <View style={styles.tabContent}>
                    <Text style={styles.text}>Tab 1 Content</Text>
                </View>
                <View style={styles.tabContent}>
                    <Text style={styles.text}>Tab 2 Content</Text>
                </View>
                <View style={styles.tabContent}>
                    <Image style={styles.image} source={require('./images/cat1.gif')} resizeMode='stretch'/>
                </View>
            </AnimatedTabs> 
        </View>
      );
    }
  }