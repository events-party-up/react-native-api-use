import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import TimeLine from 'react-native-timeline-theme';import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    title: 'Wake up',
    description: 'Remember tooth brushing and read notes on the tablet',
    time: new Date("March 6, 2018 6:15:00"),
  },
  {
    title: 'Eatting',
    description: 'Eat breakfast: bread and drink milk',
    time: new Date("March 6, 2018 7:00:00"),
  },
  {
    title: 'Working',
    description: 'Go to ABX Company and working react-native',
    time: new Date("March 6, 2018 7:35:00"),
  },
  {
    title: 'Relax',
    description: 'Listen to music "Hello Vietnam" song',
    time: new Date("March 6, 2018 14:15:00"),
  },
]

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <TimeLine
          data={data}
          isRenderSeperator
          widthLineContainer={65}
          style={{margin: 16}}
        />
      </View>
    );
  }
}