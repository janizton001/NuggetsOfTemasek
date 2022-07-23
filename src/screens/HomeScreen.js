import React, { useEffect, useState } from 'react';
import { parameter } from '../global/style';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList, Alert,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import FoodCard from '../components/FoodCard';
import HomeHeader from '../components/HomeHeader';
import { restaurantData } from '../global/Data';
import { getDistance } from 'geolib';

const SCREEN_WIDTH = Dimensions.get('window').width
   
export default function HomeScreen({navigation, route}) {
    const [location, setLocation] = useState("Current Location")
    const [pin, setPin] = useState({ 
        latitude: 1.2929673162323339, 
        longitude: 103.77141679094656
    })

  
    useEffect(() => {
        if(route.params?.location) {
        let {location, pin} = route.params;
        setLocation(location)
        setPin(pin)
        }
        
    }, [route.params?.location, route.params?.pin])

    return (
        <View style = {styles.container}>
             <View style = {styles.header}> 
            <View style = {{paddingHorizontal: 70, marginLeft: 15}}> 
                <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> Nuggets of NUS</Text>
            </View>
            <View style ={{}}>
                <Icon 
                type ="material-community"
                name = "magnify"
                size = {32} 
                color = "white"
                onPress={() => {
                    if (location == "Current Location"){ 
                        Alert.alert("Please set your delivery location first")
                    } else {
                    navigation.navigate("SearchScreen", {location})
                }}}
                    
            />
            </View>
        </View>

            <View style = {{backgroundColor: '#F7EDDC', paddingBottom: 15, borderRadius: 5}}>
            
            <View style ={{marginTop: 15, marginLeft: 10}}>
                <Text style = {{fontSize: 20, fontWeight: "bold", color: colors.grey2}}> Food Options Around You! </Text>
            </View>
            <View style ={styles.locationAndSortRow} >
                <TouchableOpacity onPress={()=>(navigation.navigate("MapScreen"))} style ={{width: '100%'}}>
                <View style ={styles.locationButton}>
                    
                    <Icon
                    type = "material-community"
                    name = "map-marker"
                    color = {colors.grey1}
                    size = {25}
                    />
                    <Text numberOfLines={1}> {location} </Text>
                </View>
                </TouchableOpacity>
                
                
            </View>
            
            </View>
            
                <FlatList
                    style = {{ paddingBottom: 4, backgroundColor:'#F7EDDC'}}
                    showsVerticalScrollIndicator = {true}
                    data = {restaurantData}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem = {({item}) => (
                        <View> 
                            <FoodCard 
                                OnPressFoodCard={ () => {
                                    if (location == "Current Location"){ 
                                        Alert.alert("Please set your delivery location first")
                                    } else {
                                        navigation.navigate("CanteenScreen", {
                                    item,
                                    location
                                })}}}
                                screenWidth={SCREEN_WIDTH * 0.90}
                                image = {item.image}
                                name = {item.name}
                                distAway = {location == "Current Location" ? 0 : getDistance(pin,item.coordinates)}
                                address = {item.address}
                                collectTime = {item.collectTime}
                                menu = {item.menu}
                                stalls = {item.stalls}
                                deliveryLocation={location}
                            />
                        </View>
                    )}
                />
            
        </View>
    )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignSelf: 'stretch',
        flexDirection: "row" ,
        backgroundColor: "orange",
        height: parameter.headerHeight, 
        justifyContent:'center',
        alignItems: 'center',
        
        },
    locationAndSortRow: {
        flexDirection: 'row',
         alitgnItems: 'center',
         marginTop: 10, 
         justifyContent: "space-between",
         marginHorizontal: 10,
         
         
    },
    locationButton :{
        flexDirection: "row", 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: colors.grey4, 
        borderRadius: 10,
         paddingVertical: 5,
         height: 42,
         paddingHorizontal: 15,       
         
    }
})