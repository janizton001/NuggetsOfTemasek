import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,ScrollView, FlatList,} from 'react-native'
import OrderCard from '../components/OrderCard';
import { db } from '../../NoT';
import { Swipeable } from 'react-native-gesture-handler';
import {query, collection, getDocs ,documentId } from "firebase/firestore";
import { AuthContext } from '../navigation/AuthContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllDeliveries from './AllDeliveries';
import AcceptedDeliveries from './AcceptedDeliveries';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function MyDeliveriesScreen() {

    const Tab = createMaterialTopTabNavigator();
    
    return (
        
        <View style ={styles.container}> 
           <View style = {styles.header}>
                <View style = {{justifyContent: 'center', alignItems : "center", marginLeft: 125}}> 
                    <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> My Deliveries</Text>
                </View>
            </View>   
            <Tab.Navigator  screenOptions={{
                tabBarStyle: {backgroundColor: '#FF8C00', borderBottomRightRadius: 5, borderBottomLeftRadius: 5},
                tabBarActiveTintColor: 'white',
                mountOnBlur: true
                }}>
                <Tab.Screen 
                    name="All Deliveries" 
                    component={AllDeliveries}
                    options = {{
                        
                    }} />
                <Tab.Screen 
                    name="Accepted Deliveries" 
                    component={AcceptedDeliveries}
                    options = {{
                        
                    }} />
            </Tab.Navigator>
        

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

         header: {
            flexDirection: "row" ,
            backgroundColor: "orange",
            height: 70, 
        },

        deleteBox: {
            backgroundColor: '#88F583',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },

          editBox: {
            backgroundColor: '#F67469',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },
    
    })
           
       