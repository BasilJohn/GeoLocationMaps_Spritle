import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Animated,
    Image,
    TouchableOpacity,
    PanResponder,
    Text
} from "react-native";
import CommonStyles, { deviceHeight } from "../styles/commonstyles";
import ChatList from "../components/chatlist";
import RippleView from "../common/rippleView";

const touchThreshold = 20;
export default class Main extends Component {
    constructor(props) {
        super(props);
        this._panResponder = {};
        this._onPanResponderMove = this._onPanResponderMove.bind(this);
        this._openSlidingPanel = this._openSlidingPanel.bind(this);
    }

    state = {
        fadeAnim: new Animated.Value(deviceHeight / 2.5),
        toggleFlag: false
    };

    _onPanResponderMove(evt, gestureState) {
        Animated.spring(this.state.fadeAnim, {
            toValue: deviceHeight / 2.5,
            bouncinesss: 10
        }).start();
    }


    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gestureState) => {
                const { dx, dy } = gestureState;

                return Math.abs(dx) > touchThreshold || Math.abs(dy) > touchThreshold;
            },
            onMoveShouldSetResponderCapture: (evt, gestureState) => true,

            onPanResponderMove: this._onPanResponderMove
        });
    }

    _openSlidingPanel() {
        Animated.spring(this.state.fadeAnim, {
            toValue: deviceHeight - 50,
            //stiffness:70
            bouncinesss: 10
            //useNativeDriver: true
        }).start();
    }

    render() {
        return (
            <Animated.View
                style={[styles.container, { height: this.state.fadeAnim }]}
                {...this._panResponder.panHandlers}
            >
                <View style={styles.crashingInfo}>
                    <View style={[CommonStyles.row, CommonStyles.crashingInfoIconsStyle]}>
                        <View style={CommonStyles.crashingCountStyle}>

                            <Text>{"03 Friends Crashing"}</Text>
                        </View>
                        <View style={[CommonStyles.row, CommonStyles.crashingInfoStyle]}>
                            <Image
                                style={CommonStyles.crashingInfoIcons}
                                source={require("../assets/informationbutton.png")}
                            />

                            <TouchableOpacity onPress={this._openSlidingPanel}>
                                <View>

                                    <Image
                                        style={[
                                            CommonStyles.crashingInfoIcons,
                                            CommonStyles.marginLeftTen
                                        ]}
                                        source={require("../assets/rightarrow.png")}
                                    />

                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
                <ChatList />

            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight / 2.5,
        backgroundColor: "#EEEEEE",
        bottom: 0
    },
    crashingInfo: {
        borderBottomWidth: 1,
        borderColor: "#DDDDDD",
        height: 45,
        width: "90%",
        alignSelf: "center",
        flexDirection: "row"
    }
});
