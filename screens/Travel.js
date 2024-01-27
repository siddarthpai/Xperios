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
      image:
        "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20230708_STP001.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      image:
        "https://www.gns.cri.nz/assets/Uploads/Heroes/lake-hero-2-v2__FillWzEyMDAsNjAwXQ.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      image:
        "https://i0.wp.com/hikingtheworld.blog/wp-content/uploads/2021/12/IMG_3057.jpg",
    },
  ];
  const { width } = Dimensions.get("window");
  const _renderItem = ({ item, index }) => {
    return (
      <View style={{}}>
        <Image
          style={{
            width: width - 64,
            height: 250,
            margin: 32,
            borderRadius: 50,
          }}
          source={{ uri: item.image }}
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
          <View>
            <Carousel
              data={data}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              onSnapToItem={(index) => setIndex(index)}
            />
            <Pagination
              dotsLength={data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: "#FF5733",
              }}
              tappableDots={true}
              inactiveDotStyle={{
                backgroundColor: "#DBE0E7",
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
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
    marginBottom: 32,
  },
});

export default App;
