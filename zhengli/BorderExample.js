import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  AppState,
} from 'react-native'

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
  border1: {
    borderWidth: 10,
    borderColor: 'brown',
  },
  borderRadius: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'cyan',
  },
  border2: {
    borderWidth: 10,
    borderTopColor: 'red',
    borderRightColor: 'yellow',
    borderBottomColor: 'green',
    borderLeftColor: 'blue',
  },
  border3: {
    borderColor: 'purple',
    borderTopWidth: 10,
    borderRightWidth: 20,
    borderBottomWidth: 30,
    borderLeftWidth: 40,
  },
  border4: {
    borderTopWidth: 10,
    borderTopColor: 'red',
    borderRightWidth: 20,
    borderRightColor: 'yellow',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    borderLeftWidth: 40,
    borderLeftColor: 'blue',
  },
  border5: {
    borderRadius: 50,
    borderTopWidth: 10,
    borderTopColor: 'red',
    borderRightWidth: 20,
    borderRightColor: 'yellow',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    borderLeftWidth: 40,
    borderLeftColor: 'blue',
  },
  border6: {
    borderTopWidth: 10,
    borderTopColor: 'red',
    borderRightWidth: 20,
    borderRightColor: 'yellow',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    borderLeftWidth: 40,
    borderLeftColor: 'blue',

    borderTopLeftRadius: 100,
  },
  border7: {
    borderWidth: 10,
    borderColor: '#f007',
    borderRadius: 30,
    overflow: 'hidden',
  },
  border7_inner: {
    backgroundColor: 'blue',
    width: 100,
    height: 100
  },
  border8: {
    width: 60,
    height: 60,
    borderColor: 'black',
    marginRight: 10,
    backgroundColor: 'lightgrey',
  },
  border9: {
    borderWidth: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 20,
    borderColor: 'black',
  },
  border10: {
    borderWidth: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 20,
    borderColor: 'black',
    elevation: 10,
  },
  border11: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    overflow: 'hidden',
    borderTopWidth: 50,
    borderRightWidth: 0,
    borderBottomWidth: 50,
    borderLeftWidth: 100,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'red',
  },
});

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  myClaimBar = () => {
    
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>等宽 同颜色 Equal-Width / Same-Color</Text>
        <View style={[styles.box, styles.border1]} />
        <Text style={styles.text}>
          等宽 同颜色 'Equal-Width / Same-Color'
          'borderWidth & borderColor & borderRadius',
        </Text>
        <View style={[styles.box, styles.borderRadius]} />

        <Text style={styles.text}>
          等宽 边框 'Equal-Width Borders'
          'borderWidth & border*Color',
        </Text>
        <View style={[styles.box, styles.border2]} />

        <Text style={styles.text}>
          同颜色 边框 'Same-Color Borders'
          'border*Width & borderColor',
        </Text>
        <View style={[styles.box, styles.border3]} />

        <Text style={styles.text}>
          自定义边框 'Custom Borders'
          'border*Width & border*Color',
        </Text>
        <View style={[styles.box, styles.border4]} />

        <Text style={styles.text}>
          自定义边框 ios 'Custom Borders'
          'border*Width & border*Color',
            platform: 'ios',
        </Text>
        <View style={[styles.box, styles.border5]} />

        <Text style={styles.text}>
          自定义边框 'Custom Borders'
          'border*Width & border*Color',
            platform: 'ios',
        </Text>
        <View style={[styles.box, styles.border6]} />

        <Text style={styles.text}>
          自定义边框 'Custom Borders'
          'borderRadius & clipping',
            platform: 'ios',
        </Text>
        <View style={[styles.box, styles.border7]}>
          <View style={styles.border7_inner} />
        </View>

        <Text style={styles.text}>
          单一边框 'Single Borders'
          'top, left, bottom right',
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.box, styles.border8, {borderTopWidth: 5}]} />
          <View style={[styles.box, styles.border8, {borderLeftWidth: 5}]} />
          <View style={[styles.box, styles.border8, {borderBottomWidth: 5}]} />
          <View style={[styles.box, styles.border8, {borderRightWidth: 5}]} />
        </View>

        <Text style={styles.text}>
          边框圆角 'Corner Radii'
          'borderTopLeftRadius & borderBottomRightRadius',
        </Text>
        <View style={[styles.box, styles.border9]} />
        
        <Text style={styles.text}>
          边框圆角 海拔 'Corner Radii / Elevation'
          'borderTopLeftRadius & borderBottomRightRadius & elevation',
          platform: 'android',
        </Text>
        <View style={[styles.box, styles.border10]} />

        <Text style={styles.text}>
          css技巧 三角'CSS Trick - Triangle'
          'create a triangle by manipulating border colors and widths',
        </Text>
        <View style={[styles.border11]} />

      </ScrollView>
    );
  }
}