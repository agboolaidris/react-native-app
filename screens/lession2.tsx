import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";

function Home() {
  return (
    <SafeAreaView
      style={{
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "#070", height: 100, flex: 1 }}>
        <Text>1</Text>
      </View>
      <View style={{ backgroundColor: "#010", height: 100, flex: 2 }}>
        <Text>2</Text>
      </View>
      <View style={{ backgroundColor: "#050", height: 100, flex: 3 }}>
        <Text>3</Text>
      </View>
      <View>
        <View>
          <Text>Add Button</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
