
import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native'

import Swipeable from 'react-native-swipeable';
const leftContent = <Text>Pull to activate</Text>;
const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

export default class MyListItem extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		};
		this.swipeable = null;
	}
	handleUserBeganScrollingParentView() {
		console.log('handleUserBeganScrollingParentView ：', )
		this.swipeable.recenter();
	}
	render() {
		console.log('MyListItem 组件 this.state, this.props ：', this.state, this.props, )
		return (
			<View style={styles.container}>
				<Swipeable leftContent={leftContent} rightButtons={rightButtons}>
					<Text>My swipeable content</Text>
				</Swipeable>

				<Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
					<Text>My swipeable content</Text>
				</Swipeable>
			</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});