import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  
import ImageCarousel from 'react-native-image-carousel';

export default class App extends Component {
  _renderHeader(){
    return (
      <TouchableWithoutFeedback onPress={this._imageCarousel.close}>
        <View>
          <Text style={styles.closeText}>Exit</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _renderFooter(){
    return (
      <Text style={styles.footerText}>Footer!</Text>
    );
  }

  _renderContent(idx){
    return (
      <Image
        style={styles.container}
        source={{ uri: urls[idx] }}
        resizeMode={'contain'}
      />
    );
  }

  render(){
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <ImageCarousel
          ref={(imageCarousel) => {
            this._imageCarousel = imageCarousel;
          }}
          renderContent={this._renderContent}
          renderHeader={this._renderHeader}
          renderFooter={this._renderFooter}
        >
          {urls.map((url)=> (
            <Image
              key={url}
              style={styles.image}
              source={{ uri: url, height: 100 }}
              resizeMode={'contain'}
            />
          ))}
        </ImageCarousel>
      </View>
    );
  }
}