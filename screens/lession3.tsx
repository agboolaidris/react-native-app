import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";

function Home() {
  return (
    <SafeAreaView
      style={{
        padding: 5,
      }}
    >
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "black",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Add
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
