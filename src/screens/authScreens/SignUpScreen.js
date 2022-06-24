import { StyleSheet, Text, View, ScrollView, TextInput, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import {colors, parameter, title, } from "../../global/style"
import Header from '../../components/Header';
import { Icon, Button } from 'react-native-elements'
import { auth } from '../../../NoT';
import { AuthContext } from '../../navigation/AuthContext';


const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFN] = useState('')
  const [lastName, setLN] = useState('')
  const [mobileNumber, setMN] = useState('')

  const {register} = useContext(AuthContext)

  const conditionsArray = [
    email == '',
    password == '',
    firstName == '',
    lastName == '',
    mobileNumber == ''
  ]
  
  return (
    <View style = {styles.container}>
        <Header title = "My Account" type = "arrow-left" navigation = {navigation} />
        <ScrollView keyboardShouldPersistTaps = 'always'>
            <View style = {styles.view1}>
                <Text style={styles.text1}>Sign-Up</Text>
            </View>

            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style = {styles.text1}> Please enter your information</Text>
            </View>

            <View style ={{marginTop: 20}}>
                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Mobile Number"
                    value = {mobileNumber}
                    onChangeText = {text => setMN(text)}
                    />
                </View>

                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "First Name"
                    value = {firstName}
                    onChangeText = {text => setFN(text)}
                    />
                </View>

                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Last Name"
                    value = {lastName}
                    onChangeText = {text => setLN(text)}
                    />
                </View>

                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                </View>
                <View >
                    
                <TextInput
                    style = {styles.textInput1}
                    placeholder = "Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    />
                </View> 
            </View>

            <View style = {{marginHorizontal: 20, marginTop: 30 }}>
                <Button 
                        title = "Sign me UP!"
                        buttonStyle = {parameter.styledButton}
                        titleStyle = {parameter.buttonTitle}
                        onPress = {() => 
                            {if(!conditionsArray.includes(true)) {
                            register(email,password,firstName,lastName,mobileNumber).then(() =>{
                                console.log("Account created using " + email)
                                }
                            )
                            
                            } else { 
                               Alert.alert("A field is not filled") 
                            }
                        }
                    }
                            
                        />
            </View>
            <View style ={styles.view20}>
                        <Text style ={styles.text1}>Already have an account with NuggetsOfNUS ?</Text>
                    </View>
                    <View style ={styles.view21}>
                        <Button 
                            title = "Sign-In"
                            buttonStyle ={styles.button2}
                            titleStyle = {styles.title2}
                            onPress ={()=>{navigation.navigate('SignInScreen')}}
                        />
                    </View>

        </ScrollView> 
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({

    container:{flex:1,
        backgroundColor:'white'
      },

    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
        height: 30
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
    },

    view1:{justifyContent:'center',
             alignItems:'flex-start',
             marginTop:10,
             marginBottom:10,
             paddingHorizontal:15
            },

      text1:{fontSize:22,
        color:colors.buttons,
        fontWeight:'bold'
      },
      
      view20:{marginTop:5
            },
      
      view21:{marginTop:5,
        alignItems:'flex-end',
      },

      button2:{backgroundColor:colors.background3,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.background2,
        height:40,
        paddingHorizontal:20,
        // width:'100%'
                          
      },

      title2:{color:colors.buttons,
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
                        
    }
})