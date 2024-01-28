import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

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
      <View style={{ width: "auto", alignSelf: "center", margin: 6 }}>
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
            width: "100%",
          }}
        >
          {props.name}
        </Text>
      </View>
    </View>
  );
};

export default function Friends() {
  const navigation = useNavigation();
  const backButton = () => {
    navigation.navigate("Profile");
  };
  const profileIconUrl = "https://example.com/profile-icon.jpg";
  const usersData = [
    {
      id: 1,
      userName: "Shyla Nambiar",
      bio: "Working hard everyday!",
      points: 185,
      profileImage:
        "https://media.licdn.com/dms/image/C4E03AQHQHYqxLkS3ww/profile-displayphoto-shrink_400_400/0/1653607643423?e=1711584000&v=beta&t=k_2gF6P2nQ-PiWz2v2DtgA1_WxpZMu9GVeTpsEbIeuE",
    },
    {
      id: 2,
      userName: "Darshan Reddy",
      bio: "Here for new experiences!",
      points: 134,
      profileImage:
        "https://media.licdn.com/dms/image/D4E03AQGB3mlTrBK7rQ/profile-displayphoto-shrink_100_100/0/1676443847139?e=1711584000&v=beta&t=kjPadO6J7eiw6aienLM7k4SbeR4xsQ0-zAbnc3qVhh8",
    },
    {
      id: 3,
      userName: "Ruby Inder",
      bio: "Life is Good!",
      points: 86,
      profileImage:
        "https://media.licdn.com/dms/image/D5603AQE24WpW5j-qQQ/profile-displayphoto-shrink_100_100/0/1687270334272?e=1711584000&v=beta&t=eo89VDXKV1wixcKea1iHY7l9AVVTTj1rIE2WeQIS0TA",
    },
    {
      id: 4,
      userName: "Rishi Singh",
      bio: "Work hard, play hard",
      points: 67,
      profileImage:
        "https://media.licdn.com/dms/image/D5603AQFUdEA29aqBBQ/profile-displayphoto-shrink_100_100/0/1700827204242?e=1711584000&v=beta&t=4OEgGCyrJtQUgHefzZXK6O2ie3a9wanTKAm_cRTwNEE",
    },
    {
      id: 5,
      userName: "Tanya Sethi",
      bio: "Singing is my passion",
      points: 50,
      profileImage:
        "https://media.licdn.com/dms/image/D5603AQEwAk_kL-KtkA/profile-displayphoto-shrink_100_100/0/1683601661551?e=1711584000&v=beta&t=CcSiUb8PUlnYaHBYVeVazp_TumXjoYFHZHVMWynALzw",
    },
    {
      id: 6,
      userName: "Namita P",
      bio: "Hey There!",
      points: 21,
      profileImage:
        "https://media.licdn.com/dms/image/D5603AQEPmXzyXhuhMA/profile-displayphoto-shrink_100_100/0/1700823876415?e=1711584000&v=beta&t=y5ACuLMTxixAj6MXMKAlbpmLHSQgo9RqEq6VM7E-k_A",
    },
  ];
  return (
    <ScrollView
      style={{ backgroundColor: "#B08CDDBD" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-back"
          type="material"
          size={30}
          color="#fff"
          onPress={() => backButton()}
        />

        <View>
          <View>
            <Text
              style={{
                color: "white",
                marginLeft: -90,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              My Friends
            </Text>
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
              name="Harini"
              image="https://media.licdn.com/dms/image/D5603AQGuvq-wkTzHwQ/profile-displayphoto-shrink_100_100/0/1665304823315?e=1711584000&v=beta&t=L609f00af-jQCUTc3UQNVk3dis7RPV83VxEhKcaFHQI"
            />
            <Recommendations
              name="Samritha"
              image="https://media.licdn.com/dms/image/D5603AQE3XBttOY6vjw/profile-displayphoto-shrink_400_400/0/1692369320741?e=1711584000&v=beta&t=Mv7RyvtmcxtcxWEsFctVnSc8RnTNBJ4GzrbN-w0vxLg"
            />
            <Recommendations
              name="Tanishka"
              image="https://media.licdn.com/dms/image/D5603AQG0YcMO5IJCVQ/profile-displayphoto-shrink_100_100/0/1689086680201?e=1711584000&v=beta&t=gY9tiEqizP0qqLWOBn565CsAL3CfWNL4KixY0Uf3MdI"
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Recommendations
                name="Deepika"
                image="https://media.licdn.com/dms/image/D5603AQHvgwRskRF4nw/profile-displayphoto-shrink_400_400/0/1687279742085?e=1711584000&v=beta&t=0_MM5-4d8aT-RbTgfJVkBCGgnMqOWPqhJwuazyCEWbg"
              />
              <Recommendations
                name="Lakshmi"
                image="https://media.licdn.com/dms/image/D5603AQE63T1a0vmR-Q/profile-displayphoto-shrink_100_100/0/1677601394558?e=1711584000&v=beta&t=Zvjg2f4Tb-3jL9KmywAt_2LW1dewxVIHOpoe_MyX9vY"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    height: 20,
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
  },
  settingsIcon: {
    width: 25,
    height: 25,
  },
});
