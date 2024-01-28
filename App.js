import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import detailsEvents from "./screens/detailsEvents";
import detailsTravel from "./screens/detailsTravel";
import detailsHobbies from "./screens/detailsHobbies";

import Events from "./screens/Events";
import Travel from "./screens/Travel";
import Hobbies from "./screens/Hobbies";
import Profile from "./screens/Profile";
import Landing from "./screens/Landing";
import Community from "./screens/Community";
import SignIn from "./screens/SignIn";
import Login from "./screens/Login";
import Rewards from "./screens/Rewards";
import Booking from "./screens/Booking";
import Friends from "./screens/Friends";
import FeedScreen from "./screens/groups";

const Drawer = createDrawerNavigator();

export default function App() {
  const customHeader = ({ navigation, route }) => {
    const isDetailsScreen = route && route.name === "Details";

    if (isDetailsScreen) {
      return {
        headerLeft: () => (
          <TouchableOpacity
            style={{
              marginLeft: 10,
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 6,
              backgroundColor: "#f0f0f0",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Events")}
          >
            <Icon
              name="chevron-left"
              type="font-awesome"
              size={20}
              color="black"
            />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>Back</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="bell" type="font-awesome" size={24} color="#B08CDDBD" />
          </View>
        ),
      };
    }

    return {
      headerLeft: () => (
        <View
          style={{ marginLeft: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Icon
            name="bars"
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
            Welcome back {"\n"} Lakshmi!
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="bell" type="font-awesome" size={24} color="#B08CDDBD" />
        </View>
      ),
    };
  };

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
          name="Community"
          component={Community}
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
          name="Rewards"
          component={Rewards}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: () => <Text></Text>,
          }}
        />

        <Drawer.Screen
          name="Booking"
          component={Booking}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />

        <Drawer.Screen
          name="Groups"
          component={FeedScreen}
          options={{
            headerTitle: () => <Text></Text>,
          }}
        />

        <Drawer.Screen
          name="eventDetails"
          component={detailsEvents}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="hobbiesDetails"
          component={detailsHobbies}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="travelDetails"
          component={detailsTravel}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="OTP"
          component={SignIn}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: () => <Text></Text>,
          }}
        />
        <Drawer.Screen
          name="Friends"
          component={Friends}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: () => <Text></Text>,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
