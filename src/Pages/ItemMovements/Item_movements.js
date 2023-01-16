import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import styles from "./styles";
import HeaderItemDetail from "../../Components/HeaderItemDetail";
import MovementImageDetail from "../../Components/MovementImageDetail";
import parseDate from "../../utils/parseDate";
const ItemMovementsPage = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <SafeAreaView style={{ backgroundColor: "#CFD6FF" }} />
      <HeaderItemDetail title={item.product} />
      <MovementImageDetail image={item.image} />
      <View style={styles.container}>
        <Text style={styles.label}>{"Detalles del producto:"}</Text>
        <Text style={styles.date}>
          {`Comprado el ${parseDate(item.createdAt)}`}{" "}
        </Text>
        <Text style={styles.label}>{"Con esta compra acumulaste:"}</Text>
        <Text style={styles.points}>{`${item.points} puntos`}</Text>
        <Pressable
          style={{ ...styles.btn }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.btnText}>{"Aceptar"}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ItemMovementsPage;
