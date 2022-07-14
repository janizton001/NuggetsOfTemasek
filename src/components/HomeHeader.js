import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native'
import { Icon, withBadge } from 'react-native-elements';
import { colors,parameter } from '../global/style';

export default function HomeHeader() {

    

    return (
        <View style = {styles.header}> 
            {/* <View style = {{marginLeft:20, marginTop: 20}}>
                <Icon 
                type = "material-community"
                name = "menu"
                color = "white"
                size = {32}
                />
            </View> */}

            <View style = {{paddingHorizontal: 70}}> 
                <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> Nuggets of NUS</Text>
            </View>
            <View style ={{}}>
                <Icon 
                type ="material-community"
                name = "magnify"
                size = {32} 
                color = "white"
                onPress={() => {}}
            />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        flexDirection: "row" ,
        backgroundColor: "orange",
        height: parameter.headerHeight, 
        justifyContent:'center',
        alignItems: 'center',
        
        },

})