import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ConfirmationPassword from '../screens/login/confirmationpassword/ConfimationPassword';
import LoginScreen from '../screens/login/login/LoginScreen';
import RegisterScreen from '../screens/register/registerC/RegisterScreen';

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
      <StackNav.Navigator initialRouteName='Home'>
     
        <StackNav.Screen component={HomeScreen} name="Home" options={{headerShown: false}} />
        <StackNav.Screen component={LoginScreen} name="Login" options={{headerShown: false}} />
        <StackNav.Screen component={RegisterScreen} name="Register" options={{headerShown: false}} />
        <StackNav.Screen component={ConfirmationPassword} name="ConfirmationPassword" options={{headerShown: false}} />
      </StackNav.Navigator>     
  );
}

export default Stack;