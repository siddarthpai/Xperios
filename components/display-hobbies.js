import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { db3 } from "../hobbies-config";
import { Icon } from "react-native-elements";

const DisplayHobbies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reference to the root of your database
        const database = db3;
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
        <ScrollView horizontal style={styles.scrollView}>
            {data.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Image source={{ uri: item.Image }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <Text style={styles.date}>{item.Date}</Text>
                        <Text style={styles.name}>{item.Name}</Text>
                        <Text style={styles.location}>{item.Location}</Text>
                        <Text style={styles.price}>{item.Price}</Text>
                    </View>
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
    date: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#3498db",
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
export default DisplayHobbies;
