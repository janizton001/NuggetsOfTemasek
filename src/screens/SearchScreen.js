import React, {useEffect, useState, Component} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData, restaurantData } from '../global/Data';
import MenuCard from '../components/MenuCard';
import StallCard from '../components/StallCard';
import FoodCard from '../components/FoodCard';


export default function SearchScreen({navigation, route}) {

    const [data, setData] = useState(restaurantData)
    // const [stallData, setStallData] = useState(null)
    const [location, setLocation] = useState("")

    
    const searchName = (input) => {
        let data = restaurantData
        const searchData = data.filter((item) => (
            item.name.toLowerCase().includes(input))
                
        )  
        console.log(searchData)
        setData(searchData)
    }

    useEffect( () => {
        let {location} = route.params
        setLocation(location)
    }, [])

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
                <Text style ={styles.text1}> Restaurant Search </Text>
            </View>

            <View style ={styles.locationAndSortRow} >
                <View style = {{width: '100%'}}>
                    
                   <TextInput
                    style = {{backgroundColor: 'white',height: 35, borderRadius: 5,justifyContent: 'flex-end', borderWidth: 1, borderColor: 'grey'}}
                    placeholder = "Search"
                    
                    onChangeText = {text => searchName(text)}
                   />
                </View>
                 {/* <View style = {{marginRight: 20}}> 
                 <Icon
                    type = "material-community"
                    name = "tune"
                    color = {colors.grey1}
                    size = {25}
                    /> 

                </View>  */}
            </View>
            <FlatList 
                style ={{backgroundColor:'#F7EDDC', paddingTop: 5}}
                data = {data}
                keyExtractor = {(item,index)=>index.toString()}
                showsVerticalScrollIndicator = {true}  
                renderItem = {({item})=>(
                    <View>
                        
                        < StallCard
                            OnPressMenuCard={ () => {navigation.navigate("CanteenScreen", {
                                item,
                                location,
                            })}}
                            productName ={item.name}
                             image ={item.image}
                            // productDetails = {item.details}
                            
                        />
                    </View>
                )}
                
            />
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
          marginLeft:65,
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