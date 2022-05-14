import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors, parameter} from "../global/style"
import { Icon } from 'react-native-elements'

export default function Header({title,type}) {

    return (
        <SafeAreaView style = {styles.header}>
            <View style = {{marginLeft:20}}>
                <Icon
                    type = "material-community"
                    name = {type}
                    color = "white"                
                    size = {28}
                    onPress = {() => {}}
                />
            </View>
            <View> 
                <Text style = {styles.headerText}> {title} </Text>
            </View>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row" ,
        backgroundColor: "orange",
        height: parameter.headerHeight, 
    },

    headerText: {
        color: colors.grey1,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,
    }
})
