import React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Events from "./screens/Events";
import Travel from "./screens/Travel";
import Hobbies from "./screens/Hobbies";
import Profile from "./screens/Profile";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Events} />
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Hobbies" component={Hobbies} />
        <Drawer.Screen name="Travel" component={Travel} />
        <Drawer.Screen name="Blogs" component={Profile} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
