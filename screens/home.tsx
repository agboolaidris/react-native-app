import React, { useState } from "react";
import { Text, TextInput, View, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";
import Card from "../ui/card";
import Input from "../ui/input";
import Button from "../ui/button";

function Home() {
  const [items, setitems] = useState<string[]>([]);
  const [value, setvalue] = useState("");
  const [openModal, setopenModal] = useState(false);
  return (
    <SafeAreaView
      style={{
        padding: 5,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Text>Goal App</Text>

        <Button
          onPress={() => setopenModal(true)}
          title="add Goal"
          style={{ width: 90, height: 30 }}
        />
      </View>
      <Input
        open={openModal}
        value={value}
        onChangeText={(value) => setvalue(value)}
        handleSubmit={() => {
          setitems((prev) => [...prev, value]);
          setvalue("");
          setopenModal(false);
        }}
        handleClose={() => setopenModal(false)}
      />
      <View
        style={{ height: 1, backgroundColor: "#070", marginVertical: 5 }}
      ></View>
      <View style={{ flex: 4 }}>
        <FlatList
          data={items}
          renderItem={(item) => (
            <Card
              content={item.item}
              onPress={() =>
                setitems((prev) => prev.filter((pre) => pre !== item.item))
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
