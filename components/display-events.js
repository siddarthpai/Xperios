import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { useFonts } from "expo-font";
import { Button } from "@rneui/themed";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React, { useState, useRef } from "react";
import { Icon } from "react-native-elements";
import eventsData from '../events.json'

const Events = ({ navigation }) => {
    const handleEventPress = (eventId) => {
        navigation.navigate('Details', { eventId });
    };

    return (
        <ScrollView horizontal style={styles1.scrollView}>
            {eventsData.map((event) => (
                <TouchableOpacity
                    key={event.id}
                    onPress={() => handleEventPress(event.id)}
                >
                    <View style={styles1.itemContainer}>
                        <View style={styles1.whiteBox}>
                            <Image
                                style={{
                                    width: "90%",
                                    height: 100,
                                    borderRadius: 15,
                                    alignSelf: "center",
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                                source={{ uri: event.imageUrl }}
                            />
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    marginVertical: 6,
                                }}>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        marginLeft: 10,
                                    }}
                                >{event.muse}</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        marginTop: 8,
                                    }}
                                >
                                    <Icon
                                        name="place"
                                        color="#2D264B4D"
                                        size={16}
                                        style={{ marginLeft: 8 }}
                                    />
                                    <Text style={{
                                        color: "black",
                                        fontSize: 10,
                                    }}>{event.location}</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        marginTop: 8,
                                    }}>
                                    <Icon
                                        name="event"
                                        color="#2D264B4D"
                                        size={16}
                                        style={{ marginLeft: 8 }}
                                    />
                                    <Text style={{
                                        color: "black",
                                        fontSize: 10,
                                        fontWeight: "400",
                                    }}>{event.date}</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        marginTop: 32,
                                    }}>
                                    <Icon
                                        name="tag"
                                        type="font-awesome"
                                        color="#EC441E"
                                        size={16}
                                        style={{ marginLeft: 10 }}
                                    />
                                    <Text style={{
                                        marginLeft: 5,
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "#EC441E",
                                    }}>{event.attendees}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles1 = StyleSheet.create({
    scrollView: {
      flexDirection: 'row',
      padding: 10,
    },
    itemContainer: {
      marginRight: 20, // Adjust this margin to set the gap between items
    },
    whiteBox: {
      width: 200, // Adjust width as needed
      height: 250,
      backgroundColor: 'white',
      borderRadius: 8,
    },
  });

export default Events;
