import React from 'react';
import {Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../global/style'

export default function OrderCard({productName,price,image, quantity, status, mobileNo, remarks, restaurant, deliveryFee, onPressOrderCard}){

    if (status.length > 12) {
        status = 'Accepted'
    }
    
    return(
        <TouchableOpacity onPress={onPressOrderCard}>
        <View style ={styles.view1}>
            <View style ={styles.view2}>
                <View style ={styles.view3}>
                    <Text style ={styles.text1}>{productName} from {restaurant}</Text>
                    <View>
                        <Text style ={styles.text2}> Qty:{quantity}</Text>
                    </View>
                    <Text style = {styles.text3}>Total Amount: S$ {price == null ? price * quantity + deliveryFee : (price * quantity + deliveryFee).toFixed(2)}</Text>
                    <Text style = {styles.text3}>Status: {status} </Text>
                    
                </View>
                <View style ={{flex:3}}>
                     <Image style ={styles.image} source ={{uri:image}} />
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}



const styles =StyleSheet.create({

    view1:{backgroundColor:"white",
            elevation:4,
            shadowOpacity:0.4,
            shadowColor:"grey",
            margin:5,
            padding:10,
            borderRadius: 10,
            borderColor: 'white',
            borderWidth: 2
           
},

view2: {flex:1,
        flexDirection:"row",
        padding:0,
        justifyContent:"space-between"
},

view3 :{flex:6,
        justifyContent:"space-between"
        },

text1: {
    fontSize:15,
    color:colors.grey1,
    fontWeight:"bold"
    },

    text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2
     },

text3:{
    fontSize:15,
    color:colors.black,
    },

image:{flex:1
    }
})