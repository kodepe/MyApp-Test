import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView, Pressable } from "react-native";
import Styles from "./styles";
import Movement from "../../Components/Movement";
import useMount from "../../hooks/useMount";
import UseFetch from "../../hooks/useFetch";
import CardPoints from "../../Components/Card";
import AcumulatePoints from "../../utils/acumulatePoints";
const ListMovementsPage = ({ navigation }) => {
  const { proccessQuery, data, loading } = UseFetch();
  const [points, setPoints] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  useEffect(() => {
    if (data) {
      setIsFilter(false);
      setPoints(data);
    }
  }, [data]);

  const filter = (isRedemption) => {
    const list = points.filter((v) => v.is_redemption == isRedemption);
    setPoints(list);
    setIsFilter(true);
  };
  const reset = () => {
    setPoints(data);
    setIsFilter(false);
  };

  useMount(() => {
    setIsFilter(false);
    proccessQuery();
  });
  if (loading) {
    <View>
      <Text>Loading...</Text>
    </View>;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <View
        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#F8F8F8" }}
      >
        <Text style={Styles.title}>{"Bienvenido de vuelta!"}</Text>
        <Text style={Styles.name}>{"Ruben Rodriguez"}</Text>
        <Text style={Styles.titleModule}>{"Tus puntos"}</Text>
        <View style={Styles.cardContainer}>
          <CardPoints points={AcumulatePoints(data)} />
        </View>
        <Text style={Styles.titleModule}>{"Tus Movimientos"}</Text>
        <View style={Styles.listContainer}>
          <FlatList
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            data={points}
            keyExtractor={(v) => v.id}
            renderItem={({ item, index }) => (
              <Movement
                key={index}
                item={item}
                onPress={() => {
                  navigation.navigate("ItemMovements", { item: item });
                }}
              />
            )}
          />
        </View>
        {isFilter ? (
          <Pressable
            style={{ ...Styles.btn, marginVertical: 40 }}
            onPress={reset}
          >
            <Text style={Styles.btnText}>{"Todos"}</Text>
          </Pressable>
        ) : (
          <View style={Styles.btns}>
            <Pressable
              onPress={() => {
                filter(false);
              }}
              style={{ ...Styles.btn, marginRight: 6.5 }}
            >
              <Text style={Styles.btnText}>{"Ganados"}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                filter(true);
              }}
              style={{ ...Styles.btn, marginLeft: 6.5 }}
            >
              <Text style={Styles.btnText}>{"Canjeados"}</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default ListMovementsPage;
