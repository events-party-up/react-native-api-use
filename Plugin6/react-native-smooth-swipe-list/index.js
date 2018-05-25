import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import SwipeList from 'react-native-smooth-swipe-list';

export default class MyComponent extends Component {
  componentDidMount() {
      // it's a good idea to store the derived rowData to prevent 
      // unnecessary re-renders of the rows in the ListView 
      this.rowData = this.props.todos.map(this.constructRowData);
  }
  
  componentWillReceiveProps(nextProps) {
      // however if you store the derived data you will need to handle the 
      // logic for whether a rowData element needs to be replaced
  }
  
  constructRowData(todo) {
      return {
          id: todo.id,
          rowView: this.getRowView(todo),
          leftSubView: this.getMarkCompleteButton(), //optional
          rightSubView: this.getArchiveButton(), //optional
          style: styles.row //optional but recommended to style your rows
      };
  }
      
  getRowView() {
  }
  
  getMarkCompleteButton() {
  }
  
  getArchiveButton() {
  }
  
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return <SwipeList rowData={this.rowData} />;
  }
}