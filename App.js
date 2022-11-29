import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login/login";
import Register from "./src/screens/register/register";
import BasicHome from "./src/screens/home/basichome";
import Home from "./src/screens/home/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar style="dark" backgroundColor="white" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Basic Home" component={BasicHome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
