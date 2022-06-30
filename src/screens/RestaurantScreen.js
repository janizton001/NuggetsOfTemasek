import React, {useEffect, useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import MenuCard from '../components/MenuCard';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function RestaurantScreen({navigation,route}) {

    const [restaurant, setRestaurant] = useState(null) 
    const [stall, setStall] = useState(null)

    useEffect( () => {
        let {item, restaurant} = route.params;
        setStall(item)
        setRestaurant(restaurant)
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
                    style ={{backgroundColor:'#F7EDDC', paddingTop: 7}}
                    data = {stall?.menu}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsVerticalScrollIndicator = {true}
                    renderItem = {({item})=>(
                        <View>
                            <MenuCard 
                                OnPressMenuCard={ () => {navigation.navigate("ProductScreen", {
                                    item,
                                    stall, 
                                    restaurant
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
                 right:0
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
          marginLeft:40,
          color: 'white',
          fontSize:20
        },
    
    view2:{marginTop:5,
          paddingBottom:20
        },
    
    tab:{ paddingTop :0,
          backgroundColor:colors.buttons,
          justifyContent:"space-between",
          },
    
    tabContainer:{ alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          },
    
    tabLabel:{fontWeight:'bold',
          color: colors.cardbackground
          },
      
    tabStyle:{width:SCREEN_WIDTH/4,
              maxHeight:45,
            },
    scene2: { backgroundColor: '#673ab7' } 

})