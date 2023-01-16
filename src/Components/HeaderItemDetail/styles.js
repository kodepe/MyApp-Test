import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 24,
    color: "#000",
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: "#CFD6FF",
    paddingBottom: 24,
    width: Dimensions.get("screen").width,
    height: 70,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});
export default Styles;
