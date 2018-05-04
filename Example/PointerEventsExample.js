import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

class ExampleBox extends React.Component {
  state = {
    log: [],
  };

  handleLog = (msg) => {
    console.log('handleLog ：', msg)
    this.state.log = this.state.log.concat([msg]);
  };

  flushReactChanges = () => {
    console.log('flushReactChanges ：', )
    this.forceUpdate();
  };

  /**
   * Capture phase of bubbling to append separator before any of the bubbling
   * happens.
   */
  handleTouchCapture = () => {
    console.log('handleTouchCapture ：', )
    this.state.log = this.state.log.concat(['---']);
  };

  render() {
    console.log('ExampleBox 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <View
          onTouchEndCapture={this.handleTouchCapture}
          onTouchStart={this.flushReactChanges}>
          <this.props.Component onLog={this.handleLog} />
        </View>
        <View
          style={styles.logBox}>
          <DemoText style={styles.logText}>
            {this.state.log.join('\n')}
          </DemoText>
        </View>
      </View>
    );
  }
}

class NoneExample extends React.Component {
  render() {
    console.log('NoneExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View
        onTouchStart={() => this.props.onLog('A unspecified touched')}
        style={styles.box}>
        <DemoText style={styles.text}>
          A: unspecified 未指定触摸
        </DemoText>
        <View
          pointerEvents="none"
          onTouchStart={() => this.props.onLog('B none touched')}
          style={[styles.box, styles.boxPassedThrough]}>
          <DemoText style={[styles.text, styles.textPassedThrough]}>
            B: none 无触摸
          </DemoText>
          <View
            onTouchStart={() => this.props.onLog('C unspecified touched')}
            style={[styles.box, styles.boxPassedThrough]}>
            <DemoText style={[styles.text, styles.textPassedThrough]}>
              C: unspecified 未指定触摸
            </DemoText>
          </View>
        </View>
      </View>
    );
  }
}

/**
 * Special demo text that makes itself untouchable so that it doesn't destroy
 * the experiment and confuse the output.
 */
class DemoText extends React.Component {
  render() {
    console.log('DemoText 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View pointerEvents="none">
        <Text
          style={this.props.style}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

class BoxNoneExample extends React.Component {
  render() {
    console.log('BoxNoneExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View
        onTouchStart={() => this.props.onLog('A unspecified touched')}
        style={styles.box}>
        <DemoText style={styles.text}>
          A: unspecified 未指定触摸
        </DemoText>
        <View
          pointerEvents="box-none"
          onTouchStart={() => this.props.onLog('B box-none touched')}
          style={[styles.box, styles.boxPassedThrough]}>
          <DemoText style={[styles.text, styles.textPassedThrough]}>
            B: box-none 仅仅盒子触摸
          </DemoText>
          <View
            onTouchStart={() => this.props.onLog('C unspecified touched')}
            style={styles.box}>
            <DemoText style={styles.text}>
              C: unspecified 未指定触摸
            </DemoText>
          </View>
          <View
            pointerEvents="auto"
            onTouchStart={() => this.props.onLog('C explicitly unspecified touched')}
            style={[styles.box]}>
            <DemoText style={[styles.text]}>
              C: explicitly unspecified 明确未指定触摸
            </DemoText>
          </View>
        </View>
      </View>
    );
  }
}

class BoxOnlyExample extends React.Component {
  render() {
    console.log('BoxOnlyExample 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View
        onTouchStart={() => this.props.onLog('A unspecified touched')}
        style={styles.box}>
        <DemoText style={styles.text}>
          A: unspecified 未指定触摸
        </DemoText>
        <View
          pointerEvents="box-only"
          onTouchStart={() => this.props.onLog('B box-only touched')}
          style={styles.box}>
          <DemoText style={styles.text}>
            B: box-only 仅仅盒子触摸
          </DemoText>
          <View
            onTouchStart={() => this.props.onLog('C unspecified touched')}
            style={[styles.box, styles.boxPassedThrough]}>
            <DemoText style={[styles.text, styles.textPassedThrough]}>
              C: unspecified 未指定触摸
            </DemoText>
          </View>
          <View
            pointerEvents="auto"
            onTouchStart={() => this.props.onLog('C explicitly unspecified touched')}
            style={[styles.box, styles.boxPassedThrough]}>
            <DemoText style={[styles.text, styles.textPassedThrough]}>
              C: explicitly unspecified 明确未指定触摸
            </DemoText>
          </View>
        </View>
      </View>
    );
  }
}


const infoToExample = (info) => {
  console.log('infoToExample ：', info)
  return {
    title: info.title,
    description: info.description,
    render: function() {
      return <ExampleBox key={info.title} Component={info.Component} />;
    },
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: '#5577cc',
  },
  textPassedThrough: {
    color: '#88aadd',
  },
  box: {
    backgroundColor: '#aaccff',
    borderWidth: 1,
    borderColor: '#7799cc',
    padding: 10,
    margin: 5,
  },
  boxPassedThrough: {
    borderColor: '#99bbee',
  },
  logText: {
    fontSize: 9,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
  bottomSpacer: {
    marginBottom: 100,
  },
});

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log('Demo 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>none</Text>
        <NoneExample></NoneExample>

        <Text style={styles.text}>box-none</Text>
        <BoxNoneExample></BoxNoneExample>

        <Text style={styles.text}>box-only</Text>
        <BoxOnlyExample></BoxOnlyExample>
      </ScrollView>
    );
  }
}
