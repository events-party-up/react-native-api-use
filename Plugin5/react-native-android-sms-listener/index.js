import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import SmsListener from 'react-native-android-sms-listener'

export default class MyComponent extends Component {
    componentDidMount() {
        console.log(' 组件componentDidMount挂载 ：', this.state, this.props, )
        SmsListener.addListener(message => {
            console.info(message)
        })

        const subscription = SmsListener.addListener(message => {
            let verificationCodeRegex = /Your verification code: ([\d]{6})/
          
            if (verificationCodeRegex.test(message.body)) {
              let verificationCode = message.body.match(verificationCodeRegex)[1]
          
              YourPhoneVerificationApi.verifyPhoneNumber(
                message.originatingAddress,
                verificationCode
              ).then(verifiedSuccessfully => {
                if (verifiedSuccessfully) {
                  subscription.remove()
                  return
                }
          
                if (__DEV__) {
                  console.info(
                    'Failed to verify phone `%s` using code `%s`',
                    message.originatingAddress,
                    verificationCode
                  )
                }
              })
            }
        })
    }
    
    render() {
        console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View>
            </View>
        );
    }
  }