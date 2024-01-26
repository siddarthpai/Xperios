import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const User = (props) => {
  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      <View style={{ flex: 1 }}>
        <Image
          style={{
            width: 46,
            height: 46,
            borderRadius: 9999,
          }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
          }}
        />
      </View>
      <View style={{ flex: 3, alignContent: "center", alignSelf: "center" }}>
        <Text
          style={{
            marginBottom: 3,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {props.userName}
        </Text>
        <Text style={{ color: "white" }}>{props.bio}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/star.png")} />
          <Text
            style={{
              fontWeight: "bold",
              margin: 5,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            {props.points}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function Friends() {
  const usersData = [
    {
      id: 1,
      userName: "John Doe",
      bio: "Software Developer",
      points: 100,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      id: 1,
      userName: "John Doe",
      bio: "Software Developer",
      points: 100,
      profileImage: "https://example.com/johndoe.jpg",
    },
    {
      id: 1,
      userName: "John Doe",
      bio: "Software Developer",
      points: 100,
      profileImage: "https://example.com/johndoe.jpg",
    },
    // Fit this data acc to your needs
  ];
  return (
    <ScrollView
      style={{ backgroundColor: "#B08CDDBD" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: "column", margin: 16 }}>
        {usersData.map((user) => (
          <User
            key={user.id}
            userName={user.userName}
            bio={user.bio}
            points={user.points}
            profileImage={user.profileImage}
          />
        ))}
      </View>
    </ScrollView>
  );
}
