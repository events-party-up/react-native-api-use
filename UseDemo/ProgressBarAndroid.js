import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ProgressBarAndroid,
} from 'react-native'


class ProgressBarAndroids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const progressBar =
      <View style={styles.container}>
        <ProgressBar styleAttr="Inverse" />
      </View>;
    return (
      <View style={styles.container}>
        <MyLoadingComponent
          componentView={componentView}
          loadingView={progressBar}
          style={styles.loadingComponent}
        />
      </View>
    );
  }
}

class MovingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    }
  }
  componentDidMount() {
    console.log('MovingBar即将挂载 组件 this.state, this.props ：', this.state, this.props, )
    this.setInterval(
      () => {
        var progress = (this.state.progress + 0.02) % 1;
        this.setState({progress: progress});
      }, 50
    );
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ProgressBar progress={this.state.progress} {...this.props} />
      </View>
    );
  }
}

class ProgressBarAndroidExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Default ProgressBar" */ }
        <ProgressBar />

        {/* Small ProgressBar" */ }
        <ProgressBar styleAttr="Small" />

        {/* Large ProgressBar" */ }
        <ProgressBar styleAttr="Large" />

        {/* Inverse ProgressBar" */ }
        <ProgressBar styleAttr="Inverse" />

        {/* Small Inverse ProgressBar" */ }
        <ProgressBar styleAttr="SmallInverse" />

        {/* Large Inverse ProgressBar" */ }
        <ProgressBar styleAttr="LargeInverse" />

        {/* Horizontal Indeterminate ProgressBar" */ }
        <ProgressBar styleAttr="Horizontal" />

        {/* Horizontal ProgressBar" */ }
        <MovingBar styleAttr="Horizontal" indeterminate={false} />

        {/* Large Red ProgressBar" */ }
        <ProgressBar styleAttr="Large" color="red" />

        {/* Horizontal Black Indeterminate ProgressBar" */ }
        <ProgressBar styleAttr="Horizontal" color="black" />

        {/* Horizontal Blue ProgressBar" */ }
        <MovingBar styleAttr="Horizontal" indeterminate={false} color="blue" />
      </View>
    );
  }
}
export default ProgressBarAndroids;