
import React from 'react';
import { View, Text, Easing } from 'react-native';

import SwipeFlip from 'react-native-swipe-flip';

export default class Playground extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    console.log('Playground 组件 this.state, this.props ：', this.state, this.props, )
      return (
        <View style={{ flex: 1, backgroundColor: '#A5D6A7' }}>
            <SwipeFlip style={{ flex: 1 }}
              front={ this._renderFront() }
              back={ this._renderBack() }
              onFlipped={(val) => { console.log('Flipped: ' + val); }}
              flipEasing={ Easing.out(Easing.ease) }
              flipDuration={ 500 }
              perspective={ 1000 } />
        </View>
      )
  }

  _renderFront() {
    return (
      <View style={{ flex: 1, backgroundColor: '#3F51B5', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'black', padding: 20 }}>
              <Text style={{ fontSize: 32, color: 'white', textAlign: 'center' }}>
                  { `FRONT\nSwipe to flip!` }
              </Text>
          </View>
      </View>
    );
  }

  _renderBack() {
    return (
      <View style={{ flex: 1, backgroundColor: '#C2185B', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'black', padding: 20 }}>
              <Text style={{ fontSize: 32, color: 'white', textAlign: 'center' }}>
                  { `BACK\nSwipe to flip!` }
              </Text>
          </View>
      </View>
    );
  }
}