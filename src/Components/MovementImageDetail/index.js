import React from 'react'
import Styles from "./styles";
import { Image, View } from "react-native";

const MovementImageDetail = ({ image }) => {
  return (
    <View style={{ ...Styles.imageContainer }}>
      <Image
        source={{ uri: image }}
        style={{ ...Styles.image }} 
      />
    </View>
  );
};
export default MovementImageDetail;
