import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });
  const [] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });
  const [] = useFonts({
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "Poppins-Regular", fontSize: 30 }}>
        Your GQI Score is 43!
      </Text>
      <Text style={{ fontFamily: "Poppins-Regular", fontSize: 30 }}>
        Increase your FQ to unlock your next reward
      </Text>
      <View style={styles.rectangularBox}>
        <Text
          style={{ fontFamily: "Poppins-Bold", fontSize: 20, color: "#000" }}
        >
          Recommended For You!
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={{ fontFamily: "Poppins-Black", fontSize: 30 }}>
          Nandi Hills Trek
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.rectangularBox1}></View>
        <View style={styles.rectangularBox1}></View>
        <View style={styles.rectangularBox1}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c8a2c8",
    flex: 1,
    alignItems: "left",
    justifyContent: "top",
    padding: 20, // Add padding to the container for better spacing
  },
  rectangularBox: {
    height: 100,
    backgroundColor: "white", // Change the background color as needed
    marginHorizontal: 20, // Add margin for spacing
    borderRadius: 10, // Add border radius for rounded corners
    marginTop: 20, // Adjust the marginTop as needed
  },
  rectangularBox1: {
    height: 50,
    width: "33.33%",
    backgroundColor: "white", // Change the background color as needed
    marginHorizontal: 20, // Add margin for spacing
    borderRadius: 10, // Add border radius for rounded corners
    marginTop: 20, // Adjust the marginTop as needed
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Adjust as needed
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
