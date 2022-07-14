import React from 'react';

import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import { Icon, withBadge } from 'react-native-elements';

import { colors,parameter } from '../global/style';

export default function FoodCard({
    OnPressFoodCard,
    name,
    distAway,
    address,
    image,
    collectTime,
    deliveryLocation,
    menu,
    stalls,
}) {
    function getCollectTime(dist) {
        if(dist == 0) {
            return " 0 mins"
        }
        if(dist < 500) {
            return "~ 5-10 mins";
        } else if (dist < 1000) {
            return " ~ 10-20mins"
        } else if (dist < 1600) {
            return "~ 20-30 mins "
        } else {
            return "> 30mins"
        }
    }
    return(
        <TouchableOpacity onPress={OnPressFoodCard} style ={{...styles.cardView}}>
            <View style ={{width: '100%', borderColor: colors.grey1}}>
                <Image 
                style ={{...styles.image,width: '100%'}}
                source = {{uri: image}}
                />
            </View>

            <View style = {{paddingTop: 5}}>

                <View>
                <Text style = {{fontSize: 18, fontWeight: "bold",marginLeft: 10, fontFamily: 'Arial'}}> {name}</Text>
                </View>

                <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

                <View style = {styles.descriptionBox}>
                    <Text style = {styles.description}> {address} </Text>
                        
                    </View>

                    <View style = {{flex: 4, flexDirection: 'row',alignItems: 'center', flexWrap: 'wrap'}}>
                   
                    
                    <View style = {styles.descriptionBox2}>
                        <Icon
                            name = "place"
                            type = "material"
                            color = {colors.grey3}
                            size = {17}
                            iconStyle = {{marginTop:3}}
                        />
                        <Text style = {styles.description}> {distAway} m   </Text>
                        </View>
                        <View style = {styles.descriptionBox3}>
                    <Icon
                            name = "access-time"
                            type = "material"
                            color = {colors.grey3}
                            size = {17}
                            iconStyle = {{marginTop:3,marginLeft:5}}
                        />
                        <Text style = {styles.description}>{getCollectTime(distAway)} </Text>
                        </View>
                    </View>

                </View>
            </View>


        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 5,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'grey',
        marginTop: 10
    },

    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 10,
        height: 180,
    },

    descriptionBox : {
        flex: 3,
        flexDirection: 'row', 
        paddingTop: 2,
        marginLeft: 5,
        borderRightWidth: 1,
        borderRightColor: colors.grey3,
        paddingBottom: 4,
        alignItems: 'center',
    },
    descriptionBox2: {        
        flexDirection: 'row',
        paddingRight: 5,
        paddingTop: 2,
        marginLeft: 1,
        borderRightWidth: 1,
        borderRightColor: colors.grey3,
        paddingBottom: 4,
        alignItems: 'center',
    },
    descriptionBox3: {       
        flexDirection: 'row',
        paddingRight: 5,
        paddingTop: 2,
        marginLeft: 1,
        paddingBottom: 4,
        alignItems: 'center',
    },
    description: {
        fontSize: 14, 
        
        color: colors.grey3,
        marginLeft:1
    }

    
})