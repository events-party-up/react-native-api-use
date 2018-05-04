import React, { StyleSheet, View, Component } from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	chart: {
		width: 200,
		height: 200,
	},
});

const data = [[
	[0, 1],
	[1, 3],
	[3, 7],
	[4, 9],
]];

export default class SimpleChart extends Component {
	render() {
		console.log('SimpleChart 组件 this.state, this.props ：', this.state, this.props, )
		return (
			<View style={styles.container}>
				<Bubbles size={10} color="#FFF" />
				<Bars size={10} color="#FDAAFF" />
				<Pulse size={10} color="#52AB42" />
				<DoubleBounce size={10} color="#1CAFF6" />
			</View>
		);
	}
}