import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;

export default class App extends Component<{}> {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem : 2,
			itemList: ['刘备', '张飞', '关羽', '赵云', '黄忠', '马超', '魏延', '诸葛亮']
		};
	}
	onPickerSelect (index) {
    console.log('onPickerSelect ：', index)
		this.setState({
			selectedItem: index,
		})
	}
	onAddItem = () => {
    console.log('onAddItem ：', )
		var name = '司马懿'
		if (this.state.itemList.indexOf(name) == -1) {
			this.state.itemList.push(name)
		}
		this.setState({
			selectedItem: this.state.itemList.indexOf(name),
		})
	}
	render () {
    console.log('App 组件 this.state, this.props ：', this.state, this.props, )
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Picker style={{width: 150, height: 180}}
					selectedValue={this.state.selectedItem}
					itemStyle={{color:"white", fontSize:26}}
					onValueChange={(index) => this.onPickerSelect(index)}>
						{this.state.itemList.map((value, i) => (
							<PickerItem label={value} value={i} key={"money"+value}/>
						))}
				</Picker>
				<Text style={{margin: 20, color: '#ffffff'}}>
					你最喜欢的是：{this.state.itemList[this.state.selectedItem]}
				</Text>

				<Text style={{margin: 20, color: '#ffffff'}}
						onPress={this.onAddItem}>
			怎么没有司马懿？
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1962dd',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});