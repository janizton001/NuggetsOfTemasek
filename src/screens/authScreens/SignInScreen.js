import React, {useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput} from 'react-native'
import Header from '../../components/Header';
import {colors, parameter, title, } from "../../global/style"
import { Icon, Button } from 'react-native-elements'
import { auth } from '../../../firebase';

export default function SignInScreen({navigation}) {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then (userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <View style = {styles.container}> 
            <Header title = "My Account" type = "arrow-left" navigation = {navigation} />

            <View style = {{marginLeft:20, marginTop:10}}>
                <Text style = {title}> Sign-in </Text>
            </View>

            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style = {styles.text}> Please enter email and password</Text>
            </View>

            <View style ={{marginTop: 20}}>
                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Email"
                    value= {email}
                    onChangeText = {text => setEmail(text)}
                    />
                </View>
                <View style = {styles.textInput2}>
                    
                <TextInput
                    style = {{width: "80%"}}
                    placeholder = "Password"
                    value = {password}
                    onChangeText = {text => setPassword(text)}
                    />
                </View> 
            </View>

            <View style = {{marginHorizontal: 20, marginVertical: 20}}>
                <Button
                title = "SIGN IN"
                buttonStyle = {parameter.styledButton}
                titleStyle = {parameter.buttonTitle}
                onPress = {() => {
                    navigation.navigate("HomeScreen")
                }}
                />
            </View>

            <View style = {{alignItems: "center"}}>
                <Text style = {{...styles.text}}> Forgot Password? </Text>
            </View> 

            <View style = {{alignItems: "center", marginTop: 20}}>
                <Text style = {{fontSize: 20, fontWeight: "bold"}}> OR </Text>
            </View> 

            <View style = {{marginHorizontal: 20, marginTop: 30 }}>
                <Button
                        title = "Create Account"
                        buttonStyle = {parameter.styledButton}
                        titleStyle = {parameter.buttonTitle}
                        onPress = {() => {navigation.navigate("SignUpScreen")}}
                        />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text :{
        color: colors.grey1,
        fontSize: 16
    },

    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
    },

    textInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15,
    }

})
