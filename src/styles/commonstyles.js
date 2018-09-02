import { StyleSheet, Dimensions } from "react-native";

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export default (CommonStyles = StyleSheet.create({
  textContent: {
    flex: 1
  },
  marker: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)"
  },
  bottomView: {
    width: "100%",
    height: 60,
    borderWidth: 2,
    borderColor: "#d6d7da",
    backgroundColor: "#EEEEEE",
    position: "absolute",
    bottom: 0
  },

  textStyle: {
    color: "black",
    fontSize: 22
  },
  textInputStyle: {
    marginLeft: 10,
    marginRight: 10,
    //width: deviceWidth - 110,
    height: 38,
    color: "red",
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    flex: 0.7,
    alignSelf: "center"
  },
  cameraIconStyle: {
    width: 35,
    height: 35,
    alignSelf: "center",
    flex: 0.1
  },
  mainMarkerIconStyle: {
    width: 120,
    height: 120
  },
  nearByIconStyle:{
    width: 50,
    height: 50,
    borderRadius:40
  },
  sendButtonStyle: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 0.2
  },
  sendButtonTextStyle: {
    color: "#FF8786",
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center"
  },
  crashingInfoIcons: {
    width: 25,
    height: 25,
    marginTop: 10
  },
  crashingInfoIconsStyle: {
    flex: 1
    //justifyContent: "flex-end"
  },
  row: {
    flexDirection: "row"
  },
  marginLeftTen: {
    marginLeft: 10
  },
  alignSelfEnd: {
    alignSelf: "flex-end"
  },
  crashingCountStyle: {
    alignSelf: "center",
    justifyContent:"center",
    flex:0.9
  },
  crashingInfoStyle:{
    flex: 0.2, alignSelf: "flex-end",marginBottom:5 
  }
}));
