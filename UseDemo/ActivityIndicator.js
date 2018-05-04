import React from "react"
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    }
  }
  setToggleTimeout = () => {
    console.log('setToggleTimeout ：', )
    this.setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  }

  componentDidMount() {
    this.setToggleTimeout();
  }
  
  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* Default  */}
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
        />

        {/* Gray  */}
        <View>
          <ActivityIndicator
            style={[styles.centering]}
          />
          <ActivityIndicator
            style={[styles.centering, {backgroundColor: '#eeeeee'}]}
          />
        </View>

        {/* Custom colors', */}
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
        
        {/* large */}
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
          size="large"
        />

        {/* Large, custom colors */}
        <View style={styles.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>

        {/* Start/stop */}
        <ToggleAnimatingActivityIndicator />
        
        {/* Custom size */}
        <ActivityIndicator
          style={[styles.centering, {transform: [{scale: 1.5}]}]}
          size="large"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

export default Home;