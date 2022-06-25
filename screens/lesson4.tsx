import React, { useState } from "react";
import { Button, Text, TextInput, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";
import Card from "../ui/card";

function Home() {
  const [items, setitems] = useState<string[]>([]);
  const [value, setvalue] = useState("");
  return (
    <SafeAreaView
      style={{
        padding: 5,
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
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
      </View>
      <View
        style={{ height: 1, backgroundColor: "#070", marginVertical: 20 }}
      ></View>
      <View style={{ flex: 4 }}>
        <ScrollView>
          {items.map((item, i) => (
            <Card key={i} content={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
