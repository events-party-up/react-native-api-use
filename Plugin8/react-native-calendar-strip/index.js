

import React, { Component } from 'react';
import CalendarStrip from "react-native-calendar-strip";

export default class App extends Component<{}> {
  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <CalendarStrip
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
          style={{height:100, paddingTop: 20, paddingBottom: 10}}
          calendarHeaderStyle={{color: 'white'}}
          calendarColor={'#7743CE'}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconLeft={require('./img/left-arrow.png')}
          iconRight={require('./img/right-arrow.png')}
          iconContainer={{flex: 0.1}}
      />
    );
  }
}