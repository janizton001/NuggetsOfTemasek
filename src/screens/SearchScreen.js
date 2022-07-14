import React, {useEffect, useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import MenuCard from '../components/MenuCard';

export default function SearchScreen({navigation,route}) {


    return (
        <View style ={styles.container}>
            <View style ={styles.view1}>
                <Icon 
                    name ="arrow-left"
                    type = "material-community"
                    color = 'white'
                    size = {25}
                    onPress ={()=>navigation.goBack()}
                />
                <Text style ={styles.text1}> Search </Text>
            </View>

            <View style ={styles.locationAndSortRow} >
                <View style = {{width: '80%'}}>
                    
                   <TextInput
                    style = {{backgroundColor: 'white',height: 35, borderRadius: 5,justifyContent: 'flex-end', borderWidth: 1, borderColor: 'grey'}}
                    placeholder = "Search"
                   />
                </View>
                 <View style = {{marginRight: 20}}> 
                <Icon
                    type = "material-community"
                    name = "tune"
                    color = {colors.grey1}
                    size = {25}
                    />
                </View> 
            </View>
            <View>
                <Text> </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },
    
      container:{flex:1,
                 top:0,
                 left:0,
                 right:0
         },
    
    view1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:'orange',
        paddingTop:25,
        paddingBottom: 20,
    },
    
    text1:{
        fontWeight:"bold",
          marginLeft:120,
          color: 'white',
          fontSize:24
        },

        locationAndSortRow: {
            flexDirection: 'row',
             alitgnItems: 'center',
             marginTop: 15, 
             justifyContent: "space-between",
             marginHorizontal: 10,
             
             
        },
})