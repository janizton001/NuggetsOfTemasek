import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native'
import { Icon, withBadge } from 'react-native-elements';
import { colors,parameter } from '../global/style';

export default function HomeHeader() {

    const CartIcon = withBadge(0)(Icon)

    return (
        <View style = {styles.header}> 
            <View style = {{marginLeft:20, marginTop: 20}}>
                <Icon 
                type = "material-community"
                name = "menu"
                color = "white"
                size = {32}
                />
            </View>

            <View style = {{justifyContent: 'center', alignItems : "center", marginLeft: 50, marginRight: 40}}> 
                <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> Nuggets of NUS</Text>
            </View>
            <View style = {{flex:  5, justifyContent: 'center', alignItems : "center"}}>
                <CartIcon 
                type ="material-community"
                name = "cart"
                size = {32} 
                color = "white"
            />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row" ,
        backgroundColor: "orange",
        height: parameter.headerHeight, 
        justifyContent: 'space-between'
    },
})