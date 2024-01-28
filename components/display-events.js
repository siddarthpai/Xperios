import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { edb } from "../config";
import { useNavigation } from "@react-navigation/native";
import eventData from '../eventdetail.json'; // Adjust the path as needed


const DisplayEvents = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const database = edb;
    const dataRef = ref(database);

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const dataFromDb = snapshot.val();
        if (dataFromDb) {
          const dataArray = Object.keys(dataFromDb).map((key) => ({
            id: key,
            ...dataFromDb[key],
          }));
          setData(dataArray);
        } else {
          setData([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleEventCardPress = (eventId) => {
    navigation.navigate("eventDetails", { id: eventId });
  };

  const handlePress = () => {
    navigation.navigate('eventDetails', { eventDetails: eventData[0] });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView horizontal style={styles.scrollView}>
      {/* Static Card at the beginning of the ScrollView */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress()}
      >
        {/* Include static card content here */}
        <Image source={{ uri: eventData[0].image }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.category}>{eventData[0].Name}</Text>
          <Text style={styles.name}>{eventData[0].Dates}</Text>
          <Text style={styles.location}>{eventData[0].Location}</Text>
          <Text style={styles.price}>{eventData[0].Individualprice} onwards</Text>
        </View>
      </TouchableOpacity>

      {data.map((item) => (
        <View>
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            // onPress={() => handleEventCardPress(item.id)}
          >
            <Image source={{ uri: item.Image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.category}>{item.Category}</Text>
              <Text style={styles.name}>{item.Name}</Text>
              <Text style={styles.location}>{item.Location}</Text>
              <Text style={styles.price}>{item.Price}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
  card: {
    width: 300,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },

  cardContent: {
    padding: 15,
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#761CBC",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  location: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e74c3c",
  },
});
export default DisplayEvents;
