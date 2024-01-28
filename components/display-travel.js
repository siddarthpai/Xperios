import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { tdb } from "../config";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const ReadData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const database = tdb;
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

  const handleTravelsCardPress = (travelsId) => {
    navigation.navigate("travelDetails", { id: travelsId });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView horizontal style={styles.scrollView}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => handleTravelsCardPress(item.id)}
        >
          <Image source={{ uri: item.Image }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.description}>{item.Description}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.duration}>{item.Duration}</Text>
              <Text style={styles.price}>{item.Price}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    height: "fit",
    marginBottom: 64,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    color: "#666",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  duration: {
    fontSize: 12,
    color: "#888",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#761CBC",
  },
});

export default ReadData;
