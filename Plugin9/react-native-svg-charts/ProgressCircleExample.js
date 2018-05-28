import React from 'react'
import { ProgressCircle }  from 'react-native-svg-charts'

export default class ProgressCircleExample extends React.PureComponent {
    render() {
        console.log('ProgressCircleExample 组件 this.state, this.props ：', this.state, this.props, )
        return (
            <ProgressCircle
                style={ { height: 200 } }
                progress={ 0.7 }
                progressColor={'rgb(134, 65, 244)'}
            />
        )
    }

}