import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import PushNotification from 'react-native-push-notification'

export default class MyComponent extends Component {
  componentDidMount() {
    console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
    
    PushNotification.configure({
      
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
        },
    
        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
    
            // process the notification
    
            // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
    
        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "YOUR GCM SENDER ID",
    
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },
    
        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,
    
        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
    });

  }
  
  render() {
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <CollapsingToolbar 
            leftItem={<Icon name="md-menu" size={30} color="#fff" />}
            rightItem={<Icon name="md-create" size={30}  color="#fff" />}   
            toolbarColor='#2196f3'  
            title='Demo Toolbar'
            src={require('../../../images/drawer6.png')}>
            <Text>
                Create             
            </Text>
        </CollapsingToolbar>
      </View>
    );
  }
}