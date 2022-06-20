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
    menu
}) {
    return(
        <TouchableOpacity onPress={OnPressFoodCard} style ={{...styles.cardView}}>
            <View style ={{width: '100%', borderColor: colors.grey1}}>
                <Image 
                style ={{...styles.image,width: '100%'}}
                source = {{uri: image}}
                />
            </View>

            <View style = {{borderColor: colors.grey1}}>

                <View>
                <Text style = {{fontSize: 18, fontWeight: "bold",marginLeft: 10, fontFamily: 'Arial'}}> {name}</Text>
                </View>

                <View style = {{flex:1, flexDirection: 'row'}}>

                    <View style = {styles.descriptionBox}>
                        <Icon
                            name = "place"
                            type = "material"
                            color = {colors.grey3}
                            size = {17}
                            iconStyle = {{marginTop:3}}
                        />
                        <Text style = {styles.description}> {distAway} km </Text>
                    </View>

                    <View style = {{flex: 9, flexDirection: 'row'}}>
                        <Text style = {styles.description}> {address} </Text>
                    </View>

                </View>
            </View>


        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        marginTop: 10
    },

    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 10,
        height: 180,
    },

    descriptionBox : {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: 'black',
        paddingHorizontal: 5,
        marginLeft: 5,
        borderRightWidth: 1,
    },

    description: {
        fontSize: 14, 
        fontWeight: "bold", 
        color: colors.grey3,
        marginLeft: 5
    }

    
})