import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useFonts } from "expo-font";
import { Button } from "@rneui/themed";
import { Icon } from "react-native-elements";
import React, { useState, useRef } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import ReadData from "../components/display-travel";

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
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
      image: require("../assets/travel/travel1.png"),
    },
    {
      id: 2,
      title: "Title 2",
      image: require("../assets/travel/travel2.png"),
    },
    {
      id: 3,
      title: "Title 3",
      image: require("../assets/travel/travel3.png"),
    },
  ];
  const { width } = Dimensions.get("window");
  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          style={{
            width: width - 64,
            height: 250,
            margin: 32,
            borderRadius: 50,
          }}
          source={item.image}
        />
      </View>
    );
  };

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
          <View style={{ marginBottom: -40 }}>
            <Carousel
              data={data}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              onSnapToItem={(index) => setIndex(index)}
            />
          </View>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 5,
              backgroundColor: "#FF5733",
            }}
            tappableDots={true}
            inactiveDotStyle={{
              backgroundColor: "#DBE0E7",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <Text style={styles.blackText}>
            Where do you wanna {"\n"}{" "}
            <Text style={styles.purpleText}>Travel</Text>?
          </Text>
          <View style={styles.box}>
            <Button
              radius={"sm"}
              type="solid"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black", fontWeight: "bold" }}
            >
              <Icon name="landscape" color="black" style={{ marginRight: 5 }} />
              Mountain
            </Button>
            <Button
              radius={"sm"}
              type="solid"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black", fontWeight: "bold" }}
            >
              <Icon name="waves" color="black" style={{ marginRight: 5 }} />
              Lake
            </Button>
            <Button
              radius={"sm"}
              type="solid"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black", fontWeight: "bold" }}
            >
              <Icon
                name="umbrella-outline"
                type="ionicon"
                size={24}
                style={{ marginRight: 5 }}
              />
              Beach
            </Button>
          </View>
          <ReadData />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#B08CDDBD",
  },
  blackText: {
    textAlign: "center",
    color: "black",
    fontSize: 44,
    fontWeight: "bold",
  },
  purpleText: {
    color: "#761CBC",
  },
  box: {
    margin: 32,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  searchbar: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "90%",
    marginTop: 32,
    marginBottom: 10,
  },
});

export default App;
