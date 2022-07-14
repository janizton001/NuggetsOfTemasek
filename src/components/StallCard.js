import React from 'react';
import {Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../global/style'



export default function StallCard({productName,image,productDetails,stall, OnPressMenuCard}){
    return(
        <TouchableOpacity onPress={OnPressMenuCard}>
        <View style ={styles.view1}>
            <View style ={styles.view2}>
                <View style ={styles.view3}>
                    <Text style ={styles.text1}>{productName}</Text>
                    <View>
                        <Text style ={styles.text2} numberOfLines = {4}>{productDetails} </Text>
                    </View>
                </View>
                <View style ={{flex:3, padding: 5}}>
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
            borderRadius: 5,
            margin:5,
            padding:10,
            height: 150
},

view2: {flex:1,
        flexDirection:"row",
        padding:0,
        justifyContent:'space-between'
},

view3 :{flex:6,
        justifyContent: 'space-around'
        },

text1: {
    fontSize:20,
    color:colors.grey1,
    fontWeight:"bold"
    },

    text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2,
        justifyContent: 'center'
     },

text3:{
    fontSize:15,
    color:colors.black,
    },

image:{flex:1
    }
})