import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import { Icon } from "react-native-elements";
const Booking = () => {
  const shareTicket = async () => {
    try {
      const result = await Share.share({
        message: "Check out my event ticket!",
      });

      if (result.action === Share.sharedAction) {
        // Sharing was successful
        console.log("Ticket shared successfully");
      } else if (result.action === Share.dismissedAction) {
        // Sharing was dismissed
        console.log("Sharing dismissed");
      }
    } catch (error) {
      console.error("Error sharing ticket:", error.message);
    }
  };
  return (
    <View style={{ backgroundColor: "#B08CDDBD", height: "100%" }}>
      <Text
        style={{
          color: "#771DBC",
          marginLeft: 35,
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Ticket Details
      </Text>
      <View
        style={{
          flexDirection: "column",
          height: "100%",
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              alignSelf: "center",
              width: "80%",
              height: "auto",
              borderRadius: 10,
              marginTop: 40,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, marginTop: 20 }}>
                <Image
                  style={{ height: 150, width: 150, marginLeft: 5 }}
                  source={require("../assets/QR.jpg")}
                />
              </View>
              <View style={{ flex: 1, marginTop: 20 }}>
                <Text style={{ fontSize: 15, margin: 10 }}>
                  <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                    Name:{" "}
                  </Text>
                  Deep Shah
                </Text>
                <Text style={{ fontSize: 15, margin: 10 }}>
                  <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                    Ticket ID:{" "}
                  </Text>
                  D0213
                </Text>
                <Text style={{ fontSize: 15, margin: 10 }}>
                  <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                    Order ID:{" "}
                  </Text>
                  02D34
                </Text>
                <Text style={{ fontSize: 15, margin: 10 }}>
                  <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                    Price:{" "}
                  </Text>
                  500 Rs/-
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Icon
                name="information-circle-outline"
                type="ionicon"
                size={20}
                color="#B08CDDBD"
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Please show this QR at the enterance
              </Text>
            </View>

            <Text
              style={{
                fontSize: 15,
                alignSelf: "center",
                position: "absolute",
                bottom: 30,
                fontWeight: "bold",
              }}
            ></Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              alignSelf: "center",
              width: "80%",
              height: "auto",
              borderRadius: 10,
              marginTop: 65,
            }}
          >
            <Text
              style={{
                color: "#761CBC",
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: 10,
                fontSize: 28,
              }}
            >
              Ghar by Zakir Khan
            </Text>

            <Text style={{ fontSize: 16, margin: 10 }}>
              <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                Venue:
              </Text>
              The Cheese Box Studios, Ahmedabad
            </Text>
            <Text style={{ fontSize: 16, margin: 10 }}>
              <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                Date:
              </Text>
              13th March,2023
            </Text>
            <Text style={{ fontSize: 16, margin: 10 }}>
              <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                Timing:
              </Text>
              7:00-9:00 PM
            </Text>
            <Text style={{ fontSize: 16, margin: 10 }}>
              <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                Genre:
              </Text>
              Comedy
            </Text>
            <Text style={{ fontSize: 16, margin: 10 }}>
              <Text style={{ color: "#761CBC", fontWeight: "bold" }}>
                Seat:
              </Text>
              B6
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "center",
              backgroundColor: "#635A8F",
              width: 179,
              height: 42,
              borderRadius: 20,
              marginBottom: 20,
            }}
            onPress={shareTicket}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
                marginTop: 12,
              }}
            >
              Share Ticket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Booking;
