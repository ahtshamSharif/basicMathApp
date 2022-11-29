import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import { BButton } from "../../components/bbutton";
import { TButton } from "../../components/tbutton";

function BasicHome({ navigation }) {
  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };
  const brandImage = require("../../../assets/images/mainicon.png");
  const loginIcon = require("../../../assets/images/loginin.png");
  const registerIcon = require("../../../assets/images/register.png");

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topTitle}>Welcome to</Text>
      <Image
        style={styles.logoImage}
        source={brandImage}
        resizeMode={"center"}
      />
      <View style={styles.loginImage}>
        <Image
          style={styles.iconImage}
          source={loginIcon}
          resizeMode={"center"}
        />
        <Image
          style={styles.registerImage}
          source={registerIcon}
          resizeMode={"center"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
          <BButton
            text="Login"
            textColor="white"
            textSize={20}
            width={100}
            onButtonPress={goToLogin}
          />
        </View>
        <View style={{ marginTop: 12, marginHorizontal: 60 }}>
          <BButton
            text="Register"
            textColor="white"
            textSize={20}
            width={100}
            height={35}
            onButtonPress={goToRegister}
          />
        </View>
      </View>
    </View>
  );
}

export default BasicHome;

const styles = StyleSheet.create({
  mainContainer: { padding: 20, flex: 1 },

  logoImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: "center",
  },

  iconImage: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginHorizontal: 20,
  },
  registerImage: {
    width: 105,
    height: 105,
    marginTop: 50,
    marginHorizontal: 60,
  },

  loginImage: {
    flexDirection: "row",
  },
  topTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: 10,
  },
});
