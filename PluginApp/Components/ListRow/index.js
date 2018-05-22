import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  DrawerLayoutAndroid,
  Button,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Touchable from '../../Platform/Touchable'

export default class DrawerLayout extends React.Component {
  constructor(props){
      super(props)
      const {Left} = DrawerLayoutAndroid.positions
      this.state = {
      }
  }
  navigate = (v) => {
    console.log('  navigate ：', v, this.props, )
    // this.props.navigation.navigate(v.route)
  }

  render() {
    console.log('DrawerLayout 组件 this.state, this.props ：', DrawerLayoutAndroid.positions, this.state, this.props, )
    
    const {left, right, leftSytle, rightStyle, rowStyle, wrapperStyle, } = this.props
    
    return (
      <View style={[styles.wrapperStyle, wrapperStyle]}>
        <Touchable
          onPress={this.navigate.bind(this, v)}
          key={v.route}
        >
          <View style={[styles.rowStyle, styles.mb5, rowStyle]} >
            <View style={[styles.rowLeft, leftSytle]}>
              {
                left != undefined ? left : <Icon name={v.icon} size={24} style={styles.icon} />
              }
            </View>
            <View style={[styles.rowRight, rightStyle]}>
              {
                right != undefined ? right : <Text style={styles.text}>{v.name}</Text>
              }
            </View>
          </View>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowWrapper: {
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
    height: 30,
    backgroundColor: 'red',
    
  },

  rowStyle: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  listRight: {
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
    flex: 1, 
    marginLeft: 5,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    
  },





  mb5:{
    marginBottom: 5,
  },
})