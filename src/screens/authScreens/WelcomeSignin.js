import React , {useContext, useEffect} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput, Image} from 'react-native'
import Header from '../../components/Header';
import {colors, parameter, title, } from "../../global/style"
import { Icon , Button } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
import { NavigationContainer } from '@react-navigation/native';


export default function WelcomeSignin({navigation}) {

    return (
        <View style = {{flex: 1}}>

            <SafeAreaView style = {{flex:4, justifyContent: 'center',alignItems: 'center', marginTop: 20}}> 
                <Text style = {{color: colors.buttons, fontSize: 28, fontWeight: 'bold'}}> Welcome to NuggetsOfNUS!</Text>  
            </SafeAreaView> 

            <View style = {styles.logo}> 
                <Image 
                source = {{uri: "https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png"}}
                style = {{width: "70%", height: 150}}
                />
            </View>

            <View style = {{flex:4, justifyContent: 'flex-end', marginBottom: 30}}>
            <View style = {{marginHorizontal: 20, marginTop:30 }}>
                <Button
                    title = "SIGN IN"
                    buttonStyle = {parameter.styledButton}
                    titleStyle = {parameter.buttonTitle}
                    onPress = {() => {
                        navigation.navigate("SignInScreen")
                    }}
                    />
            </View>

            <View style = {{marginHorizontal: 20, marginTop:30 }}>
            <Button
                    title = "Create Account"
                    buttonStyle = {parameter.styledButton}
                    titleStyle = {parameter.buttonTitle}
                    onPress = {() => {navigation.navigate("SignUpScreen")}}
                    />
            </View>
            </View>
            
        </View>
    )    
        
}

const styles = StyleSheet.create({
    logo: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})