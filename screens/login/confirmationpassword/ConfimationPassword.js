import { View, Text, Image, TouchableOpacity } from "react-native";
import GradientBackground from "../../../commons/GradientBackground";
import Input from "../../../commons/MainInput";
import Logo from "../../../assets/logo.png";
import styles from "./ConfirmationPasswordStyle";
import Password from "../../../assets/passwordIcon.png";
import User from "../../../assets/userIcon.png";
import eyePassword from "../../../assets/eyePassword.png";
import { useState, useRef } from "react";
import MainButton from "../../../commons/MainButton";

const ConfirmationPassword = (props) => {
  const [visiblePassword, setPasswordVisible] = useState(true);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(true);

  return (
    <GradientBackground style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputsContainer}>
      <Text style={styles.text}>Enter new password</Text>
        <Input
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={visiblePassword}
          sourceLeft={Password}
          styleLeft={styles.LockIcon}
          sourceRight={eyePassword}
          styleRight={styles.eyeIcon}
          onPress={() => setPasswordVisible(!visibleConfirmPassword)}
        />
        <Text style={styles.lowerText}>at least 8 characters</Text>
        <Input
          placeholder="Confirm password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={visiblePassword}
          sourceLeft={Password}
          styleLeft={styles.LockIcon}
          sourceRight={eyePassword}
          styleRight={styles.eyeIcon}
          onPress={() => setVisibleConfirmPassword(!visiblePassword)}
        />
      </View>
      <MainButton text={"Reset password"} />
    </GradientBackground>
  );
};

export default ConfirmationPassword;
