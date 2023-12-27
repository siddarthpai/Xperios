import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Clipboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ProgressBar } from "react-native-paper";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const Profile = () => {
  const handleTextClick = () => {
    Clipboard.setString("@johndoe");
    alert("Username copied to clipboard!");
  };
  const staticUserDetails = {
    name: "John Doe",
    userName: "johndoe",
    phoneNumber: "+1234567890",
    email: "johndoe@example.com",
    friends: 36,
    activities: 27,
    CreativityQuotient: 30,
    EnvironmentalQuotient: 45,
    FitnessQuotient: 52,
    InteractionQuotient: 80,
    SocialServiceQuotient: 10,
  };

  const handleEditClick = () => {
    // Handle click logic here
    console.log("Edit clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />
          <View style={styles.info}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 28 }}>
              {staticUserDetails.name}
            </Text>
            <Text style={{ fontSize: 12, marginBottom: 5, color: "#FF5733" }}>
              {staticUserDetails.email}
            </Text>
            <Text style={{ fontSize: 12, marginBottom: 5, color: "#FF5733" }}>
              {staticUserDetails.phoneNumber}
            </Text>
            <TouchableWithoutFeedback onPress={handleTextClick}>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginBottom: 10,
                }}
              >
                @{staticUserDetails.userName}
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleEditClick}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name="pencil"
                  type="font-awesome"
                  size={14}
                  color="#FF5733"
                  onPress={handleEditClick}
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{ color: "#FF5733", textDecorationLine: "underline" }}
                >
                  Edit
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 32 }}
            >
              {staticUserDetails.friends}+
            </Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Friends
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 32 }}
            >
              {staticUserDetails.activities}+
            </Text>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Activities Attended
            </Text>
          </View>
        </View>
        <View style={styles.header1}>
          <TouchableOpacity onPress={() => console.log("Button pressed")}>
            <View
              style={{
                backgroundColor: "rgb(121,228,131)",
                height: 40,
                width: 100,
                borderRadius: 6,
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 26,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Upcoming{"\n"}Events
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Button pressed")}>
            <View
              style={{
                backgroundColor: "rgb(231,118,109)",
                height: 40,
                width: 100,
                borderRadius: 6,
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Past{"\n"}Activities
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Button pressed")}>
            <View
              style={{
                backgroundColor: "rgb(120,182,228)",
                height: 40,
                marginVertical: 10,
                marginHorizontal: 10,
                width: 100,
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                View{"\n"}Rewards
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>User Profile</Text>

        <View style={styles.quotient}>
          <Text>Creativity Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.CreativityQuotient / 100}
            color="#fff"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Environmental Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.EnvironmentalQuotient / 100}
            color="#fff"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Fitness Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.FitnessQuotient / 100}
            color="#fff"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Interaction Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.InteractionQuotient / 100}
            color="#fff"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Social Service Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.SocialServiceQuotient / 100}
            color="#fff"
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B08CDDBD",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  header1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  headerContent: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  info: {
    marginLeft: 20,
    padding: 10,
    margin: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  quotient: {
    marginBottom: 20,
  },
  progressBar: {
    marginTop: 8,
    height: 20,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: "B08CDDBD",
  },
});

export default Profile;
