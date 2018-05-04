import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

import { GiftedChat } from 'react-native-gifted-chat'

export default class Example extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    console.log(' componentDidMount组件即将挂载 ：', this.state, this.props,  )
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }

  onSend = (messages = []) => {
    console.log('onSend ：', messages )
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});