import React from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
} from 'react-native'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          {(state, setState) => (
            <Row fullHeight aspectRatio={{ratio: '3:2', orientation: "portrait"}}>
                <Image source={require('./assets/homepage hero-3-2-portrait.jpg')} style={styles.homeImage}></Image>
            </Row>

            <Row fullHeight aspectRatio={{ratio: '3:2', orientation: "landscape"}}>
                <Image source={require('./assets/homepage hero-3-2-landscape.jpg')} style={styles.homeImage}></Image>
            </Row>

            <Row fullHeight aspectRatio={{ratio: '16:9', orientation: "portrait"}}>
                <Image source={require('./assets/homepage hero-16-9-portrait.jpg')} style={styles.homeImage}></Image>
            </Row>

            <Row fullHeight aspectRatio={{ratio: '16:9', orientation: "landscape"}}>
                <Image source={require('./assets/homepage hero-16-9-landscape.jpg')} style={styles.homeImage}></Image>
            </Row>
          )}
      </Grid>
    </View>
    );
  }
}