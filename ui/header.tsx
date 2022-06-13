import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

interface Props {
  background: string;
}
const Header = ({ background }: Props) => {
  return <StatusBar animated={true} backgroundColor={background} />;
};

export default Header;
