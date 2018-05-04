
import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ListView
} from 'react-native'
import Accordion from 'react-native-accordion';


export default class YourComponent extends Component {
	constructor(props) {
	  super(props);
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
		dataSource: ds.cloneWithRows(_.range(25)),
	  };
	}
	render() {
		console.log('YourComponent 组件 this.state, this.props ：', this.state, this.props, )
		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
				/>
			</View>
		);
	}

	_renderRow() {
		const header = (
			<View>
			<Text>Click to Expand</Text>
			</View>
		);

		const content = (
			<View>
			<Text>This content is hidden in the accordion</Text>
			</View>
		);

		return (
			<Accordion
				header={header}
				content={content}
				easing="easeOutCubic"
			/>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});