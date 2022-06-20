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
                    <Text style ={styles.text1}>S$ {price}</Text>
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
                      margin:20,
                      width:'80%',
                      height: '50%',
                      padding:10,
                      justifyContent:"center",
                      alignItems:"center",
                      marginLeft: 40,
                      borderRadius: 10
                      
                    },

                view2: {flexDirection:"row",
                        padding:0,
                        justifyContent:"space-between",
                        width: '80%',
                        height: '60%'
                    },

                view3 : {justifyContent:"space-between",
                          width:'40%'
                        },

                text1: {
                    fontSize:18,
                    color:colors.grey1,
                    }, 

                view4: {width:100,
                          height:100,
                          justifyContent: 'center',
                          marginRight: 5
                        },

                image: {height:100,
                        width:120,
                        marginRight: 1
                    }


})