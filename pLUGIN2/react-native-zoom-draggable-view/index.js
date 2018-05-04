import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'
import { RNZoomDraggableView } from 'react-native-zoom-draggable-view';

export default class Demo extends React.Component {
  onTap = () => {
    console.log('onTap');
  };

  onTouchStart = ({ nativeEvent }) => {
    const { numberOfTouches } = nativeEvent;
    console.log('NumberOfTouches', numberOfTouches);
  };

  onTouchEnd = ({ nativeEvent }) => {
    const { numberOfTouches } = nativeEvent;
    console.log('NumberOfTouches', numberOfTouches);
  };

  onLongPress = ({ nativeEvent }) => {
    const { touchEnd } = nativeEvent;
    console.log('TouchEnd', touchEnd);
  };

  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{ flex: 1 }}>
        <ZoomDraggableView
          ref={ref => this.viewRef = ref}
          style={{ width: 350, height: 350 }}
          zoomScale={0.5} // initial Scale
          minimumZoomScale={0.2}
          maximumZoomScale={2}
          requiresMinScale={true}
          onTap={this.onTap}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          onLongPress={this.onLongPress}
          userInteractionEnabled={this.state.userInteractionEnabled}
          longPressEnabled={true}
        >
          <Image
            style={{ width: 700, height: 700 }}
            source={{ uri: 'yourImageSourcePath'}}
          />
        </ZoomDraggableView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});