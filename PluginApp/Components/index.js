import React, { PureComponent, Component } from "react"
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DrawerLayout from './Views/DrawerLayout'

import Home from './Views/Home'
import Draw1 from './Views/Draw1'
import Draw2 from './Views/Draw2'
import SideBar from './Views/SideBar'
import Welcome from './Views/Welcome'

export const sideBarConfig = [
  {
    name: "Home",
    route: "Home",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw1",
    route: "Draw1",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw2",
    route: "Draw2",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },

  {
    name: "Draw3",
    route: "Draw3",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw4",
    route: "Draw4",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw5",
    route: "Draw5",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw6",
    route: "Draw6",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw7",
    route: "Draw7",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw8",
    route: "Draw8",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw9",
    route: "Draw9",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
  {
    name: "Draw10",
    route: "Draw10",
    icon: "ios-finger-print",
    bg: "#C5F442"
  },
]


const stackConfig = {
  // headerMode: 'none',
  mode: 'card',
}

const headerTitleStyle = {
  // width: 360,
  // fontSize: 30,
  flex: 1,
  // backgroundColor: 'red',
  textAlign:'center', 
  alignSelf: 'center', 
  color: 'white',
}

const setUp = StackNavigator({
  DrawerLayout: {
    screen: DrawerLayout,
    navigationOptions: {
      header: null,
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor: 'darkslateblue',
      },
      headerTitleStyle: {
        ...headerTitleStyle
      }
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerTitle: 'Home',
      headerStyle: {
        backgroundColor: 'darkslateblue',
      },
      headerTitleStyle: {
        ...headerTitleStyle
      }
    }
  },
}, stackConfig)

export default setUp

