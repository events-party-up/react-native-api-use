import React, { Component } from 'react';
import { View } from 'react-native';
import CircleButton from 'react-native-circle-button';

export default class MyExample extends Component {
    render() {
		console.log('MyExample 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <View style={{ flex: 1 }}>
                <CircleButton size={45} />
            </View>
        );
    }
}

export default MyExample;