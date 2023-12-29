import React from "react";
import { View, Text, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Details from './screens/Details';

import Events from "./screens/Events";
import Travel from "./screens/Travel";
import Hobbies from "./screens/Hobbies";
import Profile from "./screens/Profile";
import Landing from "./screens/Landing";

const Drawer = createDrawerNavigator();

export default function App() {
  const customHeader = ({ navigation }) => ({
    headerLeft: () => (
      <View
        style={{ marginLeft: 10, flexDirection: "row", alignItems: "center" }}
      >
        <Icon
          name="bars" // Hamburger menu icon
          type="font-awesome"
          size={30}
          color="black"
          onPress={() => navigation.toggleDrawer()}
        />
        <Icon
          name="user"
          type="font-awesome"
          style={{ marginLeft: 16 }}
          color="#B08CDDBD"
        ></Icon>
        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}>
          Welcome back {"\n"} Shishimaroo!
        </Text>
      </View>
    ),
    headerRight: () => (
      <View
        style={{ marginRight: 10, flexDirection: "row", alignItems: "center" }}
      >
        <Icon name="bell" type="font-awesome" size={24} color="#B08CDDBD" />
      </View>
    ),
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={customHeader}>
        <Drawer.Screen
          name="Home"
          component={Landing}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="Events"
          component={Events}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="Hobbies"
          component={Hobbies}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="Travel"
          component={Travel}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="Blogs"
          component={Profile}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />

        <Drawer.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
