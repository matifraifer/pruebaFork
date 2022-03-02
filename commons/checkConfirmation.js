import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CheckSolid from "../assets/check-solid.png";
const CheckConfirmation = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#E4D01C",
          "rgba(209, 139, 0, 1)",
          "rgba(209, 139, 0, 0.8655)",
        ]}
        start={{ x: 1 }}
        locations={[0, 0.9]}
        style={styles.circle}
      >
        <Image source={CheckSolid} style={styles.image}></Image>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "20%",
    height: "10%",
    alignItems: "center",
    padding: 20,
  },
  circle: {
    borderRadius: 45,
    padding: 12,
    margin: 10,
  },
  image: {
    height: 75,
    width: 74,
    color: "white",
  },
});

export default CheckConfirmation;
