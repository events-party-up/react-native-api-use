import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import f from 'fastui-form'

const model = {
  studentName: {
      type: f.fieldType.String,
      label: "学生姓名",
      value: "Giulio",
      disabled: true,
      placeholder: "请填写姓名"
  },
  age: {
      type: f.fieldType.Number,
      label: "年龄",
      value: 18,
      placeholder: "请填写年龄"
  },
  password: {
      type: f.fieldType.Password,
      label: "密码",
      value: "",
      placeholder: "请填写密码"
  },
  year: {
      type: f.fieldType.Spinner,
      label: "入学年份",
      value: "2015",
  },
  rememberMe: {
      type: f.fieldType.Boolean,
      label: "记住我",
      value: true,
  }
},
Form = f.Form

export default class Demo extends Component {
  render()  {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
        <View style={styles.container}>
            <Form model={model} ref="form"/>
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#68CBE0'>
                <Text style={styles.buttonText}>提交</Text>
            </TouchableHighlight>
        </View>
    );
  }
  onPress = () => {
    const value = this.refs.form.getValue();
    if (value) { 
        alert(JSON.stringify(value)); 
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      paddingTop: 30,
      paddingLeft: 10,
      paddingRight: 10,
  },
  button: {
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: '#26B4D3',
  },
  buttonText: {
      fontSize: 17,
      color: '#fff',
  }
});
