import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import data from "../landing.json";
console.log(data);

const HomeComponent = () => {
  const Card = (props) => {
    return (
      <View>
        <View style={styles.propertyCard}>
          <View style={styles.propertyImage}>
            <Image
              style={styles.image}
              source={{
                uri: props.image,
              }}
            />
            <View style={styles.overlay} />
            <View style={styles.favorite}>
              <TouchableOpacity
                onPress={() => console.log("Heart button pressed")}
              >
                <Image
                  source={require("../assets/like.png")} // Adjust the path as needed
                  style={styles.heartIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.price1}>
              <View style={styles.price}>
                <Text style={styles.currency}>₹</Text>
                <Text style={styles.amount}>{props.price}</Text>
              </View>
            </View>
          </View>
          <View style={styles.propertyDetails}>
            <View style={styles.rating}>
              <Text style={styles.squareKitchen}>{props.name}</Text>
              <Text style={styles.ratingNumber}>⭐ {props.rating}</Text>
            </View>
            <View style={styles.address}>
              <Image
                source={require("../assets/location.png")} // Use the location.png from assets
                style={styles.locationIcon} // Apply styles for the location icon
              />
              <Text style={styles.addressText}>{props.location}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: 281,
          height: 28,
          marginTop: 15,
        }}
      >
        <Text style={{ color: "#761CBC", fontSize: 23, fontWeight: 600 }}>
          Good Morning,{" "}
        </Text>
        <Text style={{ color: "#000000", fontSize: 23, fontWeight: 600 }}>
          Lakshmi
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 28,
            width: 362,
            height: 260,
            borderRadius: 12,
            backgroundColor: "#380C72",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              gap: 154,
              width: 342,
              height: 71,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                padding: 0,
                gap: 8,
                width: "100%",
                height: 70,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Text
                  style={{ fontWeight: "600", fontSize: 16, color: "#EBE7F1" }}
                >
                  GQI
                </Text>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 36,
                    marginTop: 16,
                    color: "#FFFFFF",
                    width: "100%",
                  }}
                >
                  8501 Pts
                </Text>
              </View>
              <Image
                source={require("../assets/gift.png")} // Adjust the path as needed
                style={styles.giftImage}
              />
            </View>
          </View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
              color: "#EBE7F1",
            }}
          >
            Earn more points and Enjoy exclusive benefits
          </Text>
          <View
            style={{
              boxSizing: "border-box",
              width: 336,
              height: 84,
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.35)",
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: 20,
                width: 304,
                height: 48,
                left: 16,
                top: 18,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 0,
                  gap: 5,
                  width: 192,
                  height: 48,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 20,
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Free 50 Points
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: 0,
                    gap: 4,
                    width: 192,
                    height: 19,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      textAlign: "center",
                      color: "#EBE7F1",
                    }}
                  >
                    Time Remaining:
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                      textAlign: "center",
                      color: "#EBE7F1",
                    }}
                  >
                    10:45:22
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  gap: 10,
                  width: 92,
                  height: 41,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontWeight: "600",
                    fontSize: 16,
                    textAlign: "center",
                    color: "#380C72",
                  }}
                >
                  Claim
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.topRecommendations}>
        <Text style={styles.title}>Our Top Recommendations</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.cards}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((card) => (
          <Card
            name={card.Name}
            rating={card.rating}
            location={card.Location}
            price={card.price}
            image={card.image}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B08CDD",
  },
  giftImage: {
    width: 77,
    height: 71,
    right: 100,
  },

  locationIcon: {
    position: "absolute",
    left: "0.5%",
    top: "9.52%",
    width: 20,
    height: 20,
  },

  frame4556: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    gap: 14,
    width: 330,
    height: 55,
  },
  frame4555: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 0,
    gap: 54,
    width: 330,
    height: 22,
  },
  leceisterSquareKitchen: {
    width: 229,
    height: 22,
    fontFamily: "Sora",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#000000",
  },

  image1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
  },
  rectangle1: {
    width: 330,
    height: 209,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  group28: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 286,
    top: 20,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },

  propertyCard: {
    justifyContent: "center",
    width: 330,
    height: 280,
    borderRadius: 8,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  propertyImage: {
    position: "relative",
    width: "100%",
    height: 203,
  },

  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    gap: 20,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: 203,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
  },
  favorite: {
    position: "absolute",
    width: 40,
    height: 40,
    right: 12,
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  heartIcon: {
    width: 26,
    height: 26,
  },
  price1: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 9,
    paddingHorizontal: 14,
    gap: 10,
    position: "absolute",
    width: 90,
    height: 46,
    left: 12,
    top: 12,
    backgroundColor: "#380C72",
    borderRadius: 4,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    gap: 2,
    width: 100,
    height: 28,
  },
  currency: {
    width: 10,
    height: 17,
    fontFamily: "Sora",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    color: "#FFFFFF",
  },
  amount: {
    width: "auto",
    height: 28,
    fontFamily: "Sora",
    fontWeight: "700",
    fontSize: 23,
    lineHeight: 28,
    textAlign: "center",
    color: "#FFFFFF",
  },

  topRecommendations: {
    width: 348,
    height: 24,
    marginTop: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "left",
    color: "#761CBC",
  },
  propertyDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 3,
    paddingTop: 10,
    width: "100%",
    height: 55,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 22,
  },
  squareKitchen: {
    fontWeight: "600",
    fontSize: 18,
    color: "#000000",
  },
  ratingNumber: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000000",
  },
  address: {
    width: "100%",
    height: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  addressText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#646464",
    marginRight: 5,
  },
});

export default HomeComponent;

// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { getDatabase, ref, set, onValue } from 'firebase/database';
// import { app } from '../travelconfig';

// const YourComponent = () => {
//   const [travelData, setTravelData] = useState(null);

//   useEffect(() => {
//     const db = getDatabase(app);
//     const travelRef = ref(db, 'Travel');

//     const randomData = {
//       data1: 'Random value 1',
//       data2: 'Random value 2',
//       data3: 'Random value 3',
//       // Add more data as needed
//     };

//     set(travelRef, randomData)
//       .then(() => {
//         console.log('Random data added to Travel node successfully!');

//         // Read data from Travel node
//         onValue(travelRef, (snapshot) => {
//           const fetchedData = snapshot.val();
//           setTravelData(fetchedData);
//         });
//       })
//       .catch((error) => {
//         console.error('Error adding random data to Travel node: ', error);
//       });
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {travelData && (
//         Object.entries(travelData).map(([key, value]) => (
//           <View key={key}>
//             <Text>{key}: {value}</Text>
//           </View>
//         ))
//       )}
//     </View>
//   );
// };

// export default YourComponent;
