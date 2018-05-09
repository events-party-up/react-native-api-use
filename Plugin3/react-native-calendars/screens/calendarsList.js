import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';

export default class CalendarsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('CalendarsList 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <CalendarList current={'2012-05-16'} pastScrollRange={24} futureScrollRange={24} />
    );
  }
}
