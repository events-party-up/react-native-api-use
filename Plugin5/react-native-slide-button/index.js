import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import { SlideButton, SlideDirection } from 'react-native-slide-button';

export default class MyComponent extends Component {
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>  
                <SlideButton
                    onSlideSuccess={this.onSlide.bind(this)}
                    slideDirection={SlideDirection.LEFT}
                    width={500}
                    height={50}
                >
                    <View style={{height: 50, width: 500}}>    
                        <Text style={styles.button}>Slide Button</Text>
                    </View>
                </SlideButton>
            </View>
        );
    }
}