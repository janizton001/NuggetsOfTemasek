import React, {useEffect, useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import MenuCard from '../components/MenuCard';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function RestaurantScreen({navigation,route}) {

    const [restaurant, setRestaurant] = useState(null) 
    const [stall, setStall] = useState(null)
    const [location, setLocation] = useState("")  

    useEffect( () => {
        let {item, restaurant, location} = route.params;
        setStall(item)
        setRestaurant(restaurant)
        setLocation(location)
    })

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
                <Text style ={styles.text1}>{stall?.stallName}</Text>
            </View>

                <FlatList 
                    style ={{backgroundColor:'#F7EDDC', paddingTop: 7, paddingRight: 10}}
                    data = {stall?.menu}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsVerticalScrollIndicator = {true}
                    renderItem = {({item})=>(
                        <View>
                            <MenuCard 
                                OnPressMenuCard={ () => {navigation.navigate("ProductScreen", {
                                    item,
                                    stall, 
                                    restaurant,
                                    location
                                })}}
                                productName ={item.meal}
                                image ={item.image}
                                price ={item.price}
                                productDetails = {item.details}
                                stall  = {stall.stallName}
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
                 right:0,
                 justifyContent: 'center'
         },
    
    view1:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:'orange',
        paddingTop:25,
        paddingBottom: 20
    },
    
    text1:{
        fontWeight:"bold",
          marginLeft:85,
          color: 'white',
          fontSize:20
        },
    
    view2:{marginTop:5,
          paddingBottom:20
    }

})