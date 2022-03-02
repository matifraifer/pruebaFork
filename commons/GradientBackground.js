import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgba(147, 115, 34, 1)", "rgba(18, 18, 18, 1)"]}
      start={{
        x: 0.16,
      }}
      locations={[0.01, 1]}
      style={styles.container}
    >
      <View style={styles.container}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});

export default GradientBackground;
