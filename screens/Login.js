import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigate = useNavigation();
  const handleSignInWithOTP = () => {
    navigate.navigate("OTP");
  };

  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "507370985844-k8vhgpnshkm4qbslclqo3li6la7iqonp.apps.googleusercontent.com",
    androidClientId:
      "507370985844-sfjrqmrasd0uk80bd5ivskl3m2j9huib.apps.googleusercontent.com",
    iosClientId:
      "507370985844-0jmfcmt0b2t7lqd9r7eoq0mms89761c7.apps.googleusercontent.com",
    webClientId:
      "507370985844-chk054u7noa6uij2f7nkp1ll9i6p3tn8.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {}
  };
  return (
    <View
      style={{
        backgroundColor: "#B08CDDBD",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignInWithOTP}>
          <Text style={styles.buttonText}>SignIn using OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            promptAsync();
          }}
        >
          <Text style={styles.buttonText}>SignIn using Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: "75%",
    margin: 10,
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
