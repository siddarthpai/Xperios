import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const SignIn = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneNum = phoneNumber;
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNum, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((error) => {
        console.error("Error sending verification:", error);
      });
  };

  const confirmCode = () => {
    const phoneNum = phoneNumber;
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((userCredential) => {
        const user = userCredential.user;
        setCode("");
        const userDetails = {
          phoneNumber: phoneNum,
          CreativityQuotient: 0,
          FitnessQuotient: 0,
          InteractionQuotient: 0,
          TeamworkQuotient: 0,
          EnvironmentalQuotient: 0,
          SocialServiceQuotient: 0,
        };
        
    firebase
      .database()
      .ref(`profiles/${user.uid}`)
      .set(userDetails)
      .then(() => {
        console.log("User details saved to the database!");
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.error("Error saving user details:", error);
      });
  })
      .catch ((error) => {
  alert(error);
});
  };

const handleTap = () => {
  Keyboard.dismiss();
};

return (
  <TouchableWithoutFeedback onPress={handleTap}>
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.otpText}>Login using OTP</Text>
      <TextInput
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.sendVerification}
        onPress={sendVerification}
      >
        <Text style={styles.buttonText}>Send Verification</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Confirmation Code"
        onChangeText={setCode}
        keyboardType="number-pad"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
        <Text style={styles.buttonText}>Confirm Verification</Text>
      </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>
);
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 24,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  sendVerification: {
    padding: 20,
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
  sendCode: {
    padding: 20,
    backgroundColor: "#9b59b6",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  otpText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
  },
});
