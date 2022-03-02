import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import birthdayIcon from "../../../assets/birthdayIcon.png";
import eyePassword from "../../../assets/eyePassword.png";
import phoneIcon from "../../../assets/phoneIcon.png";
import GradientBackground from "../../../commons/GradientBackground";
import Logo from "../../../assets/logo.png";
import styles from "./registerStyles";
import userIcon from "../../../assets/userIcon.png";
import DatePicker from "../../../commons/DatePicker";
import axios from "axios";
import { useEffect, useState } from "react";
import { EvilIcons } from '@expo/vector-icons';

const RegisterScreen = (props) => {
  const [fetchUser, setFetchUser] = useState({});
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  useEffect(async () => {
    const data = await axios.post("http://localhost:3000/api/users/register");
    setFetchUser(data);
  }, []);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    // email: "",
    password: "",
  });

  const inputHandler = (e, field, value) => {
    setNewUser({
      ...newUser,
      [field]: e || value,
    });
  };

  // console.log(Object.values(newUser))

  const submitForm = () => {
    let info = Object.values(newUser).some((infoUser) => infoUser === "");
    if (info) {
      Alert.alert("Complete fields please!");
    } else {
      console.log("user", fetchUser);
      fetchUser;
      console.log("newUser", newUser);
      Alert.alert("User Create");
    }
  };

  const eyeHandleChange = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  return (
    <GradientBackground>
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.finputContainer}>
        <View style={styles.containerInputs}>
          <Image source={userIcon} style={styles.userILn} />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            onChangeText={(e) => inputHandler(e, "firstName")}
          />
        </View>
        <View style={styles.containerInputs}>
          <Image source={userIcon} style={styles.userILn} />
          <TextInput
            placeholder="Last name"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            onChangeText={(e) => inputHandler(e, "lastName")}
          />
        </View>
      </View>
      <View style={styles.containerB}>
        <Image source={birthdayIcon} style={styles.birthdayImage} />
        <Text style={styles.bText}>Birthday</Text>
        <DatePicker />
      </View>
      <View style={styles.containerLargeI}>
        <Image source={userIcon} style={styles.userILn} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          style={styles.largeInput}
        />
      </View>
      <View style={styles.containerLargeI}>
        <TouchableOpacity onPress={eyeHandleChange}>
          {/* <Image source={eyePassword} /> */}
          {passwordVisibility === true ? <Image source={eyePassword} /> : <EvilIcons name="eye" size={19} color="black" />}
        </TouchableOpacity>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          style={styles.largeInput}
          onChangeText={(e) => inputHandler(e, "password")}
          secureTextEntry={passwordVisibility}
        />
      </View>
      <Text style={styles.characters}>at least 8 characters </Text>
      <View style={styles.containerLargeIC}>
        <Image source={eyePassword} />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#FFFFFF"
          style={styles.largeInput}
        />
      </View>
      <View style={styles.allContainerP}>
        <View style={styles.numberInputCon}>
          <TextInput
            placeholder="54"
            placeholderTextColor="#FFFFFF"
            style={styles.numberInput}
          />
        </View>
        <View style={styles.containerPhoneCon}>
          <Image source={phoneIcon} style={styles.phoneImage} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#FFFFFF"
            style={styles.phoneInput}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Text style={styles.acountText}>¿Have an Acount? Login</Text>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default RegisterScreen;
