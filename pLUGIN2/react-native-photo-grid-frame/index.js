
import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView
} from 'react-native';
import { PhotoGrid } from './PhotoGrid';
import Photos from './Photos';

export default class photoGrid extends Component {
  render() {
    return (
      <ScrollView>
        <PhotoGrid PhotosList={Photos} borderRadius={10}/>
      </ScrollView>
    );
  }
}