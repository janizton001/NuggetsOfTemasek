import React, {useState, useEffect, useContext} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, Image,} from 'react-native'
import { Icon } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthContext';
import {colors, parameter, title, } from "../global/style"
import { db } from '../../NoT';
import { Button } from '@react-native-material/core';
import UserProfileCard from '../components/UserProfileCard';


export default function MyAccountScreen({navigation}) {
    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState('');

    const getUser = async() => {
        await db
        .collection('user')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }
    
      useEffect(() => {
        getUser();
    }, []);

    return (
            <View style = {{flex:1, backgroundColor: '#F7EDDC'}}>
                <View style = {styles.header}>
                    <View style = {{justifyContent: 'center', alignItems : "center", marginLeft: 125}}> 
                        <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> My Account</Text>
                    </View>
                </View>
                <View style = {{flex:2}}>
               
                    <View style = {{alignItems: 'center', backgroundColor: "#e6e6e6", paddingVertical: 40, borderBottomRightRadius: 15,borderBottomLeftRadius: 15 }}>
                        <TouchableOpacity>
                        <Image
                        style ={{height:100, width:100, borderRadius: 60 }}
                        source={{uri: "https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png"}}
                        />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style = {{backgroundColor:'#F7EDDC'}}>
                    <View style = {styles.profileView}>
                        <Text style ={styles.profileHeader}>
                            Email :   
                        </Text>
                        <Text style = {styles.profileText}>
                            {userData.email}
                        </Text>
                    </View>

                    <View  style = {styles.profileView}>
                        <Text style = {styles.profileHeader}>
                            First Name :   
                        </Text>
                        <Text style = {styles.profileText}>
                         {userData.firstName}
                        </Text>
                    </View>

                    <View  style = {styles.profileView}>
                        <Text style = {styles.profileHeader}>
                        Last Name :  
                        </Text>
                        <Text style = {styles.profileText}>
                        {userData.lastName}
                        </Text>
                    </View>

                    <View  style = {styles.profileView}>
                        <Text style = {styles.profileHeader}>
                        Mobile Number :   
                        </Text>
                        <Text style = {styles.profileText}>
                        {userData.mobileNumber}
                        </Text>
                    </View>
                 </ScrollView>  
                 </View>
                   
                <View style = {{justifyContent: 'flex-end',marginBottom: 30,}}>
                <View style = {{marginHorizontal: 30}}>
                    <Button
                            title = "EDIT PROFILE"
                            color = 'orange'
                            style = {{height: 50, justifyContent: 'center'}}
                            titleStyle = {parameter.buttonTitle}
                            onPress = {() => {navigation.navigate("EditProfileScreen")}}
                            />
                </View>
            
                <View style = {{marginHorizontal: 30, marginTop: 25 }}>
                <Button
                    title = "LOGOUT"
                    color = 'orange'
                    style = {{height: 50, justifyContent: 'center'}}
                    titleStyle = {parameter.buttonTitle}
                    onPress = {
                        () => logout()
                    }
                />
                </View>
                
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row" ,
        backgroundColor: "orange",
        height: parameter.headerHeight, 
    },

    profileView: {
        marginTop: 10,
         marginLeft: 15,
         flexDirection: 'row',
         alignItems: 'center',
         padding: 10,
         flex: 2
    },

    profileHeader: {
        fontSize :18, fontWeight : "bold", fontFamily: 'Verdana'
    },

    profileText: {
        marginLeft: 20,
        fontSize: 20
    }

})
       