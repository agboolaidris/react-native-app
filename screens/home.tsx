import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../ui";

function Home() {
  return (
    <SafeAreaView>
      <Header background="#070" />
      <Text style={{ padding: 10, borderColor: "red", borderWidth: 2 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        dolore officiis eligendi maxime, iusto excepturi accusamus iure autem
        illum asperiores nihil quia, consequatur officia maiores, similique unde
        consequuntur atque repellendus.
      </Text>
      <Button title="Tap me!!" color="#070" />

      <TextInput />
      <View
        style={{
          flex: 1,
          backgroundColor: "#070",
          padding: 20,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Add</Text>
      </View>
    </SafeAreaView>
  );
}

export default Home;
