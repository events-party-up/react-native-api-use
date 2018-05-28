import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import EventCalendar from '../src/EventCalendar';

let { width } = Dimensions.get('window');

export default class App extends React.Component {
  state = {
    events: [
      [
        { start: 30, end: 150 },
        { start: 540, end: 600 },
        { start: 560, end: 620 },
        { start: 610, end: 670 },
      ],
      [
        { start: 100, end: 200 },
        { start: 250, end: 350 },
        { start: 325, end: 400 },
        { start: 300, end: 400 },
      ],
      [
        { start: 100, end: 200 },
        { start: 250, end: 350 },
        { start: 325, end: 400 },
        { start: 300, end: 400 },
        { start: 250, end: 350 },
        { start: 325, end: 400 },
        { start: 300, end: 400 },
      ],
    ],
  };

  _eventTapped(event) {
    alert(JSON.stringify(event));
  }

  _getEventsForIndex = (data, index) => {
    return this.state.events[Math.abs(index % this.state.events.length)];
  };

  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <EventCalendar
        eventTapped={this._eventTapped}
        events={this.state.events}
        getItem={this._getEventsForIndex}
        width={width}
      />
    );
  }
}
