import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, flex: 1 },
  label: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19.12,
    color: "#9B9898",
    marginVertical: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
    color: "#000",
    marginVertical: 8,
  },
  points: {
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 22,
    color: "#000",
    marginVertical: 20,
  },
  btn: {
    flex: 1,
    backgroundColor: "#334FFA",
    height: 50,
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 40,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 21.86,
  },
});

export default styles;
