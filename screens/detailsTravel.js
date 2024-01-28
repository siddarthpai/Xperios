import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { tdb } from "../config";
import { TouchableOpacity } from "react-native";
import travelinfo from "../traveldetail.json"

const Details = ({ route }) => {
  const { id } = route.params;
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const database = tdb;
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
      showsVerticalScrollIndicator="false"
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {travelinfo[0] && (
            <Image source={{ uri: travelinfo[0].image }} style={styles.image} />
          )}
        </View>
        <View style={styles.overlayBox}>
          {travelinfo[0] && (
            <React.Fragment>
              <Text style={styles.eventNameText}>{travelinfo[0].Name}</Text>
              <Image
                source={require("../assets/location.png")}
                style={styles.locationIcon}
              />
              <Text style={styles.locationText}>{travelinfo[0].location}</Text>
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

              <View style={styles.chips1}>
                <Text style={styles.group84}>
                  Individual{"\n"} {travelinfo[0].individualprice}
                </Text>
              </View>

              <View style={styles.chips2}>
                <Text style={styles.group84}>
                  With Friends{"\n"} {travelinfo[0].withfriends}
                </Text>
              </View>

              <Text style={styles.eventDescription}>
                {travelinfo[0].desc}
              </Text>

              <View style={styles.chips}>
                <Text style={styles.contactHostText}>Contact the host !</Text>
              </View>

              <Text style={styles.userReviewsText}>User Reviews</Text>

              <Text style={styles.username}>Dev Oberoi</Text>

              <Text style={styles.review}>
                An exhilerating experience! Would totally recommend
              </Text>
              


              <Text style={styles.star}>⭐</Text>

              <TouchableOpacity style={styles.register}>
                <Text style={styles.registerText}>REGISTER</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.more}>
                <Text>more...</Text>
              </TouchableOpacity>
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
    position: "absolute",
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
    resizeMode: "cover",
  },
  overlayBox: {
    position: "absolute",
    width: 338,
    height: 480,
    top: 214,
    left: 20,
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

  register: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10.3483,
    paddingHorizontal: 12.9354,
    paddingVertical: 10.3483,
    gap: 10.35,
    position: "absolute",
    left: "53.87%",
    right: "5.65%",
    top: "88.85%",
    bottom: "1.89%",
    backgroundColor: "rgba(108, 188, 28, 0.77)",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
  },
  registerText: {
    width: 88,
    height: 23,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 23,
    color: "#FFFFFF",
    flex: "none",
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
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15.5225,
    lineHeight: 21,
    color: "#6A778B",
    position: "absolute",
    left: "12.58%",
    right: "49.32%",
    top: "8.88%",
    bottom: "87.15%",
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

  chips1: {
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
    left: "6.15%",
    right: "53.07%",
    top: "16.48%",
    bottom: "74.91%",
    backgroundColor: "rgba(250, 255, 0, 0.64)",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    height: 60,
  },
  chips2: {
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
    left: "53.91%",
    right: "6.98%",
    top: "16.67%",
    bottom: "74.73%",
    backgroundColor: "rgba(255, 138, 0, 0.77)",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    height: 60,
  },
  group84: {
    position: "absolute",
    width: 120,
    height: 42,
    top: 13,
    fontSize: 15,
    textAlign: "center",
  },

  eventDescription: {
    position: "absolute",
    width: 307,
    height: 100,
    left: 26,
    top: 145,
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
    top: "52.28%",
    bottom: "46.05%",
    backgroundColor: "rgba(255, 103, 130, 0.59)",
    borderWidth: 0.64677,
    borderColor: "#D6D6D6",
    borderRadius: 6.4677,
    height: 30.96,
  },
  contactHostText: {
    width: 134,
    height: 20,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "#000000",
  },

  userReviewsText: {
    position: "absolute",
    left: "12.5%",
    right: "57.74%",
    top: "59.02%",
    bottom: "37.2%",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "#000000",
  },

  username: {
    position: "absolute",
    left: "12.5%",
    right: "53.27%",
    top: "64.32%",
    bottom: "31.9%",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: "#AB1818",
  },

  more: {
    position: "absolute",
    left: "12.5%",
    top: "79.2%",
    bottom: "10.02%",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 15,
    color: "red",
  },

  review: {
    position: "absolute",
    width: 282,
    height: 36,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#000000",
    left: "12.5%",
    right: "53.27%",
    top: "69.32%",
    bottom: "31.9%",
  },
});

export default Details;
