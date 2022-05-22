import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import {colors, parameter, title, } from "../../global/style"
import Header from '../../components/Header';
import { Icon, Button } from 'react-native-elements'

const SignUpScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <Header title = "My Account" type = "arrow-left" navigation = {navigation} />
        <ScrollView keyboardShouldPersistTaps = 'always'>
            <View style = {styles.view1}>
                <Text style={styles.text1}>Sign-Up</Text>
            </View>

            <View style = {{alignItems: "center", marginTop: 10}}>
                <Text style = {styles.text}> Please enter your information</Text>
            </View>

            <View style ={{marginTop: 20}}>
                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Mobile Number"
                    />
                </View>

                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "First Name"
                    />
                </View>

                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Last Name"
                    />
                </View>

                <View>
                    <TextInput
                    style = {styles.textInput1}
                    placeholder = "Email"
                    />
                </View>
                <View style = {styles.textInput2}>
                    
                <TextInput
                    style = {{width: "80%"}}
                    placeholder = "Password"
                    />
                </View> 
            </View>

            <View style = {{marginHorizontal: 20, marginTop: 30 }}>
                <Button
                        title = "Sign me UP!"
                        buttonStyle = {parameter.styledButton}
                        titleStyle = {parameter.buttonTitle}
                        onPress = {() => {navigation.goBack()}}
                        />
            </View>
            <View style ={styles.view20}>
                        <Text style ={styles.text6}>Already have an account with NuggetsOfNUS ?</Text>
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

      view2:{justifyContent:'flex-start',
             backgroundColor:'white',
             paddingHorizontal:15
            },

      view3:{marginTop:5,
            marginBottom:10
          },

      text2:{fontSize:15,
            color:colors.grey2
          },

      view4:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5
          
            },

      view5:{ marginLeft:30,
              marginTop:20      
               },

      input1:{fontSize:16, },

      view6:{flexDirection:'row',
              borderWidth:1,
              borderColor: colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
          },

       view7:   {marginLeft:0,
                 maxWidth:"65%",         
               },

      input2:{fontSize:16,
              marginLeft: 0,
              marginBottom:0
                  },         

      view8:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
          },

      view9:{marginLeft:0,
             maxWidth:"65%",    
           },

      input3:{fontSize:16,
        marginLeft: 0,
        marginBottom:0
       },

      view10: {flexDirection:'row',
              borderWidth:1,
              borderColor:colors.grey4,
              borderRadius:12,
              paddingLeft:5,
              marginTop:20,
              height:48
       },

       email:{fontSize:24,
              padding:0,
              marginBottom:0 ,
              marginTop:11,
              marginLeft:2
              },

       view11 : { marginLeft:30,
                  maxWidth:"65%",    
                },

       input4:{fontSize:16,
              marginLeft: -20,
              marginBottom:-10
              },      

     view13:  {flexDirection:"row",
              height:40,
            } ,

    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
      view16:{flexDirection:'row'},

      text4:{textDecorationLine:'underline',
            color:'green',
            fontSize:13
            },

      button1: {backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1, 
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:'100%'
                          
      },
      
      title1:{color:"white",
      fontSize:20,  
      fontWeight:"bold" ,
      alignItems:"center",
      justifyContent:"center"  ,
      marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
      view19:{ backgroundColor:'white',
              paddingHorizontal:15,
              
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