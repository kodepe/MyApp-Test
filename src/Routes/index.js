import React from "react";
import ListMovementsPage from "../Pages/ListMovements/List_movements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemMovementsPage from "../Pages/ItemMovements/Item_movements";
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ListMovements" component={ListMovementsPage} />
          <Stack.Screen name="ItemMovements" component={ItemMovementsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
