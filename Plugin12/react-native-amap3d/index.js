import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import { MapView } from 'react-native-amap3d'

export default class MyComponent extends Component {
  render() {
    const coordinate = {
      latitude: 39.706901,
      longitude: 116.397972,
    }
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <MapView
          coordinate={{
            latitude: 39.91095,
            longitude: 116.37296,
          }}
        />

        <MapView
          locationEnabled
          onLocation={({ nativeEvent }) =>
            console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
         />

        <MapView>
          <MapView.Marker
            draggable
            title='这是一个可拖拽的标记'
            onDragEnd={({ nativeEvent }) =>
              console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
            coordinate={{
              latitude: 39.91095,
              longitude: 116.37296,
            }}
          />
        </MapView>

        <MapView.Marker image='flag' coordinate={coordinate}>
          <View style={styles.customInfoWindow}>
            <Text>自定义信息窗体</Text>
          </View>
        </MapView.Marker>
      </View>
    );
  }
}