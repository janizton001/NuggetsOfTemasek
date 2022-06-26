import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import { registerRootComponent } from 'expo';
import { colors } from './src/global/style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './src/navigation/RootNavigator';
import AuthStack from './src/navigation/Navigator';
import Providers from './src/navigation/Providers';




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle = "light-content"
      backgroundColor = {colors.grey1}
      />
    <Providers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
