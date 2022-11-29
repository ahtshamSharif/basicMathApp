import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Second Button for Text Sensible Buttons. it has no backgroud but has touchable properties

function TButton({
  text = "Write your text",
  textColor = "#3aafa9",
  textSize = 12,
  textWeight = "bold",
  onButtonPress,
}) {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 2 }}
      activeOpacity={0.6}
      onPress={onButtonPress}
    >
      <Text
        style={{ color: textColor, fontSize: textSize, fontWeight: textWeight }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
export { TButton };
