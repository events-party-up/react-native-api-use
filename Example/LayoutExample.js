import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

export default class Circle extends React.Component {
  render() {
    const size = this.props.size || 20;
    const backgroundColor = this.props.bgColor || '#527fe4';
    console.log('Circle 组件 this.state, this.props ：', this.props, size, backgroundColor, )
    return (
      <View
        style={{
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
          width: size,
          height: size,
          margin: 1,
        }}
      />
    );
  }
}

export default class CircleBlock extends React.Component {
  render() {
    const circleStyle = {
      flexDirection: 'row',
      backgroundColor: '#f6f7f8',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      marginBottom: 2,
    };
    console.log('CircleBlock 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View style={[circleStyle, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

export default class LayoutExample extends React.Component {
  render() {
    const fiveColoredCircles = [
      <Circle bgColor="#527fe4" key="blue" />,
      <Circle bgColor="#D443E3" key="violet" />,
      <Circle bgColor="#FF9049" key="orange" />,
      <Circle bgColor="#FFE649" key="yellow" />,
      <Circle bgColor="#7FE040" key="green" />
    ];
    console.log('LayoutExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View title={this.props.navigator ? null : 'Layout'}>
        <View title="Flex Direction">
          <Text>row</Text>
          <CircleBlock style={{flexDirection: 'row'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>row-reverse</Text>
          <CircleBlock style={{flexDirection: 'row-reverse'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>column</Text>
          <CircleBlock style={{flexDirection: 'column'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>column-reverse</Text>
          <CircleBlock style={{flexDirection: 'column-reverse'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <View style={[styles.overlay, {position: 'absolute', top: 15, left: 160}]}>
            <Text>{'top: 15, left: 160'}</Text>
          </View>
        </View>

        <View title="Justify Content - Main Direction">
          <Text>flex-start</Text>
          <CircleBlock style={{justifyContent: 'flex-start'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>center</Text>
          <CircleBlock style={{justifyContent: 'center'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>flex-end</Text>
          <CircleBlock style={{justifyContent: 'flex-end'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>space-between</Text>
          <CircleBlock style={{justifyContent: 'space-between'}}>
            {fiveColoredCircles}
          </CircleBlock>
          <Text>space-around</Text>
          <CircleBlock style={{justifyContent: 'space-around'}}>
            {fiveColoredCircles}
          </CircleBlock>
        </View>
        <View title="Align Items - Other Direction">
          <Text>flex-start</Text>
          <CircleBlock style={{alignItems: 'flex-start', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
          <Text>center</Text>
          <CircleBlock style={{alignItems: 'center', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
          <Text>flex-end</Text>
          <CircleBlock style={{alignItems: 'flex-end', height: 30}}>
            <Circle size={15} /><Circle size={10} /><Circle size={20} />
            <Circle size={17} /><Circle size={12} /><Circle size={15} />
            <Circle size={10} /><Circle size={20} /><Circle size={17} />
            <Circle size={12} /><Circle size={15} /><Circle size={10} />
            <Circle size={20} /><Circle size={17} /><Circle size={12} />
            <Circle size={15} /><Circle size={8} />
          </CircleBlock>
        </View>
        <View title="Flex Wrap">
          <CircleBlock style={{flexWrap: 'wrap'}}>
            {'oooooooooooooooo'.split('').map((char, i) => <Circle key={i} />)}
          </CircleBlock>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: '#aaccff',
    borderRadius: 10,
    borderWidth: 0.5,
    opacity: 0.5,
    padding: 5,
  },
});
