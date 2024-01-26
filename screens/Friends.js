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
            uri: props.profileImage,
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

const Recommendations = (props) => {
  return (
    <View>
      <View style={{ width: 46, margin: 16 }}>
        <Image
          style={{
            width: 46,
            height: 46,
            borderRadius: 9999,
            borderColor: "#5334C7",
            borderWidth: 1,
          }}
          source={{
            uri: props.image,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            color: "white",
            marginTop: 10,
          }}
        >
          {props.name}
        </Text>
      </View>
    </View>
  );
};

export default function Friends() {
  const usersData = [
    {
      id: 1,
      userName: "John Doe5",
      bio: "Software Developer",
      points: 100,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      id: 2,
      userName: "John Doe4",
      bio: "Software Developer",
      points: 100,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      id: 3,
      userName: "John Doe3",
      bio: "Software Developer",
      points: 100,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      id: 4,
      userName: "John Doe1",
      bio: "Software Developer",
      points: 100,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    {
      id: 5,
      userName: "John Doe2",
      bio: "Software Developer",
      points: 100,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
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
      <View>
        <Text
          style={{
            fontSize: 30,
            margin: 25,
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          People you may know{" "}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Recommendations
              name="Sid"
              image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Recommendations
              name="Sid"
              image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
            <Recommendations
              name="Sid"
              image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Recommendations
                name="Sid"
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
              <Recommendations
                name="Sid"
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
