import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import { Button } from "@rneui/themed";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState, useRef } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const data = [
    {
      id: 1,
      title: "Title 1",
      image:
        "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Title 2",
      image:
        "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Title 3",
      image:
        "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  const { width } = Dimensions.get("window");

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchbar}
          />
          <View>
            <View style={styles.box}>
              <Button
                radius={"xl"}
                type="solid"
                buttonStyle={{ backgroundColor: "#FFF5D7" }}
                titleStyle={{ color: "black" }}
              >
                Exhibition
              </Button>
              <Button
                radius={"xl"}
                type="solid"
                buttonStyle={{ backgroundColor: "#EDE9FF" }}
                titleStyle={{ color: "black" }}
              >
                Music Concert
              </Button>
              <Button
                radius={"xl"}
                type="solid"
                buttonStyle={{ backgroundColor: "#FFECEC" }}
                titleStyle={{ color: "black" }}
              >
                Stand Up Show
              </Button>
            </View>
          </View>
          <Text style={styles.blackText}>
            Find {"\n"} <Text style={styles.purpleText}>Trending Events</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredBox: {
    alignSelf: "center",
    marginBottom: 64,
  },

  container: {
    height: "100%",
    backgroundColor: "#B08CDDBD",
  },
  blackText: {
    textAlign: "center",
    color: "black",
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 32,
  },
  searchbar: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "90%",
    marginTop: 32,
    marginBottom: 32,
  },
  purpleText: {
    color: "#761CBC",
  },
  box: {
    margin: 16,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});

export default App;
