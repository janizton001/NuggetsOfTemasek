import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,ScrollView, FlatList,} from 'react-native'
import { colors, parameter, Icon } from 'react-native-elements';
import OrderCard from '../components/OrderCard';
import { db } from '../../NoT';
import { ActivityIndicator, RefreshControl } from 'react-native-web';
import { Swipeable } from 'react-native-gesture-handler';
import {query, collection, getDocs ,documentId } from "firebase/firestore";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function MyOrdersScreen() {

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

    return (
        <View style ={styles.container}> 
           <View style = {styles.header}>
                <View style = {{justifyContent: 'center', alignItems : "center", marginLeft: 125}}> 
                    <Text style = {{color: "white", fontSize :26, fontWeight : "bold"}}> My Orders</Text>
                </View>
            </View>   
            
            <FlatList 
                    style ={{backgroundColor:'white'}}
                    data = {orders}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsVerticalScrollIndicator = {true}
                    onRefresh={onRefresh}
                    refreshing={isFetching}
                    renderItem = {({item,index})=>(
                        <ItemBox
                            productName = {item.productName}
                            price = {item.price}
                            quantity = {item.quantity}
                            image = {item.image}
                            id = {item.documentId}
                            />
                    )}

                
                />

        </View>
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },
    
      container:{flex:1,
                 top:0,
                 left:0,
                 right:0
         },

         header: {
            flexDirection: "row" ,
            backgroundColor: "orange",
            height: 70, 
        },

        deleteBox: {
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },

          editBox: {
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },
    
    })
           
       