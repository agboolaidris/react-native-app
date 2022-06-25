import { View, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
interface Props {
  content: string;
  onPress: () => void;
}

const Card = ({ content, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <View
        style={{
          backgroundColor: "#070",
          padding: 7,
          marginBottom: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>{content}</Text>
      </View>
    </Pressable>
  );
};

export default Card;
