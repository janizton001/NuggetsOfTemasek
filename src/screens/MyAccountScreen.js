import React, {useState, useEffect, useContext} from 'react';

import {SafeAreaView, View, Button, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { Icon } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthContext';
import {colors, parameter, title, } from "../global/style"
import { db } from '../../NoT';

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
            <View style = {{flex:1}}>
                <View style = {styles.header}>
                    <View style = {{justifyContent: 'center', alignItems : "center", marginLeft: 125}}> 
                        <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> My Account</Text>
                    </View>
                </View>
                
                 <View style = {{marginTop: 10, marginLeft: 15 }}>
                    <Text style = {{fontSize :18, fontWeight : "bold"}}>
                    Email :   {userData.email}
                    </Text>
                </View>

                <View  style = {{marginTop: 10, marginLeft: 15 }}>
                    <Text style = {{fontSize :18, fontWeight : "bold"}}>
                    First Name :   {userData.firstName}
                    </Text>
                </View>

                <View  style = {{marginTop: 10, marginLeft: 15 }}>
                    <Text style = {{fontSize :18, fontWeight : "bold"}}>
                    Last Name :   {userData.lastName}
                    </Text>
                 </View>

                 <View  style = {{marginTop: 10, marginLeft: 15 }}>
                    <Text style = {{fontSize :18, fontWeight : "bold"}}>
                    Mobile Number :   {userData.mobileNumber}
                    </Text>
                 </View>
                    
                   
                <View style = {{flex:4,justifyContent: 'flex-end',marginBottom: 30}}>
                <View style = {{marginHorizontal: 20, marginTop:30 }}>
                    <Button
                            title = "Edit Profile"
                            buttonStyle = {parameter.styledButton}
                            titleStyle = {parameter.buttonTitle}
                            onPress = {() => {navigation.navigate("EditProfileScreen")}}
                            />
                </View>
            
                <View style = {{marginHorizontal: 20, marginTop:30 }}>
                <Button
                    title = "LOGOUT"
                    buttonStyle = {parameter.styledButton}
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

})
       