import React from 'react'
import Styles from "./styles";
import { Text, View } from "react-native";

const HeaderItemDetail = ({ title }) => {
  return (
    <View style={{ ...Styles.header }}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
};
export default HeaderItemDetail;
