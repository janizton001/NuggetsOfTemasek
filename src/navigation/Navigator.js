import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeSignin from '../screens/authScreens/WelcomeSignin';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="WelcomeSignin" component={WelcomeSignin} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component= {HomeScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    )
}