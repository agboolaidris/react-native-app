import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";

function Home() {
  const [items, setitems] = useState<string[]>([]);
  const [value, setvalue] = useState("");
  return (
    <SafeAreaView
      style={{
        padding: 5,
      }}
    >
      <View>
        <TextInput
          value={value}
          placeholder="add new value"
          placeholderTextColor="#070"
          style={{
            height: 40,
            borderColor: "#070",
            borderWidth: 2,
            borderRadius: 7,
            padding: 5,
            color: "#070",
          }}
          onChangeText={(e) => setvalue(e)}
        />
        <Button
          title="Submit"
          onPress={() => {
            setitems((prev) => [...prev, value]);
            setvalue("");
          }}
        />
        <View
          style={{
            marginTop: 10,
            backgroundColor: "#070",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Submit
          </Text>
        </View>
      </View>
      <View
        style={{ height: 1, backgroundColor: "#070", marginVertical: 20 }}
      ></View>
      <View>
        {items.map((item, i) => (
          <Text key={i}>{item}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Home;
