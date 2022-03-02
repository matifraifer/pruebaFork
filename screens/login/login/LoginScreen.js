import { View, Text, Image, TouchableOpacity } from "react-native";
import GradientBackground from "../../../commons/GradientBackground";
import Input from "../../../commons/MainInput";
import Logo from "../../../assets/logo.png";
import styles from "./loginStyles";
import Password from "../../../assets/passwordIcon.png";
import User from "../../../assets/userIcon.png";
import eyePassword from "../../../assets/eyePassword.png";
import { useState, useRef } from "react";
import MainButton from "../../../commons/MainButton";
import { EvilIcons } from '@expo/vector-icons';


const LoginScreen = (props) => {
  const [visiblePassword, setPasswordVisible] = useState(true);

  const handleChangePassword = () => {
    setPasswordVisible(!visiblePassword);
  };

  return (
    <GradientBackground style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputsContainer}>
          
          <Input
            placeholder="Username"
            placeholderTextColor="#FFFFFF"
            placeholderStyle={{ fontFamily: "AnotherFont", borderColor: "red" }}
            sourceLeft={User}
            styleLeft={styles.LockIcon}
          />
          <Input
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={visiblePassword}
            sourceLeft={Password}
            styleLeft={styles.LockIcon}
            sourceRight={eyePassword}
            styleRight={styles.eyeIcon}
            onPress={handleChangePassword}
          />
        <Text style={styles.fp}>I forgot my password</Text>
      </View>
      <MainButton text={"Login"}/>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
        <Text style={styles.account}>¿Haven´t Acount? Register</Text>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default LoginScreen;
