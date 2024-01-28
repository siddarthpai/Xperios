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
    <ScrollView
      style={{ backgroundColor: "#B08CDD" }}
      showsVerticalScrollIndicator={false}
    >
      <Searchbar
        placeholder="Connect with your friends!"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <UserProfile
          userName="Sujatha"
          imageUrl="https://media.licdn.com/dms/image/C4E03AQHQHYqxLkS3ww/profile-displayphoto-shrink_400_400/0/1653607643423?e=1711584000&v=beta&t=k_2gF6P2nQ-PiWz2v2DtgA1_WxpZMu9GVeTpsEbIeuE"
        />
        <UserProfile
          userName="Deepika"
          imageUrl="https://media.licdn.com/dms/image/D5603AQHvgwRskRF4nw/profile-displayphoto-shrink_400_400/0/1687279742085?e=1711584000&v=beta&t=0_MM5-4d8aT-RbTgfJVkBCGgnMqOWPqhJwuazyCEWbg"
        />
        <UserProfile
          userName="Lakshmi"
          imageUrl="https://media.licdn.com/dms/image/D5603AQE63T1a0vmR-Q/profile-displayphoto-shrink_100_100/0/1677601394558?e=1712188800&v=beta&t=fA5d5tdJuyfYEQjwoJ3XyjRu5x0NTpdMcD99UNNoRzA"
        />
        <UserProfile
          userName="Sid"
          imageUrl="https://media.licdn.com/dms/image/D5603AQEYSYrmiskViQ/profile-displayphoto-shrink_100_100/0/1662868149764?e=1712188800&v=beta&t=9cUsDNAGIvTNb3KHDQC1ZcjY-Gq6-kAmEoU32MJxx0U"
        />
      </ScrollView>
      <ScrollView>
        <UserPost
          userName="Sid"
          userProfileSrc="https://media.licdn.com/dms/image/D5603AQEYSYrmiskViQ/profile-displayphoto-shrink_100_100/0/1662868149764?e=1712188800&v=beta&t=9cUsDNAGIvTNb3KHDQC1ZcjY-Gq6-kAmEoU32MJxx0U"
          postContent=" Had the best time at Ramnagara trek! #Beauty_nature #Cloud"
          postImageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6Uyl07AwJY6l1KabrM_kJs7d4zD9bSTDJg&usqp=CAU"
          Nolikes="399"
          Nocomments="200"
          time="5"
        />
        <UserPost
          userName="Darshan"
          userProfileSrc="https://media.licdn.com/dms/image/D4E03AQGB3mlTrBK7rQ/profile-displayphoto-shrink_100_100/0/1676443847139?e=1711584000&v=beta&t=kjPadO6J7eiw6aienLM7k4SbeR4xsQ0-zAbnc3qVhh8"
          postContent=" Great night at Plan B Indiranagar trying the wings challenge! #Gamenight #Wings"
          postImageSrc="https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg"
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
    marginBottom: 8,
  },
});

export default Community;
