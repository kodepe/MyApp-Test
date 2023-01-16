import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 13,
  },
  imageContainer: {
    width: 55,
    height: 55,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 12,
    resizeMode: "cover",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
    paddingLeft: 11,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 19.12,
    marginTop: 3.5,
    marginBottom: 7,
  },
  productDate: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16.39,
  },
  poinstContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  points: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 21.86,
  },
  icon: {
    width: 10,
    height: 10,
    marginLeft: 15,
  },
});
export default Styles;
