import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-elements";
import Dialog from "react-native-dialog";
import data from "../xperiosdata.json";

const App = () => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const updateSearch = (text) => {
    setSearch(text);
  };

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleRegister = () => {
    setVisible(false);
  };

  const renderRectangularBox = (key) => (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Event Details</Dialog.Title>
        <Dialog.Description>
          <Image
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
          />
          {"\n"}Loreum Ipsium
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Register" onPress={handleRegister} />
      </Dialog.Container>
    </View>
  );

  const renderRectangularBoxes = (count) => {
    return Array.from({ length: count }, (_, index) =>
      renderRectangularBox(index.toString())
    );
  };

  const eventData = data.filter((item) => item.tag === "event");
  const travelData = data.filter((item) => item.tag === "travel");

  const staticUserDetails = {
    name: "John Doe",
    phoneNumber: "+1234567890",
    email: "johndoe@example.com",
    CreativityQuotient: 30,
    EnvironmentalQuotient: 45,
    FitnessQuotient: 52,
    InteractionQuotient: 80,
    SocialServiceQuotient: 10,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            lightTheme={true}
            showCancel={true}
            round={true}
          />
          <LinearGradient
            colors={["#8E6CEA", "#B0B3FB"]}
            style={styles.container}
          >
            <View style={styles.container}>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 23 }}>
                Your GQI Score is 43!
              </Text>
              <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}>
                Increase your FQ to unlock your next reward
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 20,
                  marginTop: 40,
                  marginLeft: 20,
                }}
              >
                Recommended for you
              </Text>
              <ScrollView horizontal style={styles.container1}>
                {eventData.map((item, index) => (
                  <View key={index} style={styles.card}>
                    <Image
                      source={{
                        uri: `https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D`,
                      }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <View style={styles.content}>
                      <Text style={styles.eventName}>{item.eventName}</Text>
                      <Text style={styles.price}>
                        Original Price: {item.price.original}/{item.price.unit}
                      </Text>
                      <Text style={styles.discountedPrice}>
                        Discounted Price: {item.price.discounted}/
                        {item.price.unit}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.registerButton}>
                      <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>

              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 20,
                  marginLeft: 20,
                }}
              >
                Travel
              </Text>
              <ScrollView horizontal style={styles.container1}>
                {travelData.map((item, index) => (
                  <View key={index} style={styles.card}>
                    <Image
                      source={{
                        uri: `https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg`,
                      }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <View style={styles.content}>
                      <Text style={styles.eventName}>{item.eventName}</Text>
                      <Text style={styles.price}>
                        Original Price: {item.price.original}/{item.price.unit}
                      </Text>
                      <Text style={styles.discountedPrice}>
                        Discounted Price: {item.price.discounted}/
                        {item.price.unit}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.registerButton}>
                      <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    height: "100%",
  },
  rectangularBox: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    width: 345,
  },
  rectangularBox1: {
    height: 116,
    width: 116,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 21,
  },

  container1: {
    flexDirection: "row",
    padding: 10,
    height: "100%", // Adjust to fit the entire screen
  },
  card: {
    width: 250,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    height: 400,
  },
  image: {
    width: 250,
    height: 200,
  },
  content: {
    padding: 15,

    height: "100%",
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  discountedPrice: {
    fontSize: 14,
    marginBottom: 15,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",

    position: "absolute",
    bottom: 30,
    left: 40,
    width: "70%",
  },
  registerText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default App;
