import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import { Searchbar } from "react-native-paper";

const UserProfile = ({ userName, imageUrl }) => {
  return (
    <View
      style={{
        height: "100%",
        position: "relative",
        flexDirection: "column",
        display: "flex",
        padding: 20,
      }}
    >
      <Image
        style={{
          width: 58.6,
          height: 58.6,
          borderRadius: 9999,
          borderWidth: 1.67,
          borderColor: "#5334C7",
        }}
        source={{ uri: imageUrl }}
      />
      <Icon style={{ alignSelf: "center" }} name="add" />

      <Text
        style={{
          color: "white",
          fontSize: 14.23,
          fontFamily: "Poppins",
          fontWeight: "500",
          lineHeight: 24.28,
          textAlign: "center",
        }}
      >
        {userName}
      </Text>
    </View>
  );
};
const UserPost = ({
  userName,
  postContent,
  postImageSrc,
  userProfileSrc,
  Nolikes,
  Nocomments,
  time,
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#6D4ACD80",
          height: "fit",
          alignSelf: "center",
          width: "90%",
          borderRadius: 20,
          marginBottom: 32,
        }}
      >
        {/* top bar with user details and the 3 dot icon*/}
        <View style={{ flexDirection: "row", margin: 16 }}>
          <Image
            style={{
              width: 58.6,
              height: 58.6,
              borderRadius: 9999,
              borderWidth: 1.67,
              borderColor: "#5334C7",
            }}
            source={{ uri: userProfileSrc }}
          />
          <View
            style={{
              position: "relative",
              top: "2%",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {userName}
            </Text>
            <Text style={{ color: "white" }}>{time} minutes</Text>
          </View>
          <View style={{ position: "absolute", right: 0 }}>
            <Icon style={{ alignSelf: "center" }} name="add" />
          </View>
        </View>

        <View style={{ margin: 16, marginBottom: 50 }}>
          <Text style={{ color: "white" }}>{postContent}</Text>
        </View>
        {postImageSrc && (
          <View style={{ alignSelf: "center" }}>
            <Image
              style={{
                width: 307,
                height: 210,
                marginBottom: 52,
                borderRadius: 30,
              }}
              source={{ uri: postImageSrc }}
            />
          </View>
        )}

        {/* bottom bar with likes,comments and share*/}
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 10,
            width: "100%",
            marginLeft: 26,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icon
              style={{ alignSelf: "center" }}
              name="favorite"
              color="white"
            />
            <Text
              style={{
                color: "white",
                position: "relative",
                top: "10%",
                marginRight: 16,
              }}
            >
              {Nolikes}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icon style={{ alignSelf: "center" }} name="chat" color="white" />
            <Text style={{ color: "white", position: "relative", top: "10%" }}>
              {Nocomments}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              right: "15%",
            }}
          >
            <Icon
              style={{
                alignSelf: "center",
                transform: [{ rotateZ: "-45deg" }],
              }}
              name="send"
              color="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Community = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <ScrollView style={{ backgroundColor: "#B08CDD" }}>
      <Searchbar
        placeholder="Connect with your friends!"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <UserProfile
          userName="SidPai"
          imageUrl="https://via.placeholder.com/59x59"
        />
        <UserProfile
          userName="Charam🌹"
          imageUrl="https://via.placeholder.com/59x59"
        />
        <UserProfile
          userName="Shishimaroo"
          imageUrl="https://via.placeholder.com/59x59"
        />
        <UserProfile
          userName="Deepika"
          imageUrl="https://via.placeholder.com/59x59"
        />
      </ScrollView>
      <ScrollView>
        <UserPost
          userName="SidPai"
          userProfileSrc="https://via.placeholder.com/59x59"
          postContent="Test Test, This is a shitty sky that I took last week, have a terrible night :) #Beauty_nature #Cloud"
          postImageSrc="https://via.placeholder.com/307x210"
          Nolikes="399"
          Nocomments="200"
          time="5"
        />
        <UserPost
          userName="SidPai"
          userProfileSrc="https://via.placeholder.com/59x59"
          postContent="Test Test, This is a shitty sky that I took last week, have a terrible night :) #Beauty_nature #Cloud"
          postImageSrc="https://via.placeholder.com/307x210"
          Nolikes="399"
          Nocomments="200"
          time="5"
        />
        <UserPost
          userName="Balu 🐻🐻"
          userProfileSrc="https://via.placeholder.com/59x59"
          postContent="Test Test, cant wait to have a wonderful night with teddy :) #Wedding_day #Cant wait!"
          Nolikes="399"
          Nocomments="200"
          time="5"
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "90%",
    marginTop: 32,
    marginBottom: 32,
  },
});

export default Community;
