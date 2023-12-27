import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ProgressBar } from "react-native-paper";

const Profile = () => {
  const staticUserDetails = {
    name: "John Doe",
    phoneNumber: "+1234567890",
    email: "johndoe@example.com",
    CreativityQuotient: 30,
    EnvironmentalQuotient: 45,
    FitnessQuotient: 52,
    InteractionQuotient: 80,
    SocialServiceQuotient: 10,
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
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.username}>@johndoe</Text>
            <Button title="Edit Profile" onPress={() => {}} />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>User Profile</Text>

        <View style={styles.quotient}>
          <Text>Creativity Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.CreativityQuotient / 100}
            color="#3498db"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Environmental Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.EnvironmentalQuotient / 100}
            color="#3498db"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Fitness Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.FitnessQuotient / 100}
            color="#3498db"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Interaction Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.InteractionQuotient / 100}
            color="#3498db"
          />
        </View>

        <View style={styles.quotient}>
          <Text>Social Service Quotient:</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={staticUserDetails.SocialServiceQuotient / 100}
            color="#3498db"
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
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  headerContent: {
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
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    color: "#999",
    fontSize: 18,
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
  },
});

export default Profile;
