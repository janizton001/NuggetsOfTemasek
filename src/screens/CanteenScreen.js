import React, {useEffect, useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import MenuCard from '../components/MenuCard';
import StallCard from '../components/StallCard';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function CanteenScreen({navigation,route}) {

    const [restaurant, setRestaurant] = useState(null)
    const [stall, setStall] = useState(null)
    const [location, setLocation] = useState("")  

    useEffect( () => {
        let {item,location} = route.params;
        setRestaurant(item)
        setStall(restaurant?.stalls)
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
                <Text style ={styles.text1}>{restaurant?.name}</Text>
            </View>

                <FlatList 
                    style ={{backgroundColor:'#F7EDDC', paddingTop: 7}}
                    data = {restaurant?.stalls}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsVerticalScrollIndicator = {true}
                    renderItem = {({item})=>(
                        <View>
                            
                            < StallCard
                                OnPressMenuCard={ () => {navigation.navigate("RestaurantScreen", {
                                    item,
                                    stall,
                                    restaurant,
                                    location
                                })}}
                                productName ={item.stallName}
                                image ={item.image}
                                
                                productDetails = {item.details}
                                
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