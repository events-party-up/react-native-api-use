import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  Image,
  ImageBackground
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import {sideBarConfig} from '../index'


export default class SideBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  navigate = (v) => {
    console.log('  navigate ：', v, this.props, )
    // this.props.navigation.navigate(v.route)
  }
  
  render() {
    console.log('SideBar 组件 this.state, this.props ：', this.state, this.props, )
    
    const sideBarCom = sideBarConfig.map(v => {
      return <TouchableNativeFeedback
        onPress={this.navigate.bind(this, v)}
        key={v.route}
      >
        <View 
          style={[styles.item, styles.mb5]} 
        >
          <View style={styles.left}>
            <Icon name={v.icon} size={24} style={styles.icon} />
          </View>
          <View style={styles.right}>
            <Text style={styles.text}>{v.name}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    })

    return (
      <View style={styles.container}>

        <View style={styles.sideTop}>
          <TouchableNativeFeedback>
            <Image 
              style={styles.avatar}
              resizeMode={'contain'}
              source={{uri: 'https://b-ssl.duitang.com/uploads/item/201605/28/20160528080456_Gh32H.jpeg'}}/>
          </TouchableNativeFeedback>
        </View>

        <ScrollView style={styles.sideCenter}>
          {sideBarCom}
        </ScrollView>
        
        <View style={styles.sideBottom}>
          <TouchableNativeFeedback>
            <View style={styles.settingWrapper}>
              <View style={styles.left}>
                <Icon name={'ios-settings-outline'} size={34} style={styles.icon} />
              </View>
              <View style={styles.right}>
                <Text style={styles.text}>设置</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    
  },
  sideTop: {
    // flex: 1,
    height: 100,
  },
  sideCenter: {
    flex: 8,
  },
  sideBottom: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: 40,
    backgroundColor: '#ccc',
    
  },

  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  right: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    marginLeft: 10,
    // backgroundColor: 'gray',
    
  },
  text: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    
  },

  avatar: {
    borderWidth: 2, 
    flex: 1, 
    borderColor: 'black', 
    // width: 500,
    // height: 100,
  },

  settingWrapper: {
    marginLeft: 5,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    
  },





  mb5:{
    marginBottom: 5,
  },
})