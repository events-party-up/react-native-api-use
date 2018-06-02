import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
  DeviceEventEmitter,
  // NativeModules
} from 'react-native'  

var { RNLocation: Location } = require('NativeModules');

Location.requestAlwaysAuthorization();
Location.startUpdatingLocation();
Location.setDistanceFilter(5.0);

Location.startUpdatingHeading();

export default class MyComponent extends Component {
  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
        
    var subscription = DeviceEventEmitter.addListener(
      'locationUpdated',
      (location) => {
        console.log('location ：', location);
      }
    );

    DeviceEventEmitter.addListener(
        'headingUpdated',
        (data) => {
          console.log('data ：', data);
        }
    );
  }
  
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <Interactable.View
          horizontalOnly={true}
          snapPoints={[{x: 0}, {x: -200}]}
          onSnap={this.onDrawerSnap}>

          <View style={styles.container}>
            <Text style={styles.text}>111111111</Text>
          </View>
        </Interactable.View>
      </View>
    );
  }
}