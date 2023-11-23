import { StyleSheet, Text, View } from "react-native";
import Test from "./screens/test";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Events from "./screens/Events";
import SignIn from "./screens/SignIn";
import bottomNavigator from "./screens/bottomNavigator";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Dashboard" component={bottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Events />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
