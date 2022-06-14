import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";

function Home() {
  return (
    <SafeAreaView style={{ padding: 5 }}>
      <View
        style={{
          height: 50,
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Text>Goal App </Text>
      </View>
      <View
        style={{
          //flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholderTextColor="#070"
          placeholder="Add Goal"
          style={{
            height: 50,
            borderColor: "#070",
            borderWidth: 2,
            borderRadius: 7,
            padding: 5,
            width: "60%",
          }}
        />
        <Button title="Add goal" color="#070" />
      </View>
    </SafeAreaView>
  );
}

export default Home;
