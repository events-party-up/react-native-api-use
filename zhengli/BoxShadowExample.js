import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  AppState,
  Image,
} from 'react-native'

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
  },
  shadow1: {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {width: 2, height: 2},
  },
  shadow2: {
    shadowOpacity: 1.0,
    shadowColor: 'red',
    shadowRadius: 0,
    shadowOffset: {width: 3, height: 3},
  },
});

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          基础阴影 title: 'Basic shadow',
          description: 'shadowOpacity: 0.5, shadowOffset: {2}',
        </Text>
        
        <Text style={styles.text}>
          颜色阴影 title: 'Colored shadow',
          description: 'shadowColor: \'red\', shadowRadius: 0',
        </Text>
        <View style={[styles.box, styles.shadow2]} />

        <Text style={styles.text}>
          阴影形状 title: 'Shaped shadow',
          description: 'borderRadius: 50',
        </Text>
        <View style={[styles.box, styles.shadow1, {borderRadius: 50}]} />

        <Text style={styles.text}>
          图片阴影 title: 'Image shadow',
          description: 'Image shadows are derived exactly from the pixels.',
        </Text>
        <Image
          source={require('./hawk.png')}
          style={[styles.box, styles.shadow1, {borderWidth: 0, overflow: 'visible'}]}
        />

        <Text style={styles.text}>
          子阴影 title: 'Child shadow',
          description: 'For views without an opaque background color, shadow will be derived from the subviews.',
        </Text>
        <View style={[styles.box, styles.shadow1, {backgroundColor: 'transparent'}]}>
          <View style={[styles.box, {width: 80, height: 80, borderRadius: 40, margin: 8, backgroundColor: 'red'}]}/>
        </View>
        
      </ScrollView>
    );
  }
}