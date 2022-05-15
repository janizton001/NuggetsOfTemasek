import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import WelcomeSignin from './src/screens/authScreens/WelcomeSignin';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle = "light-content"
      backgroundColor="orange"
      />

      <WelcomeSignin />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
