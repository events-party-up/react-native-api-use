import React from "react"
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'


class ToastAndroids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  showToast = () => {
    console.log('showToast ：', ToastAndroid)
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  }
  showWithGravity = () => {
    console.log('showToast ：', ToastAndroid)
    ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} onPress={this.showToast.bind(this, )}>
          <Text>showToast</Text>
        </View>
        <View style={styles.container} onPress={this.showWithGravity.bind(this, )}>
          <Text>showWithGravity</Text>
        </View>
      </View>
    );
  }
}

class ToastExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View title="ToastAndroid">
          <View title="Simple toast">
            <TouchableOpacity
              onPress={() =>
                ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT)}>
              <Text style={styles.text}>Click me.</Text>
            </TouchableOpacity>
          </View>
          <View title="Toast with long duration">
            <TouchableOpacity
              onPress={() =>
                ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)}>
              <Text style={styles.text}>Click me.</Text>
            </TouchableOpacity>
          </View>
          <View title="Toast with top gravity">
            <TouchableOpacity
              onPress={() =>
                ToastAndroid.showWithGravity(
                  'This is a toast with top gravity',
                  ToastAndroid.SHORT,
                  ToastAndroid.TOP,
                )
              }>
              <Text style={styles.text}>Click me.</Text>
            </TouchableOpacity>
          </View>
          <View title="Toast with center gravity">
            <TouchableOpacity
              onPress={() => {
                  console.log('showWithGravity ：', )
                  ToastAndroid.showWithGravity(
                    'This is a toast with center gravity',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                  )
                }
              }>
              <Text style={styles.text}>Click me.</Text>
            </TouchableOpacity>
          </View>
          <View title="Toast with bottom gravity">
            <TouchableOpacity
              onPress={() => {
                  console.log('showWithGravity ：', )
                  ToastAndroid.showWithGravity(
                    'This is a toast with bottom gravity',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                  )
                }
              }>
              <Text style={styles.text}>Click me.</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default ToastAndroids;