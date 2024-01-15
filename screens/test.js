import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../config";

const ReadData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reference to the root of your database
    const database = db;
    const dataRef = ref(database);

    // Set up a listener for real-time changes
    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const dataFromDb = snapshot.val();
        if (dataFromDb) {
          // Convert object to an array
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

    // Cleanup: Unsubscribe from the database changes when the component unmounts
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text>Data from Realtime Database:</Text>
      {data.map((item) => (
        <View key={item.id}>
          <Text>{item.eventName}</Text>
          <Text>{item.price.discounted}</Text>
          <Text>{item.price.original}</Text>
        </View>
      ))}
    </View>
  );
};

export default ReadData;
