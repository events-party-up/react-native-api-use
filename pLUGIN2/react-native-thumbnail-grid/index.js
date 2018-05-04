import React from "react"
import {
  Text,
  View,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

const images = [
  {
    uri: 'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    headers: {
      Authorization: 'Bearer xyz'
    }
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
    headers: {
      Authorization: 'Bearer xyz'
    }
  },
  {
    uri: 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    headers: {
      Authorization: 'Bearer xyz'
    }
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
        <PhotoGrid source={images} onPressImage={source => this.showImage(source.uri)} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});