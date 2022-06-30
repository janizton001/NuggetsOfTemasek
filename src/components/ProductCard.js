import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import  {colors} from '../global/style'

const ProductCard = ({productName,price,image,restaurant,uid}) => {
    return (
        <View style = {styles.view1}>
            
            <View style ={styles.view2}>
                <View style ={styles.view3}> 
                <Text style ={{
                    fontSize:25,
                    color:colors.grey1,
                    fontWeight: "bold"
                    }}>{restaurant}  </Text>
                    <Text style ={styles.text1}>{productName}</Text>
                    <Text style ={styles.text1}>S$ {price == null ? price : price.toFixed(2)}</Text>
                </View>
                <View style ={styles.view4}>
                    <Image style ={styles.image}  source ={{uri :image}}/>
                </View>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({

                view1: {backgroundColor:"white",
                      elevation:4,
                      shadowOpacity:0.4,
                      shadowColor:"black",
                      margin:10,
                      width:'90%',
                      height: 250,
                      padding:10,
                      justifyContent:"center",
                      alignItems:"center",
                      marginLeft: 20,
                      borderRadius: 10
                      
                    },

                view2: {flexDirection:"row",
                        padding:0,
                        justifyContent:"space-between",
                        width: '80%',
                        height: '70%'
                    },

                view3 : {justifyContent:"space-between",
                          width:'40%'
                        },

                text1: {
                    fontSize:18,
                    color:colors.grey1,
                    }, 

                view4: {width:130,
                          height:150,
                          justifyContent: 'center',
                          alignContent: 'center',
                          marginRight: 5
                        },

                image: {height:130,
                        width:135,
                        marginRight: 5
                    }


})