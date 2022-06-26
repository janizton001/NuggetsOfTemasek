<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput} from 'react-native'
=======
import React, { useState, useEffect, useContext } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput, Alert} from 'react-native'
>>>>>>> Stashed changes
import Header from '../../components/Header';
import {colors, parameter, title, } from "../../global/style"
import { Icon, Button } from 'react-native-elements'
import { auth } from '../../../NoT';
<<<<<<< Updated upstream
=======
import { AuthContext } from '../../navigation/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
>>>>>>> Stashed changes

export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // navigate to HomeScreen if user is valid
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("HomeScreen")
          }
        })
    
        return unsubscribe
      }, [])

<<<<<<< Updated upstream
    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

<<<<<<< Updated upstream
=======
   const {login, forgetPassword} = useContext(AuthContext)
   
=======
   const {login, forgetPassword} = useContext(AuthContext)
   const conditionsArray = [
    email == '',
  ]
>>>>>>> Stashed changes
   
>>>>>>> Stashed changes
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
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style = {styles.textInput2}>
                    
                <TextInput
                    style = {{width: "80%"}}
                    placeholder = "Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry 
                    />
                </View> 
            </View>

            <View style = {{marginHorizontal: 20, marginVertical: 20}}>
                <Button
                title = "SIGN IN"
                buttonStyle = {parameter.styledButton}
                titleStyle = {parameter.buttonTitle}
                onPress = {
                    handleLogin
                    //() => {navigation.navigate("SignUpScreen")}
                }
                />
            </View>

<<<<<<< Updated upstream
            <View style = {{marginHorizontal: 20, marginVertical: 20}}>
                <Button
                title = "Forgot Password"
                buttonStyle = {parameter.styledButton}
                titleStyle = {parameter.buttonTitle}
                onPress = {
                    () => forgetPassword(email)
                    //() => {navigation.navigate("SignUpScreen")}
                }
                />
                <Text style = {{...styles.text}}> Forgot Password? </Text>
=======
            <View style = {{alignItems: "center"}}>
                <Text 
                style = {{...styles.text}} 
                onPress = {() =>
                    { if(!conditionsArray.includes(true)) {
                        forgetPassword(email)
                    } else {
                        Alert.alert("Please enter your email to change your password.")
                    }
                    
                } 
                

                    
                    
                }> 
                Forgot Password? 
                </Text>
>>>>>>> Stashed changes
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
