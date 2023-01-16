import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#020202",
    lineHeight: 27.32,
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 21.86,
    color: "#020202",
  },
  titleModule: {
    fontSize: 14,
    fontWeight: "800",
    color: "#9B9898",
    lineHeight: 19.12,
    textTransform: "uppercase",
    marginVertical: 20,
  },
  listContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    flex: 1,
  },
  cardContainer: {
    paddingHorizontal: 53,
    marginVertical: 20,
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  btn: {
    flex: 1,
    backgroundColor: "#334FFA",
    height: 50,
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 21.86,
  },
});
export default Styles;
