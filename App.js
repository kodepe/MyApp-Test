import React from "react";
import { View } from "react-native";
import Routes from "./src/Routes";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </View>
  );
}
