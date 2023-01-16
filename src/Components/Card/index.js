import React from 'react'
import Styles from "./styles";
import moment from "moment";
import { View, Text } from "react-native";

const CardPoints = ({ points = "" }) => {
  return (
    <View style={Styles.card} testID="CardPoints-test">
      <Text style={Styles.date}>{moment().format("MMMM")}</Text>
      <Text style={Styles.points}>{`${points} pts`}</Text>
    </View>
  );
};
export default CardPoints;
