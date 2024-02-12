import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { edb } from "../config";
import { TouchableOpacity } from "react-native";
import eventinfo from "../eventdetail.json";
import { useNavigation } from "@react-navigation/native";

const Details = ({ route }) => {
  const { id } = route.params;
  const [eventDetails, setEventDetails] = useState(null);
  const navigation = useNavigation();
  console.log(eventinfo[0]);

  const navigateBooking = () => {
    navigation.navigate("Booking");
  };

  useEffect(() => {
    const database = edb;
    const eventRef = ref(database);

    const unsubscribe = onValue(
      eventRef,
      (snapshot) => {
        const dataFromDb = snapshot.val();
        if (dataFromDb) {
          const event = Object.values(dataFromDb).find(
            (event) => event.id === id
          );
          setEventDetails(event);
        }
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );

    return () => unsubscribe();
  }, [id]);

  return (
    <ScrollView
      style={{ backgroundColor: "#B08CDD" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {eventinfo[0] && (
            <Image source={{ uri: eventinfo[0].image }} style={styles.image} />
          )}
        </View>
        <View style={styles.overlayBox}>
          {eventinfo[0] && (
            <React.Fragment>
              <Text style={styles.eventNameText}>{eventinfo[0].Name}</Text>
              <Image
                source={require("../assets/location.png")}
                style={styles.locationIcon}
              />
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ flex: 1, flexWrap: "wrap" }}>
                  <View>
                    <Text style={styles.locationText}>
                      {eventinfo[0].Location}
                    </Text>
                  </View>
                </Text>
              </View>
              <Image
                source={require("../assets/calendar.png")}
                style={styles.calendarIcon}
              />
              <View style={styles.dateGroup1}>
                <Text style={styles.dateText}>5 Jan 2024, 9 AM</Text>
              </View>
              {/* Date Group 2 */}
              <View style={styles.dateGroup2}>
                <Text style={styles.dateText}>4 Jan 2024, 5 AM</Text>
              </View>
              <View style={styles.chipsmain}>
                <View style={styles.chips1}>
                  <Text style={styles.group84}>
                    Individual{"\n"} {eventinfo[0].Individualprice}
                  </Text>
                </View>

                <View style={styles.chips2}>
                  <Text style={styles.group84}>
                    With Friends{"\n"} {eventinfo[0].withfriends}
                  </Text>
                </View>
              </View>

              <Text style={styles.eventDescription}>{eventinfo[0].desc}</Text>

              <View style={styles.chips}>
                <Text style={styles.contactHostText}>Contact the host !</Text>
              </View>
              <View style={styles.userReviewsText}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                  <Image source={require("../assets/reviewicon.png")} />
                  <Text> User Reviews</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text>⭐</Text>
                  <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontWeight: 600, marginBottom: 5 }}>
                      {" "}
                      Trisha Singh
                    </Text>
                    <Text>
                      Fantastic vibes, great crowd, and an unforgettable
                      experience!
                    </Text>
                    <Text>more...</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bottomRow}>
                <View style={styles.metrics}>
                  <Image source={require("../assets/int.png")} />
                  <Text
                    style={{
                      color: "#FF4465",
                      fontWeight: "700",
                      fontSize: 20,
                      marginLeft: 5,
                    }}
                  >
                    25 pts
                  </Text>
                </View>
                <TouchableOpacity style={styles.register}>
                  <Text
                    style={styles.registerText}
                    onPress={() => navigateBooking()}
                  >
                    REGISTER
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.more}></TouchableOpacity>
            </React.Fragment>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B08CDDBD",
  },
  imageContainer: {
    marginTop: 26,

    alignSelf: "center",
    justifyContent: "center",
    width: 338,
    height: 177.88,
    borderRadius: 12.94,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  overlayBox: {
    position: "absolute",
    width: 338,
    height: 480,
    top: 214,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5.174163818359375,
    },
    shadowOpacity: 0.13,
    shadowRadius: 20.6966552734375,
    elevation: 5,
  },
  star: {
    position: "absolute",
    left: "5.36%",
    right: "88.99%",
    top: "65.07%",
    bottom: "32.09%",
    background: "#FFD233",
    height: 20,
    width: 20,
  },

  metrics: {
    marginLeft: 32,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    bottom: "10%",
  },

  bottomRow: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    top: "88.85%",
    bottom: "1.89%",
  },

  register: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    left: "53.87%",
    right: "5.65%",
    width: 145,
    height: 51,
    backgroundColor: "#593DA5",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    bottom: "5%",
  },
  registerText: {
    width: "100%",
    height: 23,
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 23,
    color: "#FFFFFF",
    display: "flex",
    order: 0,
    flexGrow: 0,
  },
  eventNameText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20.6967,
    lineHeight: 28,
    color: "#0A2753",
    position: "absolute",
    left: "5.13%",
    right: "40.11%",
    width: "100%",
    top: "2.77%",
    bottom: "91.94%",
  },
  locationText: {
    maxWidth: 150,
    height: "auto", // Change height to auto to allow for multiline text
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 21,
    color: "#6A778B",
    position: "relative",
    left: "38.58%",
    right: "49.32%",
    top: "9.5%",
    bottom: "87.15%",
    textAlign: "center",
    flex: 1,
    flexWrap: "wrap",
  },

  locationIcon: {
    position: "absolute",
    left: "5.31%",
    right: "89.66%",
    top: "9.52%",
    bottom: "85.9%",
    width: 20, // Adjust the width of the icon
    height: 20, // Adjust the height of the icon
    // Other styles as required
  },

  dateGroup1: {
    position: "absolute",
    left: "62.85%",
    right: "6.7%",
    top: "11.36%",
    bottom: "85.9%",
  },
  dateGroup2: {
    position: "absolute",
    left: "62.57%",
    right: "6.98%",
    top: "9.16%",
    bottom: "87.73%",
  },
  dateText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 15,
    color: "#000000",
  },
  calendarIcon: {
    position: "absolute",
    left: "56.7%",
    right: "38.31%",
    top: "9.97%",
    bottom: "86.08%",
    height: 19,
    width: 19,
  },

  chipsmain: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "16.48%",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "auto",
    padding: 10,
    gap: 10,
  },

  chips1: {
    backgroundColor: "#4DC4DE",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    height: 47,
    width: 146,
  },
  chips2: {
    backgroundColor: "#657CCF",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    height: 47,
    width: 146,
  },
  group84: {
    width: "100%",
    height: "100%",
    fontSize: 16,
    fontWeight: "600",
    top: 9,
    textAlign: "center",
  },

  eventDescription: {
    position: "absolute",
    width: 300,
    height: "auto",
    left: 26,
    top: 145,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
    color: "#000000",
  },

  chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10.3483,
    paddingLeft: 7.76125,
    paddingRight: 12.9354,
    paddingTop: 10.3483,
    gap: 10.35,
    position: "absolute",
    left: "5.95%",
    right: "5.36%",
    top: "48.28%",
    bottom: "46.05%",
    backgroundColor: "rgba(255, 103, 130, 0.59)",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    height: 30.96,
  },
  contactHostText: {
    width: "100%",
    textAlign: "center",
    height: 20,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    color: "#000000",
  },

  userReviewsText: {
    position: "absolute",
    left: "6.5%",
    right: "57.74%",
    top: "59.02%",
    bottom: "37.2%",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    height: 60,
    width: 300,
  },
});

export default Details;
