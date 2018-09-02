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
    TouchableOpacity,
    Easing
} from "react-native";
import CommonStyles, {
    deviceWidth,
    deviceHeight
} from "../styles/commonstyles";
import renderif from "../common/renderif";

export default class ChatList extends Component {
    state = {
        chatListArray: []
    };
    componentDidMount() {
        let arry = [];
        let chatMessage1 = {
            image: require("../assets/ImageScott.jpg"),
            message: "350 Goldern Park Avenue",
            name: "John Doe",
            time: "1h ago",
            // chatImage: ""
        };
        arry.push(chatMessage1);
        let chatMessage2 = {
            image: require("../assets/lucas-scott.jpg"),
            message: "Loren Epsum dolor sit amet consectutur adipiscing",
            name: "Lucas Scott",
            time: "2h ago",
            //chatImage: ""
        };
        arry.push(chatMessage2);
        let chatMessage3 = {
            image: require("../assets/ImageScott.jpg"),
            message: "350 Goldern Park Avenue",
            name: "John Doe",
            time: "2h ago",
            chatImage: require("../assets/burger-cropped.jpg")
        };
        arry.push(chatMessage3);

        this.setState({
            chatListArray: arry
        });


    }

    render() {
        var chatList = this.state.chatListArray.map(function (chatMessage, index) {
            var numberType = (index + 1) % 2;

            var dynamicStyle;
            var alternateColor;
            var fontColor;
            if (numberType == 0) {
                dynamicStyle = "flex-end";
                alternateColor = "#FF6562";
                fontColor = "white";
            } else {
                dynamicStyle = "flex-start";
                alternateColor = "white";
                fontColor = "black";
            }

            return (
                <View
                    style={[CommonStyles.row, { justifyContent: dynamicStyle }]}
                    key={index}
                >
                    {renderif(
                        numberType != 0,
                        <View style={styles.chatImageContainerStyle}>
                            <Image
                                resizeMode="cover"
                                style={styles.chatImageStyle}
                                borderRadius={30}
                                source={chatMessage.image}
                            />
                        </View>
                    )}
                    {renderif(
                        numberType != 0,
                        <View style={{ flex: 0.7 }}>
                            <View>
                                <Text style={[styles.timeFont, { paddingBottom: 5 }]}>
                                    {chatMessage.time}
                                    {" - "}
                                    {chatMessage.name}
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.textContainerStyle,
                                    { backgroundColor: alternateColor }
                                ]}
                            >
                                {renderif(
                                    chatMessage.chatImage == undefined,
                                    <Text style={{ padding: 10, width: "80%" }}>
                                        {chatMessage.message}
                                    </Text>
                                )}
                                {renderif(
                                    chatMessage.chatImage != "",
                                    <Image
                                        resizeMode="cover"
                                        style={styles.chatImageMessageStyle}
                                        borderRadius={20}
                                        source={chatMessage.chatImage}
                                    />
                                )}
                            </View>
                        </View>
                    )}
                    {renderif(
                        numberType == 0,
                        <View style={{ flex: 0.7 }}>
                            <View style={[CommonStyles.alignSelfEnd]}>
                                <Text style={[styles.timeFont, { paddingBottom: 5 }]}>
                                    {chatMessage.time}
                                    {" - "}
                                    {chatMessage.name}
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.textContainerStyle,
                                    { backgroundColor: alternateColor }
                                ]}
                            >
                                {renderif(
                                    chatMessage.chatImage == undefined,
                                    <Text
                                        style={{
                                            padding: 10,
                                            width: "80%",
                                            alignSelf: "flex-end",
                                            color: fontColor
                                        }}
                                    >
                                        {chatMessage.message}
                                    </Text>
                                )}
                                {renderif(
                                    chatMessage.chatImage != "",
                                    <Image
                                        resizeMode="cover"
                                        style={styles.chatImageMessageStyle}
                                        borderRadius={20}
                                        source={chatMessage.chatImage}
                                    />
                                )}
                            </View>
                        </View>
                    )}
                    {renderif(
                        numberType == 0,
                        <View style={styles.chatImageContainerStyle}>
                            <Image
                                resizeMode="cover"
                                style={styles.chatImageStyle}
                                borderRadius={30}
                                source={chatMessage.image}
                            />
                        </View>
                    )}
                </View>
            );
        }, this);

        return <View>{chatList}</View>;
    }
}

const styles = StyleSheet.create({
    chatImageStyle: {
        height: 45,
        width: 45
    },
    chatImageMessageStyle: {
        height: 150,
        width: "100%"
    },
    timeFont: {
        fontSize: 12,
        justifyContent: "flex-end"
    },
    chatImageContainerStyle: {
        paddingLeft: 10,
        paddingTop: 20,
        paddingRight: 10,
        flex: 0.15
    },
    textContainerStyle: {
        alignSelf: "center",
        width: "100%",
        borderRadius: 20
    }
});
