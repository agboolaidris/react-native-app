import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/home";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import { Text } from "react-native";
const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading] = useFonts({
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoReqular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!loading) return <Text>Font Not Loaded</Text>;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={HomeScreen} name="book" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
