import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import MapView from "react-native-maps";
import renderIf from "../src/common/renderif";
import CommonStyles from "../src/styles/commonstyles";
import SlidingPanel from "../src/components/slidingchatdetail";




export default class Main extends Component {
    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    },
                    error: null,
                    isLocationCaptured: true
                });

                let mainMarker = {
                    coordinate: {
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude
                    },
                    image: require("../src/assets/MainMarker.png"),
                    style: {
                        width: 120,
                        height: 120
                    }
                };

                let nearBuyMarker = {
                    coordinate: {
                        latitude: this.state.region.latitude + 0.011000,
                        longitude: this.state.region.longitude - 0.031000
                    },
                    image: require("../src/assets/Julian.png"),
                    style: {
                        width: 50,
                        height: 50,
                        borderRadius: 40
                    }
                };

                let far1 = {
                    coordinate: {
                        latitude: this.state.region.latitude + 0.021000,
                        longitude: this.state.region.longitude + 0.031000
                    },
                    image: require("../src/assets/farAway.png"),
                    style: {
                        width: 50,
                        height: 50,
                        borderRadius: 40
                    }
                };

                let far2 = {
                    coordinate: {
                        latitude: this.state.region.latitude - 0.031000,
                        longitude: this.state.region.longitude
                    },
                    image: require("../src/assets/farAway.png"),
                    style: {
                        width: 50,
                        height: 50,
                        borderRadius: 40
                    }
                };

                this.setState({ markers: [...this.state.markers, mainMarker] });
                this.setState({ markers: [...this.state.markers, nearBuyMarker] });
                this.setState({ markers: [...this.state.markers, far1] });
                this.setState({ markers: [...this.state.markers, far2] });
            },
            error => this.setState({ error: error.message }),
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 1000000
            }
        );
    }

    componentWillMount() {

    }
    state = {
        markers: [],
        region: {
            latitude: 13.042109655216336,
            longitude: 80.20042464137077,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        isLocationCaptured: false
    };
    render() {
        return (
            <View style={styles.container}>
                {renderIf(
                    this.state.isLocationCaptured,
                    <MapView
                        ref={map => (this.map = map)}
                        initialRegion={this.state.region}
                        style={styles.container}
                    >
                        {this.state.markers.map((marker, index) => {
                            return (
                                <MapView.Marker key={index} coordinate={marker.coordinate}>

                                    <Image
                                        style={marker.style}
                                        source={marker.image}
                                    />
                                </MapView.Marker>
                            );
                        })}
                    </MapView>
                )}
                <SlidingPanel />

                <View style={CommonStyles.bottomView}>
                    <View style={styles.bottomViewControls}>
                        <Image
                            style={CommonStyles.cameraIconStyle}
                            source={require("../src/assets/camera.png")}
                        />
                        <TextInput
                            placeholder={"Message"}
                            underlineColorAndroid="transparent"
                            style={CommonStyles.textInputStyle}
                        />
                        <TouchableOpacity style={CommonStyles.sendButtonStyle}>
                            <Text style={CommonStyles.sendButtonTextStyle}>{"Send"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomViewControls: {
        flex: 1,
        flexDirection: "row"
    }
});
