import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 10,
  },
  imageContainer: {
    maxWidth: "100%",
    maxHeight: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#fff",
    // padding: 75,
  },
});
export default Styles;
