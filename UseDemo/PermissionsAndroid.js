import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  PermissionsAndroid,
} from 'react-native'


class PermissionsAndroids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  requestCameraPermission = async () => {
    console.log('requestCameraPermission ：', )
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': '申请摄像头权限',
          'message': '一个很牛逼的应用想借用你的摄像头，' +
                    '然后你就可以拍出酷炫的皂片啦。'
        }
      )
      console.log('granted ：', granted)
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("现在你获得摄像头权限了")
      } else {
        console.log("用户并不屌你")
      }
    } catch (err) {
      console.warn(err)
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
          <Text onPress={this.requestCameraPermission.bind(this, )}>requestCameraPermission</Text>
      </View>
    );
  }
}

export default PermissionsAndroids;