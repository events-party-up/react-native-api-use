import React, { PureComponent, Component } from "react"
import {
  Slider,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'  

import MapView, { Marker, Callout, UrlTile, LocalTile .  } from 'react-native-maps';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },

    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const mapStyle = []
    console.log('MyComponent 组件 this.state, this.props ：', this.state, this.props, )
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />


        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>

        <Marker coordinate={marker.latlng}>
          {/* <MyCustomMarkerView {...marker} /> */}
        </Marker>

        <Marker
          coordinate={marker.latlng}
          image={require('../assets/pin.png')}
        />

        <Marker coordinate={marker.latlng}>
          {/* <MyCustomMarkerView {...marker} /> */}
          <Callout>
            {/* <MyCustomCalloutView {...marker} /> */}
          </Callout>
        </Marker>

        <MapView initialRegion={...}>
          <Marker draggable
            coordinate={this.state.x}
            onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
          />
        </MapView>


        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <UrlTile
            urlTemplate={this.state.urlTemplate}
            maximumZ={19}
          />
        </MapView>


        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <LocalTile
            pathTemplate={this.state.pathTemplate}
            tileSize={256}
          />
        </MapView>

        <MapView
          mapType={Platform.OS == "android" ? "none" : "standard"}
        />

        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
          customMapStyle={mapStyle}
        />

      </View>
    );
  }
}