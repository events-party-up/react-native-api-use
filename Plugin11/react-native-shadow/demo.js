import React, {Component} from 'react'
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight
} from 'react-native'

import {BoxShadow} from 'react-native-shadow'

export default class VideoCell extends Component {
	render = () => {
		const shadowOpt = {
			width:160,
			height:170,
			color:"#000",
			border:2,
			radius:3,
			opacity:0.2,
			x:0,
			y:3,
			style:{marginVertical:5}
		}
		console.log('VideoCell 组件 this.state, this.props ：', this.state, this.props, )
		return (
			<BoxShadow setting={shadowOpt}>
				<TouchableHighlight style={{
					position:"relative",
					width: 160,
					height: 170,
					backgroundColor: "#fff",
					borderRadius:3,
					// marginVertical:5,
					overflow:"hidden"}}>
					…………………………
				</TouchableHighlight>
			</BoxShadow>
		)
	}
}