import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const FeedScreen = () => {
  const navigation = useNavigation();
  const [statusUsers, setStatusUsers] = useState([
    {
      id: 1,
      name: "User 1 large name",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 3,
      name: "User lx name here",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 4,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 5,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar5.png",
    },
    {
      id: 6,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 7,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 8,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
    {
      id: 9,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 10,
      name: "User 2",
      avatarUrl: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
  ]);

  const backButton = () => {
    navigation.navigate("Profile");
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "@vettion12",
      name: "Vinita N",
      avatarUrl: "https://media.licdn.com/dms/image/D5603AQE3XBttOY6vjw/profile-displayphoto-shrink_400_400/0/1692369320741?e=1711584000&v=beta&t=Mv7RyvtmcxtcxWEsFctVnSc8RnTNBJ4GzrbN-w0vxLg",
      time: "1 day",
      description:
        "Had a blast at the workshop! The vibes were 💯. Big shoutout to the Tanmay Sir for keeping it real!",
      imageUrl: null,
    },
    {
      id: 2,
      username: "@vettion12",
      name: "Vinita N",
      avatarUrl: "https://media.licdn.com/dms/image/D5603AQE3XBttOY6vjw/profile-displayphoto-shrink_400_400/0/1692369320741?e=1711584000&v=beta&t=Mv7RyvtmcxtcxWEsFctVnSc8RnTNBJ4GzrbN-w0vxLg",
      time: "1 day",
      description:
        "Also, who's up for a trek tomorrow to see the sunrise at Nandi Hills and get some amazing clicks???",
      imageUrl: null,
    },
    {
      id: 3,
      username: "@denooo",
      name: "Dev Oberoi",
      avatarUrl: "https://media.licdn.com/dms/image/D5603AQFUdEA29aqBBQ/profile-displayphoto-shrink_100_100/0/1700827204242?e=1711584000&v=beta&t=4OEgGCyrJtQUgHefzZXK6O2ie3a9wanTKAm_cRTwNEE",
      time: "11 hour",
      description:
        "Do you wanna go w/me to take some sky photo at next time? I also took alot of magnificient photos, like this ....",
      imageUrl:
        "https://th.bing.com/th/id/R.8af7f7a7c0d24ff97ec3b53e2d8d0926?rik=dg5jE%2bi3y%2bII0w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fHzauSlF.jpg&ehk=3nXUsJtgh7j%2f6SRoXedNcSU9mC1OMqMBg34q1LuGxIo%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      username: "@shi_shi",
      name: "Sanya Jain",
      avatarUrl: "https://media.licdn.com/dms/image/D5603AQEwAk_kL-KtkA/profile-displayphoto-shrink_100_100/0/1683601661551?e=1711584000&v=beta&t=CcSiUb8PUlnYaHBYVeVazp_TumXjoYFHZHVMWynALzw",
      time: "3 hour",
      description: "OHHHHHHH!!! Would love to come with you on your next shoot",
      imageUrl: null,
    },

    {
      id: 5,
      username: "@kirina_34",
      name: "Kiran Prasad",
      avatarUrl: "https://media.licdn.com/dms/image/D5603AQE24WpW5j-qQQ/profile-displayphoto-shrink_100_100/0/1687270334272?e=1711584000&v=beta&t=eo89VDXKV1wixcKea1iHY7l9AVVTTj1rIE2WeQIS0TA",
      time: "1 hour",
      description:
        "OMG!!!!! it's such a beauty!!! I'm soo inspired after today's class :)",
      imageUrl: null,
    },
  ]);

  const PostCard = ({ post }) => (
    <ScrollView vertical>
      <View style={styles.messageContainer}>
        <Image source={{ uri: post.avatarUrl }} style={styles.messageAvatar} />
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.messageUsername}>
              {post.name}{" "}
              <Text
                style={{
                  color: "rgba(109, 74, 205, 0.5)",
                  fontWeight: "400",
                  fontSize: 13,
                }}
              >
                {post.username}
              </Text>
            </Text>
            <Text style={styles.messageDate}>{post.date}</Text>
          </View>
          <Text style={styles.messageDescription}>{post.description}</Text>
          {post.imageUrl && (
            <Image
              source={{ uri: post.imageUrl }}
              style={styles.messageImage}
            />
          )}
          <View style={styles.messageFooter}>
            <View style={styles.messageButton}>
              <Text style={styles.messageButtonText}>{post.time}</Text>
            </View>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.messageButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <ScrollView vertical style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-back"
          type="material"
          size={30}
          color="#fff"
          onPress={() => backButton()}
        />

        <View style={styles.groupInfo}>
          <Image
            source={require("../assets/photography.png")} // Adjust the path as needed
            style={styles.groupDp}
          />
          <View style={styles.groupDetails}>
            <Text style={styles.groupName}>Photography Workshop</Text>
            <Text style={{ color: "white" }}>Dissolves in 2 days</Text>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <Icon
            name="person-circle-outline"
            type="ionicon"
            size={30}
            color="#fff"
            style={{ marginRight: 10 }}
          />

          <Icon name="search" type="material" size={30} color="#fff" />

          <Icon name="more-vert" type="material" size={30} color="#fff" />
        </View>
      </View>

      <FlatList
        data={posts}
        contentContainerStyle={styles.postListContainer}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B08CDDBD",
  },

  postListContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },

  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  messageUsername: {
    fontWeight: "700",
    color: "#6D4ACD",
    fontSize: 15,
  },
  messageDate: {
    fontSize: 12,
    color: "#A9A9A9",
  },
  messageDescription: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6D4ACD",
  },
  messageImage: {
    marginTop: 10,
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  messageFooter: {
    flexDirection: "row",
    marginTop: 10,
  },
  messageButton: {
    marginRight: 10,
  },
  messageButtonText: {
    color: "#808080",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#635A8F99",
  },
  backButtonIcon: {
    width: 20,
    height: 10,
    // Add more styles as needed
  },
  groupInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupDp: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    
  },
  groupDetails: {
    color: "white",
  },
  groupName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    // Add more styles as needed
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    // Add more styles as needed
  },
  settingsIcon: {
    width: 25,
    height: 25,
    // Add more styles as needed
  },
});

export default FeedScreen;
