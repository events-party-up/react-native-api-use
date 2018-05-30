import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <HeaderImageScrollView
          maxHeight={200}
          minHeight={MIN_HEIGHT}
          headerImage={require('../../assets/NZ.jpg')}
        >
          <View style={{ height: 1000 }}>
            <TriggeringView onHide={() => console.log('text hidden')} >
              <Text>Scroll Me!</Text>
            </TriggeringView>
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}