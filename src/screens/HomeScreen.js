import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import FoodCard from '../components/FoodCard';
import HomeHeader from '../components/HomeHeader';
import { restaurantData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}) {

    return (
        <View style = {styles.container}>
            <HomeHeader />
            <View style = {{backgroundColor: '#F7EDDC', paddingBottom: 15, borderRadius: 5}}>
            
            <View style ={{marginTop: 15, marginLeft: 10}}>
                <Text style = {{fontSize: 20, fontWeight: "bold", color: colors.grey2}}> Food Options Around NUS </Text>
            </View>
            <View style ={styles.locationAndSortRow} >
                <TouchableOpacity>
                <View style ={styles.locationButton}>
                    
                    <Icon
                    type = "material-community"
                    name = "map-marker"
                    color = {colors.grey1}
                    size = {25}
                    />
                    <Text > Current Location </Text>
                </View>
                </TouchableOpacity>
                
                {/* <View style = {{marginRight: 20}}> 
                <Icon
                    type = "material-community"
                    name = "tune"
                    color = {colors.grey1}
                    size = {25}
                    />
                </View> */}
            </View>
            </View>
            
                <FlatList
                    style = {{ paddingBottom: 4, backgroundColor:'#F7EDDC'}}
                    showsVerticalScrollIndicator = {true}
                    data = {restaurantData}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem = {({item}) => (
                        <View> 
                            <FoodCard 
                                OnPressFoodCard={ () => {navigation.navigate("RestaurantScreen", {
                                    item,
                                })}}
                                screenWidth={SCREEN_WIDTH * 0.90}
                                image = {item.image}
                                name = {item.name}
                                distAway = {item.distAway}
                                address = {item.address}
                                collectTime = {item.collectTime}
                                menu = {item.menu}
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
         marginHorizontal: 10,
         
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