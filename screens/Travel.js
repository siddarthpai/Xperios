import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useFonts } from "expo-font";
import { Button } from "@rneui/themed";
import { Icon } from "react-native-elements";
import { useState, useRef } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
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
              Mountain
              <Icon name="landscape" color="black" />
            </Button>
            <Button
              radius={"sm"}
              type="solid"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black", fontWeight: "bold" }}
            >
              Lake
              <Icon name="waves" color="black" />
            </Button>
            <Button
              radius={"sm"}
              type="solid"
              buttonStyle={{ backgroundColor: "white" }}
              titleStyle={{ color: "black", fontWeight: "bold" }}
            >
              Beach
              <Icon name="umbrella-beach" type="font-awesome" size={24}></Icon>
            </Button>
          </View>

          <View style={styles.centeredBox}>
            {/* start of bali div*/}
            <View
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <View
                style={{
                  width: 281.99,
                  height: 253.53,

                  backgroundColor: "white",
                  borderRadius: 20.7,
                }}
              />
              <View
                style={{
                  width: 258.71,
                  height: 159.11,
                  left: 11,
                  alignContent: "center",
                  top: 21.81,
                  position: "absolute",
                }}
              >
                <Image
                  style={{
                    width: 258.71,
                    height: 151.34,
                    top: 0,
                    left: 0,
                    alignSelf: "center",
                    position: "absolute",
                    borderRadius: 12.94,
                  }}
                  source={{
                    uri: "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90dGVyeXxlbnwwfHwwfHx8MA%3D%3D",
                  }}
                />
              </View>
              <View style={{ left: 16.82, top: 181.1, position: "absolute" }}>
                <View
                  style={{
                    width: 130.76,
                    height: 21,
                    left: 0.65,
                    top: 32.34,
                    position: "absolute",
                    flexDirection: "row",
                  }}
                >
                  <Icon name="place" color="orange" style={{ margin: 0 }} />
                  <Text
                    style={{
                      left: 18.76,
                      top: 0,
                      color: "#6A778B",
                      fontSize: 18,
                      fontWeight: "300",
                    }}
                  >
                    Bali, Indonesia
                  </Text>
                </View>
                <Text
                  style={{
                    left: 0,
                    top: 0,
                    color: "#0A2753",
                    fontSize: 20.7,
                    fontWeight: "400",
                  }}
                >
                  Nusa Penida
                </Text>
              </View>

              <View style={{ left: 211.34, top: 194.03, position: "absolute" }}>
                <Text
                  style={{
                    left: 21.08,
                    top: 0,
                    position: "absolute",
                    textAlign: "right",
                    color: "#39414B",
                    fontSize: 18.11,
                    fontWeight: "300",
                  }}
                >
                  4.8
                </Text>
                <Icon
                  name="star"
                  color="#FF5733"
                  style={{
                    position: "relative",
                    top: -3,
                    left: -3,
                  }}
                ></Icon>
              </View>
            </View>
          </View>
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
});

export default App;
