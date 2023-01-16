import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 143,
    backgroundColor: "#334FFA",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 21,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  date: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 21.86,
    textTransform: "capitalize",
    marginBottom: 7,
  },
  points: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 32,
    lineHeight: 44,
    width: "100%",
    textAlign: "center",
  },
});
export default Styles;
