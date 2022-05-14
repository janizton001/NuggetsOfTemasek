import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignInScreen from './src/screens/authScreens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle = "light-content"
      backgroundColor="orange"
      />

      <SignInScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
