import VirtualKeyboard from 'react-native-virtual-keyboard';

export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	render() {
    console.log('Example 组件 this.state, this.props ：', this.state, this.props, )
		return (
			<View style={{flex:1}}>
				<Text>{this.state.text}</Text>
				<VirtualKeyboard color='white' pressMode='string' onPress={(val) => this.changeText(val)} />
			</View>
		);
	}

	changeText(newText) {
    console.log('changeText ：', newText,  )
		this.setState({text: newText});
	}

}