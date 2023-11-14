import React, { useCallback } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#8E6CEA", "#B0B3FB"]} style={styles.container}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 23 }}>
          Your GQI Score is 43!
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16 }}>
          Increase your FQ to unlock your next reward
        </Text>

        <View style={styles.rectangularBox}>
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
        </View>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20, marginTop: 40 }}>
          Hobby Classes Near You
        </Text>
        <ScrollView horizontal contentContainerStyle={styles.rowContainer}>
          <View style={styles.rectangularBox1}>
            {/* Change the image source URL to an actual image file */}
            <Image
              source={{ uri: 'https://example.com/your-image.jpg' }}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </View>
          <View style={styles.rectangularBox1}></View>
          <View style={styles.rectangularBox1}></View>
          <View style={styles.rectangularBox1}></View>
          <View style={styles.rectangularBox1}></View>
          <View style={styles.rectangularBox1}></View>
          <View style={styles.rectangularBox1}></View>
          <View style={styles.rectangularBox1}></View>
          {/* Add more rectangular boxes as needed */}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

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
