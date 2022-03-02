import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./homeStyles.js";
import WallpaperHome from "../../assets/WallpaperHome.png";
import Logo from "../../assets/logo.png";
import Vector1 from '../../assets/Vector1.png';
import Facebook from '../../assets/facebookLogo.png';
import Google from '../../assets/googleLogo.png';
import Instagram from '../../assets/igLogo.png';

const HomeScreen = props => {
  return (
      <ImageBackground source={WallpaperHome} style={styles.wallpaper}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.welcome}>¡Welcome!</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Register")}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialContainer}>
        <Image source={Vector1} />
        <Image source={Facebook} />
        <Image source={Google} />
        <Image source={Instagram} />
        <Image source={Vector1} />
        </View>
      </ImageBackground>
  );
};

export default HomeScreen;
