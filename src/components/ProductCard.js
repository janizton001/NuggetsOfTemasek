import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import  {colors} from '../global/style'

const ProductCard = ({productName,price,image}) => {
    return (
        <View style = {styles.view1}>
            <View style ={styles.view2}>
                <View style ={styles.view3}>
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
                      margin:15,
                      width:'90%',
                      height: '70%',
                      padding:10,
                      justifyContent:"center",
                      alignItems:"center",
                      marginLeft: 22
                    },

                view2: {flexDirection:"row",
                        padding:0,
                        justifyContent:"space-between",
                        width: '90%',
                        height: '60%'
                    },

                view3 : {justifyContent:"space-between",
                          width:'50%'
                        },

                text1: {
                    fontSize:27,
                    color:colors.grey1,
                    }, 

                view4: {width:200,
                          height:200,
                          justifyContent: 'center'
                        },

                image: {height:175,
                        width:155,
                        marginRight: 1
                    }


})