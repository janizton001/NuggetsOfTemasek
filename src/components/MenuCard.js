import React from 'react';
import {Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../global/style'



export default function MenuCard({productName,price,image,productDetails,stall, OnPressMenuCard}){
    return(
        <TouchableOpacity onPress={OnPressMenuCard}>
        <View style ={styles.view1}>
            <View style ={styles.view2}>
                <View style ={styles.view3}>
                    <Text style ={styles.text1} numberOfLines={1}>{productName}</Text>
                    <View>
                        <Text style ={styles.text2} numberOfLines={3}>{productDetails} </Text>
                    </View>
                    <Text style = {styles.text3}>S$ {price == null ? price : price.toFixed(2)}</Text>
                </View>
                <View style ={{flex:3,padding: 3}}>
                     <Image style ={styles.image} source ={{uri:image}} />
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}



const styles =StyleSheet.create({

    view1:{backgroundColor:"white",
            elevation:2,
            shadowOpacity:0.4,
            shadowColor:"grey",
            borderRadius: 5,
            margin:5,
            padding:8,
            height: 110,
            width: '100%',
            alignItems: 'center',
            alignContent: 'center'
},

view2: {flex:1,
        flexDirection:"row",
        padding:0,
        justifyContent:"space-between"
},

view3 :{flex:6,
        justifyContent:"space-around"
        },

text1: {
    fontSize:16,
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