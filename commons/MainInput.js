import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function MainInput({
  onChangeText,
  placeholder,
  value,
  editable,
  inlineImageLeft,
  placeholderTextColor,
  secureTextEntry,
  onTextInput,
  sourceLeft,
  sourceRight,
  styleRight,
  styleLeft,
  onPress,
  icon
}) {
  return (
    <View style={styles.container}>
      <Image source={sourceLeft} icon={icon} style={styleLeft} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        editable={editable}
        inlineImageLeft={inlineImageLeft}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onTextInput={onTextInput}
      />
      <TouchableOpacity onPress={onPress}>
        <Image source={sourceRight} style={styleRight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 41,
    justifyContent: "center",
    color: "#FFFFFF",
    opacity: 0.5,
    fontSize: 14,
    paddingLeft: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    marginTop: 10,
    marginBottom:5,
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 25,
  },
});
