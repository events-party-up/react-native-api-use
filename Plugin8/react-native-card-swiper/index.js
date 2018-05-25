
var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    View,
    Text,
} = ReactNative;
var CardSwiper = require('@remobile/react-native-card-swiper');
import CardSwiper from '@remobile/react-native-card-swiper'

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            vertical: false,
    }
  }
  renderRow(obj, index) {
      return (
          <View style={styles.panel}>
              <Text>{obj}</Text>
          </View>
      )
  }
  onPressRow(obj, index) {
      console.log('onPressRow', obj, index);
  }
  onChange(obj, index) {
      console.log('onChange', obj, index);
  }
  render() {
    const {vertical} = this.props;
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={[styles.container, {paddingLeft: vertical ? 50 : 0}]}>
        <CardSwiper
            list={[1, 2, 3]}
            vertical={vertical}
            width={vertical ? 180 : sr.tw}
            height={vertical ? sr.th/2 : 150}
            loop={true}
            onPress={this.onPressRow}
            onChange={this.onChange}
            renderRow={this.renderRow}
            />
      </View>
    );
  }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
    },
    panel: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});