import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import DisplayHobbies from "../components/display-hobbies";

const ImagesTopHalf = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <ScrollView
        vertical
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />

        <View style={styles.group77}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1663134093726-cb77e87d42a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9iYmllc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.image28}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUECVO8fs4CYSXIfSh3ycibNWbjkrPMyPiw&usqp=CAU",
            }}
            style={styles.image29}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1532272278764-53cd1fe53f72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9iYmllc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.image25}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1547357812-4a336d835928?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9iYmllc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.image22}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1522410818928-5522dacd5066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9iYmllc3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.image23}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1537365587684-f490102e1225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGFuY2V8ZW58MHx8MHx8fDA%3D",
            }}
            style={styles.image24}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1554965863-e1576e9340c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjcm8lMjB5b2dhfGVufDB8fDB8fHww",
            }}
            style={styles.image27}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
            }}
            style={styles.image26}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D",
            }}
            style={styles.image30}
          />

          <View>
            <Text style={styles.exploreHobbiesTitle}>
              Explore your <Text style={{ color: "#761CBC" }}>Hobbies</Text>
            </Text>
            <Text style={styles.hobbyClassesDescription}>
              Find one-of-a-kind Hobby classes happening in and around your
              city!
            </Text>
          </View>
        </View>
        <View style={{ marginTop: -110 }}>
          <DisplayHobbies />
        </View>
      </ScrollView>
      <View style={{ color: "#761CBC" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#B08CDDBD",
    paddingTop: 10, // Adding padding for the search bar
  },
  searchBar: {
    width: "90%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  group77: {
    width: 354,
    height: 500,
    marginTop: -30,
  },
  searchbar: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "90%",
    marginTop: 32,
    marginBottom: 32,
  },
  image28: {
    position: "absolute",
    width: 64.66,
    height: 102.23,
    left: 11,
    top: 84.76, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image29: {
    position: "absolute",
    width: 65.2,
    height: 102.23,
    left: 155.4,
    top: 176.77, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image25: {
    position: "absolute",
    width: 64.66,
    height: 102.23,
    left: 300.34,
    top: 52.17, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image22: {
    position: "absolute",
    width: 65.2,
    height: 102.87,
    left: 228.14,
    top: 33, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image23: {
    position: "absolute",
    width: 64.66,
    height: 102.23,
    left: 228.14,
    top: 144.82, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image24: {
    position: "absolute",
    width: 64.66,
    height: 102.87,
    left: 300.34,
    top: 163.35, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image27: {
    position: "absolute",
    width: 65.2,
    height: 102.23,
    left: 155.4,
    top: 64.95, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image26: {
    position: "absolute",
    width: 64.66,
    height: 102.87,
    left: 83.2,
    top: 117.34, // Reduced by 25 units
    borderRadius: 8.95,
  },
  image30: {
    position: "absolute",
    width: 65.74,
    height: 67.73,
    left: 83.2,
    top: 40.67, // Reduced by 25 units
    borderRadius: 8.95,
  },
  exploreHobbiesTitle: {
    position: "absolute",
    width: 385,
    height: 35,
    left: 2,
    top: 287,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 35, // or 110%
    textAlign: "center",
    color: "#000000",
  },
  hobbyClassesDescription: {
    position: "absolute",
    width: 320,
    height: 56,
    left: 30,
    top: 327,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 18, // or 110%
    textAlign: "center",
    color: "#222222",
  },
});

export default ImagesTopHalf;
