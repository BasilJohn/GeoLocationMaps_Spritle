import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from "react-native";
import CommonStyles,{deviceWidth,deviceHeight} from "../styles/commonstyles";

export default class RippleView extends Component {

    state = {
        animatedOpacity: new Animated.Value(0)
    }

    componentDidMount() {

        const { animatedOpacity } = this.state;
        

        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 1000
        }).start();
    }
    render() {
        
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.circularView, {
                    transform: [{
                        scale: this.state.animatedOpacity
                    }]
                }]}>
                </Animated.View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: deviceHeight/2.75,
        left: deviceWidth-50

    },
    circularView: {


        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "lightblue",


    }
});
