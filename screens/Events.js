import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-elements";

const App = () => {
  const [search, setSearch] = useState("");
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const updateSearch = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        showCancel={true}
        round={true}
      />
      <LinearGradient colors={["#8E6CEA", "#B0B3FB"]} style={styles.container}>
        <View style={styles.container}>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 23 }}>
            Your GQI Score is 43!
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}>
            Increase your FQ to unlock your next reward
          </Text>
          {/* <View style={styles.rectangularBox}>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 20,
                color: "#000",
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
                opacity: 0.5,
              }}
            >
              Recommended For You!
            </Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Black",
                fontSize: 30,
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              Nandi Hills Trek
            </Text>
          </View> */}
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 20,
              marginTop: 40,
            }}
          >
            Happening Tomorrow
          </Text>
          <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
            <View style={styles.rectangularBox1}>
              <Image
                source={{ uri: "https://example.com/your-image.jpg" }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
              />
            </View>
            <View style={styles.rectangularBox1}></View>
            <View style={styles.rectangularBox1}></View>
            <View style={styles.rectangularBox1}></View>
            <View style={styles.rectangularBox1}></View>
            <View style={styles.rectangularBox1}></View>
            <View style={styles.rectangularBox1}></View>
            <View style={styles.rectangularBox1}></View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 5,
  },
  rectangularBox: {
    height: 100,
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
});

export default App;
