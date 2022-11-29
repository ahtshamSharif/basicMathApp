import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function BButton({
  bgColor = "#3aafa9",
  text = "Write your text",
  textColor = "white",
  textSize = 12,
  textWeight = "bold",
  width = 300,
  height = 33,
  onButtonPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        padding: 4,
        alignItems: "center",
        borderRadius: 20,
        margin: 2,
      }}
      onPress={onButtonPress}
    >
      <Text
        style={{
          color: textColor,
          fontSize: textSize,
          fontWeight: textWeight,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
export { BButton };
