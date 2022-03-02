import { Image, Text } from "react-native";
import GradientBackground from "../../../commons/GradientBackground";
import CodeInput from "../../../components/CodeInput";
import styles from "./ConfirmationStyle";
import logo from "../../../assets/logo_vaya.png";
export default function Confirmation(props) {
  return (
    <GradientBackground>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.subtitle}>
        Enter the code that was send to you by SMS
      </Text>
      <CodeInput />
      <Text style={styles.subtitle}>Resend code</Text>
    </GradientBackground>
  );
}
