import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Clipboard,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const handleTextClick = () => {
    Clipboard.setString("@johndoe");
    alert("Username copied to clipboard!");
  };
  const staticUserDetails = {
    name: "Lakshmi",
    userName: "lakshmi1205",
    phoneNumber: "+91 95383 33095",
    email: "vaidu.231@gmail.com",
    friends: 36,
    activities: 27,
    CreativityQuotient: 8312,
    EnvironmentalQuotient: 45,
    FitnessQuotient: 4580,
    InteractionQuotient: 8764,
    SocialServiceQuotient: 10,
    visionboard:
      "https://i.pinimg.com/originals/cc/a3/74/cca374fbd98b22c1217f5c5e5abbd25b.jpg",
  };

  const handleEditClick = () => {
    // Handle click logic here
    console.log("Edit clicked");
  };

  const handlePageChange = ({ page }) => {
    navigation.navigate(page);
  };

  const Chest = (props) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          width: 33,
          height: 33,
          borderRadius: 30,
          borderColor: "#FFC700",
          position: "absolute",
          right: 0,
        }}
      >
        <Image
          style={{
            width: 20,
            height: 18,
            position: "absolute",
            top: 7,
            left: 7,
          }}
          source={props.image}
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#B08CDDBD" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://media.licdn.com/dms/image/D5603AQE63T1a0vmR-Q/profile-displayphoto-shrink_100_100/0/1677601394558?e=1712188800&v=beta&t=fA5d5tdJuyfYEQjwoJ3XyjRu5x0NTpdMcD99UNNoRzA"
                
              }}
            />
            <View style={styles.info}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 22 }}
              >
                {staticUserDetails.name}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 5, color: "black" }}>
                {staticUserDetails.email}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 5, color: "black" }}>
                {staticUserDetails.phoneNumber}
              </Text>
              <TouchableWithoutFeedback onPress={handleTextClick}>
                <Text
                  style={{
                    color: "#8359ac",
                    fontWeight: "bold",
                    fontSize: 14,
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
                    size={10}
                    color="#2986cc"
                    onPress={handleEditClick}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      color: "#2986cc",
                      fontSize: 13,
                      textDecorationLine: "underline",
                    }}
                  >
                    Edit
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.header1}>
            <TouchableOpacity
              onPress={() => handlePageChange({ page: "Upcoming" })}
            >
              <View
                style={{
                  backgroundColor: "#B08CDDBD",
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
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Upcoming{"\n"}Events
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePageChange({ page: "Activities" })}
            >
              <View
                style={{
                  backgroundColor: "#FF678296",
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
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Past{"\n"}Activities
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePageChange({ page: "Rewards" })}
            >
              <View
                style={{
                  backgroundColor: "#4DC4DEA3",
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
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  View{"\n"}Rewards
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.header1}>
            <TouchableOpacity
              style={{ marginLeft: "20%", marginBottom: "10%" }}
              onPress={() => handlePageChange({ page: "Groups" })}
            >
              <View
                style={{
                  backgroundColor: "#4DC4DEA3",
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
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Groups
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginBottom: "10%" }}
              onPress={() => handlePageChange({ page: "Friends" })}
            >
              <View
                style={{
                  backgroundColor: "#B08CDDBD",
                  height: 40,
                  marginVertical: 10,
                  marginHorizontal: 10,
                  width: 100,
                  borderRadius: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "60%",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  My Friends
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.quotient}>
            <Text
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                color: "white",
              }}
            >
              Creativity Quotient:
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <ProgressBar
                  style={styles.progressBar}
                  progress={staticUserDetails.CreativityQuotient / 10000}
                  color="#ffacdd"
                />
              </View>

              <Chest image={require("../assets/creativity.png")} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "#ffc6e7",margin: 5 }}>
                {staticUserDetails.CreativityQuotient}
              </Text>
              <Text
                style={{
                  margin: 10,
                  color: "white",
                  position: "absolute",
                  right: 0,
                }}
              >
                Goal 10,000
              </Text>
            </View>
          </View>

          <View style={styles.quotient}>
            <Text style={styles.text}>Fitness Quotient:</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <ProgressBar
                  style={styles.progressBar}
                  progress={staticUserDetails.FitnessQuotient / 10000}
                  color="#f5b7b7"
                />
              </View>
              <Chest image={require("../assets/fitness.png")} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold",color: "#f7beb2", margin: 5 }}>
                {staticUserDetails.FitnessQuotient}
              </Text>
              <Text
                style={{
                  margin: 10,
                  color: "white",
                  position: "absolute",
                  right: 0,
                }}
              >
                Goal 10,000
              </Text>
            </View>
          </View>

          <View style={styles.quotient}>
            <Text style={styles.text}>Interaction Quotient:</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <ProgressBar
                  style={styles.progressBar}
                  progress={staticUserDetails.InteractionQuotient / 10000}
                  color="#9fc5e8"
                />
              </View>
              <Chest image={require("../assets/int.png")} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", color: "#8cbfef",margin: 5 }}>
                {staticUserDetails.InteractionQuotient}
              </Text>
              <Text
                style={{
                  margin: 10,
                  color: "white",
                  position: "absolute",
                  right: 0,
                }}
              >
                Goal 10,000
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 351,
            height: 194,
            borderRadius: 20,
            alignSelf: "center",
            marginBottom: 50,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
            source={{
              uri: staticUserDetails.visionboard,
            }}
          />
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
    height: 15,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
});

export default Profile;
