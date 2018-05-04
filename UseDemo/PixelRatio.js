import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  PixelRatio,
} from 'react-native'


class PixelRatios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  getImages = () => {
    console.log('getImage ：', PixelRatio)
    const image = getImage({
      width: PixelRatio.getPixelSizeForLayoutSize(200),
      height: PixelRatio.getPixelSizeForLayoutSize(100),
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={image} style={{width: 200, height: 100}} />
        <Text onPress={this.getImages.bind(this, )}>getImages</Text>
      </View>
    );
  }
}

export default PixelRatios;