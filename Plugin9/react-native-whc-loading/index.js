
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Loading from 'react-native-whc-loading';

export default class App extends Component<{}> {
  render() {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={styles.container}>
          <TouchableHighlight
              style={[styles.button, {backgroundColor: 'red'}]}
              onPress={() => {
                this.refs.loading1.show();
                setTimeout(() => {
                    this.refs.loading1.close();
                }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 1</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={[styles.button, {backgroundColor: 'gray'}]}
              onPress={() => {
                  this.refs.loading2.show();
                  setTimeout(() => {
                      this.refs.loading2.close();
                  }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 2</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={[styles.button, {backgroundColor: '#13227a'}]}
              onPress={() => {
                  this.refs.loading3.show();
                  setTimeout(() => {
                      this.refs.loading3.close();
                  }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 3</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={[styles.button, {backgroundColor: '#1296db'}]}
              onPress={() => {
                  this.refs.loading4.show();
                  setTimeout(() => {
                      this.refs.loading4.close();
                  }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 4</Text>
          </TouchableHighlight>

          <Loading ref='loading1'/>
          <Loading ref='loading2'
                   image={require('./images/loading2.png')}/>
          <Loading ref='loading3'
                   image={require('./images/loading3.png')}
                   easing={Loading.EasingType.linear}/>
          <Loading ref='loading4'
                   backgroundColor={'#00000096'}
                   indicatorColor={'#fff'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding:30,
    },
    button: {
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
});