import { TouchableOpacity, Text, StyleSheet } from "react-native";
const MainButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 43,
    backgroundColor: "#DCCB33",
    margin: "2%",
    borderRadius: 21.5,
    width: 287,
    justifyContent: "center",
    marginTop: "25%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20.83,
  },
});

export default MainButton;
