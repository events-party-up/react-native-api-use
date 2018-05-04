import React from "react"
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

class AlertExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>

{/* Alert */}
<TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            null,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ],
            {
              cancelable: false
            }
          )}>
          <View style={styles.button}>
            <Text>Alert that cannot be dismissed</Text>
          </View>
        </TouchableHighlight>


    {/* platform: 'android',
    title: 'Custom size (size: 75)',
    render() {
      return ( */}
        <ActivityIndicator
          style={styles.centering}
          size={75}
        />


    title: 'Blur Radius',
      return (
        <View style={styles.horizontal}>
          <Image
            style={[styles.base,]}
            source={fullImage}
            blurRadius={0}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={5}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={10}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={15}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={20}
          />
          <Image
            style={[styles.base, styles.leftMargin]}
            source={fullImage}
            blurRadius={25}
          />
        </View>



        {/* Animated */}
        <Text style={styles.text}>Bounce变换  Transform Bounce</Text>
        <Text style={styles.text}>复合动画动画  Composite Animations with Easing</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
})

export default Home;