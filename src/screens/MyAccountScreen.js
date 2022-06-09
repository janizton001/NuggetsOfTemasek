import React, {useState, useEffect, useContext} from 'react';

import {SafeAreaView, View, Button, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { Icon } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthContext';
import {colors, parameter, title, } from "../global/style"

export default function MyAccountScreen() {
    const {user, logout} = useContext(AuthContext);
    return (
        <View> 
            <View style = {{marginHorizontal: 20, marginVertical: 20}}>
                <Button
                title = "LOGOUT"
                buttonStyle = {parameter.styledButton}
                titleStyle = {parameter.buttonTitle}
                onPress = {
                    () => logout()
                    //() => {navigation.navigate("SignUpScreen")}
                }
                />
            </View>
        </View>
    )
}
       