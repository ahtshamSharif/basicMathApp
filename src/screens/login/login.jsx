import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { BButton } from "../../components/bbutton";
import { TButton } from "../../components/tbutton";

function Login({ navigation }) {
  const goToRegister = () => {
    navigation.navigate("Register");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };

  const brandImage = require("../../../assets/images/mainicon.png");

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.logoImage}
        source={brandImage}
        resizeMode={"center"}
      />

      <Text style={styles.appTitle}> Login Here </Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={"Your Name / Phone Number"}
      />
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
          text="Login"
          textColor="black"
          textSize={20}
          onButtonPress={goToHome}
        />
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={styles.bottomText}>
          Not Registered on Routine Maths??{" "}
        </Text>
        <View style={{ marginTop: 120 }}>
          <TButton text="Sign Up" textSize={16} onButtonPress={goToRegister} />
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  mainContainer: { padding: 20, flex: 1 },

  logoImage: {
    width: 150,
    height: 150,
    marginTop: 10,
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
    margin: 7,
    borderColor: "black",
    padding: 5,
    borderRadius: 8,
  },

  bottomTex: {
    fontSize: 15,
    color: "#3aafa9",
    fontWeight: "bold",
    marginHorizontal: 10,
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
    marginTop: 120,
    alignSelf: "center",
  },
});
