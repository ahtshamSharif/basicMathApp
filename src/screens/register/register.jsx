import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { BButton } from "../../components/bbutton";
import { TButton } from "../../components/tbutton";

function Register({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const brandImage = require("../../../assets/images/mainicon.png");

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.logoImage}
        source={brandImage}
        resizeMode={"center"}
      />

      <Text style={styles.appTitle}> Register to Get Started</Text>
      <TextInput style={styles.inputContainer} placeholder={"Your Name"} />
      <TextInput style={styles.inputContainer} placeholder={"Phone Number"} />
      <TextInput style={styles.inputContainer} placeholder={"Class Name"} />
      <TextInput
        style={styles.inputContainer}
        secureTextEntry={true}
        placeholder={"Password"}
      />
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Checkbox value={true} color={"#3aafa9"} />
        <Text style={styles.bottomTexs}> I accept Terms of Services</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <BButton
          text="Register"
          textColor="black"
          textSize={20}
          onButtonPress={goToLogin}
        />
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={styles.bottomText}>
          Already Register on Routine Maths?{" "}
        </Text>
        <View style={{ marginTop: 50 }}>
          <TButton text="Login" textSize={16} onButtonPress={goToLogin} />
        </View>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  mainContainer: { padding: 20, flex: 1 },

  logoImage: {
    width: 150,
    height: 150,
    marginTop: 1,
    alignSelf: "center",
  },

  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 5,
    marginTop: 20,
  },

  inputContainer: {
    borderWidth: 0.5,
    margin: 5,
    borderColor: "black",
    padding: 4,
    borderRadius: 8,
  },
  bottomTexs: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },

  bottomText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 50,
    alignSelf: "center",
  },
  bottomTex: {
    fontSize: 15,
    color: "#3aafa9",
    fontWeight: "bold",
  },
});
