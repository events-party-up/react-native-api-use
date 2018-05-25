import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ParallaxScrollView from 'react-native-parallax-scrollview'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <ParallaxScrollView
          windowHeight={SCREEN_HEIGHT * 0.4}
          backgroundSource='http://i.imgur.com/UyjQBkJ.png'
          navBarTitle='John Oliver'
          userName='John Oliver'
          userTitle='Comedian'
          userImage='http://i.imgur.com/RQ1iLOs.jpg'
          leftIcon={{name: 'rocket', color: 'rgba(131, 175, 41, 1)', size: 30, type: 'font-awesome'}}
          rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
        />
        
        <ParallaxScrollView
          windowHeight={SCREEN_HEIGHT * 0.4}
          backgroundSource='http://i.imgur.com/UyjQBkJ.png'
          navBarTitle='John Oliver'
          userName='John Oliver'
          userTitle='Comedian'
          userImage='http://i.imgur.com/RQ1iLOs.jpg'
          leftIcon={{name: 'rocket', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
          rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
        >
          <ScrollView style={{flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)'}}>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>Custom view</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>keep going.</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>keep going..</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>keep going...</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>the end! :)</Text>
            </View>
          </ScrollView>
        </ParallaxScrollView>


        <ParallaxScrollView
          windowHeight={SCREEN_HEIGHT}
          backgroundSource='http://i.imgur.com/s4JEY9E.jpg'
          navBarTitle='Custom Title'
          navBarTitleColor='black'
          navBarColor='white'
          headerView={(
            <View style={styles.headerView}>
              <View style={styles.headerTextView}>
                <Text style={styles.headerTextViewTitle}>My App</Text>
                <Text style={styles.headerTextViewSubtitle}>
                  Custom Header View
                </Text>
              </View>
            </View>
          )}
          leftIcon={{name: 'rocket', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
          leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
          rightIcon={{name: 'user', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
          rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
        >
          <ScrollView style={{flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)'}}>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>Custom view</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>keep going.</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>keep going..</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>keep going...</Text>
            </View>
            <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 32, color: 'white'}}>the end! :)</Text>
            </View>
          </ScrollView>
        </ParallaxScrollView>
      </View>
    );
  }
}