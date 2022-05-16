import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import FoodCard from '../components/FoodCard';
import HomeHeader from '../components/HomeHeader';
import { restaurantData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen() {

    return (
        <View style = {styles.container}>
            <HomeHeader />
            <View>
            
            <View style ={{marginTop: 15, marginLeft: 10}}>
                <Text style = {{fontSize: 20, fontWeight: "bold"}}> Food Near You </Text>
            </View>
            <View style ={styles.locationAndSortRow} >
                <View style ={styles.locationButton}>
                    <Icon
                    type = "material-community"
                    name = "map-marker"
                    color = {colors.grey1}
                    size = {25}
                    />
                    <Text > Current Location </Text>
                </View>
                <View style = {{marginRight: 20}}> 
                <Icon
                    type = "material-community"
                    name = "tune"
                    color = {colors.grey1}
                    size = {25}
                    />
                </View>
            </View>
            </View>
            
                <FlatList
                    style = {{marginTop: 15, marginBottom: 2}}
                    showsVerticalScrollIndicator = {true}
                    data = {restaurantData}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem = {({item}) => (
                        <View> 
                            <FoodCard 
                                screenWidth={SCREEN_WIDTH * 0.90}
                                image = {item.image}
                                name = {item.name}
                                distAway = {item.distAway}
                                address = {item.address}
                                collectTime = {item.collectTime}
                            />
                        </View>
                    )}
                />
            
        </View>
    )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    locationAndSortRow: {
        flexDirection: 'row',
         alignItems: 'center',
         marginTop: 10, 
         justifyContent: "space-between",
         marginHorizontal: 10
    },
    locationButton :{
        flexDirection: "row", 
        alignItems: 'center', 
        marginLeft: 5,
        backgroundColor: colors.grey4, 
        borderRadius: 10,
         paddingVertical: 5
    }
})