import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    islocationFound:false
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: position.coords.latitudeDelta,
          longitudeDelta: position.coords.longitudeDelta,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View
        style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}
      >
       <Text>Latitude: {this.state.latitude}</Text>
       <Text>Longitude:{this.state.longitude}</Text>
       <Text>LatitudeDelta:{this.state.latitudeDelta}</Text>
       <Text>LongitudeDelta:{this.state.longitudeDelta}</Text>
       {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
