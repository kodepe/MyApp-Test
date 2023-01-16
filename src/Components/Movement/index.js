import React from 'react'
import Styles from "./styles";
import { Text, View, Image, Pressable } from "react-native";
import parseDate from "../../utils/parseDate";
const Movement = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          resizeMethod="resize"
          resizeMode="contain"
          style={Styles.image}
        />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.productTitle}>{item.product}</Text>
        <Text style={Styles.productDate}>{parseDate(item.createdAt)}</Text>
      </View>
      <View style={Styles.poinstContainer}>
        <Text
          style={{
            ...Styles.points,
            color: item.is_redemption ? "#FF0000" : "#00B833",
          }}
        >
          {item.is_redemption ? "-" : "+"}
        </Text>
        <Text>{item.points}</Text>
        <Image
          source={require("../../../assets/chevron.png")}
          style={Styles.icon}
        />
      </View>
    </Pressable>
  );
};

export default Movement;
