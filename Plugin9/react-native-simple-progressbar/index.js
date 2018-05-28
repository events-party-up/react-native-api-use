import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import ProgressBar from 'react-native-simple-progressbar'

export default class MyComponent extends Component {
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView>
        <ProgressBar progress={200} size={1000} />
        <ProgressBar height={20} progress={200} size={1000} />
        <ProgressBar width={100} progress={200} size={1000} />
        <ProgressBar 
            width={250} 
            height={15} 
            progress={200} 
            size={1000} 
            style={{ borderWidth: 0, backgroundColor: '#eee' }} 
        />
         <ProgressBar 
            width={250} 
            height={25} 
            progress={300} 
            size={1000} 
            style={{ borderWidth: 0, backgroundColor: '#eee' }} 
            hideProgressText={true} 
        />
         <ProgressBar 
             width={250} 
             height={15} 
             progress={200} 
             size={1000}
             onProgress={(progressValue) => this.setState({ progressValue })} 
             style={{ borderWidth: 0, backgroundColor: '#eee' }} 
             hideProgressText={true} 
        />
        <Text>Progress: {this.state.progressValue}%</Text>
        <ProgressBar 
            width={250} 
            height={12} 
            progress={200} 
            size={1000} 
            color={'#3F51B5'} 
            style={{ borderWidth: 0, backgroundColor: '#eee' }} 
         />
         <ProgressBar 
            width={250} 
            height={12} 
            progress={200} 
            size={1000} 
            color={'#3F51B5'} 
            style={{ borderRadius: 1, borderWidth: 0, backgroundColor: '#eee' }} 
          />
         <ProgressBar 
            width={170} 
            height={12} 
            progress={200} 
            size={1000} 
            color={'#3F51B5'} 
            style={{ borderRadius: 1, borderWidth: 0.5, backgroundColor: '#fff', borderColor: '#3F51B5' }} 
          />
      </ScrollView>
    );
  }
}