import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import React from "react";

interface Props {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
}

export default function Button({ onPress, title, style }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          {
            margin: 10,
            backgroundColor: "#070",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          },
          style,
        ]}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
