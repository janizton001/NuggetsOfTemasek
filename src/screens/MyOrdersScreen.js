<<<<<<< Updated upstream
import React from 'react';
=======
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,ScrollView, FlatList,} from 'react-native'
import { colors, parameter, Icon } from 'react-native-elements';
import OrderCard from '../components/OrderCard';
import { db } from '../../NoT';
import { ActivityIndicator, RefreshControl } from 'react-native-web';
<<<<<<< Updated upstream
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
=======
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
>>>>>>> Stashed changes
import {query, collection, getDocs ,documentId } from "firebase/firestore";
>>>>>>> Stashed changes

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { colors, Icon } from 'react-native-elements';

export default function MyOrdersScreen() {

<<<<<<< Updated upstream
=======
    const [orders, setOrders] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const ItemBox = (props) => {
        const leftSwipe = (progress, dragX) => {
          const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          });
          return (
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity 
            onPress={() => deleteOrder(props.id)}
            activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                        <Animated.Text style={{transform: [{scale: scale}]}}>
                        Delete
                        </Animated.Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.editBox}>
                    <Animated.Text style={{transform: [{scale: scale}]}}>
                        Edit
                    </Animated.Text>
                </View>
            </TouchableOpacity>
            </View>
          );
        };
        return(
            <GestureHandlerRootView>
<<<<<<< Updated upstream
                <Swipeable renderLeftActions={leftSwipe}>
                    <View style = {{marginTop: 10}}>
                        <OrderCard 
                            productName ={props.productName}
                            image ={props.image}
                            price ={props.price}
                            quantity = {props.quantity}
                        />
                    </View>
                </Swipeable>
=======
            <Swipeable renderLeftActions={leftSwipe}>
                <View style = {{marginTop: 5}}>
                    <OrderCard 
                        productName ={props.productName}
                        image ={props.image}
                        price ={props.price}
                        quantity = {props.quantity}
                        status = {props.status}
                        mobileNo = {props.mobileNo}
                        remarks = {props.remarks}
                        restaurant = {props.restaurant}
                        deliveryFee = {props.deliveryFee}
                        onPressOrderCard = {() => {
                            setModalDetails({
                                productName: props.productName, 
                                amount: (props.price * props.quantity) + props.deliveryFee, 
                                price: props.price,
                                deliveryFee: props.deliveryFee,
                                restaurant: props.restaurant, 
                                remarks: props.remarks,
                                quantity: props.quantity
                    
                            });
                            setModalStatus(props.status > 12 ? props.status : "Accepted ")
                            setModalVisible(!modalVisible);
                        }}
                    />
                </View>
            </Swipeable>
>>>>>>> Stashed changes
            </GestureHandlerRootView>
        )
    }

    const onRefresh = () => {
        setIsFetching(true);
        getOrders();
      };

    const getOrders = async () => {
        try {
            const list = [];
        
            await db
            .collection('orders')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    const {
                        productName,
                        price,
                        quantity,
                        image,
                        
                    } = doc.data();
                    const documentId = doc.id
                    list.push({
                        productName,
                        price,
                        quantity,
                        image,
                        documentId
                    })
                  
                  
                })
            })
           
            setOrders(list);
            setIsFetching(false);
            console.log(list)

        } catch (e) {
            console.log(e)
        }
    };
    
      useEffect(() => {
        getOrders();
        onRefresh();
    }, []);

    const deleteOrder = (id) => {
        console.log('Current Order Id: ', id);
    
        db
          .collection('orders')
          .doc(id)
          .delete()
          .then(() =>{
            console.log("Order deleted")
            onRefresh()
          })
    }

>>>>>>> Stashed changes
    return (
        <View> 
            <Text>Screen</Text>
        </View>
    )
}
       