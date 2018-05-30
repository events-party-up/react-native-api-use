import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ViewShot from "react-native-view-shot";

export default class ExampleCaptureOnMountManually extends Component {
  componentDidMount () {
    this.refs.viewShot.capture().then(uri => {
      console.log("do something with ", uri);
    });
  }
  render() {
    console.log('ExampleCaptureOnMountManually 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        <Text>...Something to rasterize...</Text>
      </ViewShot>
    );
  }
}

// alternative
export default class ExampleCaptureOnMountSimpler extends Component {
  onCapture = uri => {
    console.log("do something with ", uri);
  }
  render() {
    console.log('ExampleCaptureOnMountSimpler 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ViewShot onCapture={this.onCapture} captureMode="mount">
        <Text>...Something to rasterize...</Text>
      </ViewShot>
    );
  }
}

// waiting an image
export default class ExampleWaitingCapture extends Component {
  onImageLoad = () => {
    this.refs.viewShot.capture().then(uri => {
      console.log("do something with ", uri);
    })
  };
  render() {
    console.log('ExampleWaitingCapture 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ViewShot ref="viewShot">
        <Text>...Something to rasterize...</Text>
        <Image ... onLoad={this.onImageLoad} />
      </ViewShot>
    );
  }
}

// capture ScrollView content
export default class ExampleCaptureScrollViewContent extends Component {
  onCapture = uri => {
    console.log("do something with ", uri);
  }
  render() {
    console.log('ExampleCaptureScrollViewContent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView>
        <ViewShot onCapture={this.onCapture} captureMode="mount">
          <Text>...The Scroll View Content Goes Here...</Text>
        </ViewShot>
      </ScrollView>
    );
  }
}