import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { Button } from "@rneui/themed";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";

const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

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
          <View>
            <View style={styles.centeredBox}>
              <ImageBackground
                style={styles.coverImage}
                imageStyle={{ borderRadius: 20 }}
                source={{
                  uri: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              >
                <View style={styles.textView}>
                  <View>
                    <View
                      style={{
                        padding: 8,
                        backgroundColor: "rgba(45, 38, 75, 0.50)",
                        borderRadius: 10,
                        width: "95%",
                        position: "relative",
                        top: 35,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          marginVertical: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                        >
                          Coldplay : Music of the Spheres
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: 6,
                          }}
                        >
                          <Icon name="place" color="white" />
                          <Text
                            style={{
                              color: "white",
                              fontSize: 12,
                              fontWeight: "400",
                              marginLeft: 8,
                            }}
                          >
                            Gelora Bung Karno Stadium
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: 6,
                          }}
                        >
                          <Icon name="event" color="white" />
                          <Text
                            style={{
                              color: "white",
                              fontSize: 12,
                              fontWeight: "400",
                              marginLeft: 8,
                              wordWrap: "break-word",
                            }}
                          >
                            November 15 2023
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          marginVertical: 4,
                          marginLeft: "auto",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Start from
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          10,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
          <Text style={styles.blackText}>
            Find {"\n"} <Text style={styles.purpleText}>Trending Events</Text>
          </Text>
          <View>
            <View style={{ flexDirection: "row", width: "100%" }}>
              <View style={styles.whiteBox}>
                <Image
                  style={{
                    width: "90%",
                    height: 100,
                    borderRadius: 15,
                    alignSelf: "center",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  source={{
                    uri: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginVertical: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Muse : Will of the People
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Icon
                      name="place"
                      color="#2D264B4D"
                      size={16}
                      style={{ marginLeft: 8 }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 10,
                      }}
                    >
                      Jakarta, Indonesia
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Icon
                      name="event"
                      color="#2D264B4D"
                      size={16}
                      style={{ marginLeft: 8 }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 10,
                        fontWeight: "400",
                      }}
                    >
                      July 23 2023
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginTop: 32,
                    }}
                  >
                    <Icon
                      name="tag"
                      type="font-awesome"
                      color="#EC441E"
                      size={16}
                      style={{ marginLeft: 10 }}
                    />

                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#EC441E",
                      }}
                    >
                      10,000
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.whiteBox}>
                <Image
                  style={{
                    width: "90%",
                    height: 100,
                    borderRadius: 15,
                    alignSelf: "center",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                  source={{
                    uri: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginVertical: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    Muse : Will of the People
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Icon
                      name="place"
                      color="#2D264B4D"
                      size={16}
                      style={{ marginLeft: 8 }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 10,
                      }}
                    >
                      Jakarta, Indonesia
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Icon
                      name="event"
                      color="#2D264B4D"
                      size={16}
                      style={{ marginLeft: 8 }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 10,
                        fontWeight: "400",
                      }}
                    >
                      July 23 2023
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginTop: 32,
                    }}
                  >
                    <Icon
                      name="tag"
                      type="font-awesome"
                      color="#EC441E"
                      size={16}
                      style={{ marginLeft: 10 }}
                    />

                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#EC441E",
                      }}
                    >
                      10,000
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  whiteBox: {
    width: "45%",
    height: 250,
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: 12,
    marginBottom: 64,
  },
  coverImage: {
    width: 350,
    height: 200,
    marginTop: 64,
  },
  textView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
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
