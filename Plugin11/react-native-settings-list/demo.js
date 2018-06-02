import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import SettingsList from 'react-native-settings-list';

export default class SettingsListExample extends Component {
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }

  onValueChange(value){
    this.setState({switchValue: value});
  }
  render() {
    console.log('SettingsListExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={{backgroundColor:'gray',flex:1}}>
        <View style={{flex:1, marginTop:50}}>
          <SettingsList>
            <SettingsList.Header headerText='First Grouping' headerStyle={{color:'white'}}/>
            <SettingsList.Item
              icon={
                <View style={{height:30,marginLeft:10,alignSelf:'center'}}>
                  <Image style={{alignSelf:'center',height:40, width:40}} source={require('./about.png')}/>
                </View>
              }
              itemWidth={50}
              title='Icon Example'
              onPress={() => Alert.alert('Icon Example Pressed')}
            />
            <SettingsList.Item
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasSwitch={true}
              title='Switch Example'/>
            <SettingsList.Item
              title='Different Colors Example'
              backgroundColor='#D1D1D1'
              titleStyle={{color:'blue'}}
              arrowStyle={{tintColor:'blue'}}
              onPress={() => Alert.alert('Different Colors Example Pressed')}/>
            <SettingsList.Header headerText='Different Grouping' headerStyle={{color:'white', marginTop:50}}/>
            <SettingsList.Item titleInfo='Some Information' hasNavArrow={false} title='Information Example'/>
            <SettingsList.Item title='Settings 1'/>
            <SettingsList.Item title='Settings 2'/>
          </SettingsList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    marginRight:20,
    alignSelf:'center',
    width:20,
    height:24,
    justifyContent:'center'
  }
});
