import { View, TextInput, Text, Pressable, Modal, Image } from "react-native";
import React from "react";
import Button from "./button";
import { SafeAreaView } from "react-native-safe-area-context";
interface Props {
  value: string;
  onChangeText: (e: string) => void;
  handleSubmit: () => void;
  open: boolean;
  handleClose?: () => void;
}

const Input = ({
  value,
  handleSubmit,
  onChangeText,
  open,
  handleClose,
}: Props) => {
  return (
    <Modal style={{ padding: 20 }} visible={open} animationType="slide">
      <SafeAreaView
        style={{
          padding: 10,
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#090",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ width: 150, height: 150, borderRadius: 150 }}
          />
        </View>
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
          onChangeText={onChangeText}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            onPress={handleSubmit}
            title="submit"
            style={{ width: 100 }}
          />
          <Button
            onPress={() => handleClose && handleClose()}
            title="Cancel"
            style={{ backgroundColor: "red", marginTop: 10, width: 100 }}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Input;
