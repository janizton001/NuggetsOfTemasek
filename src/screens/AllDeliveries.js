import React, {useState,useContext,useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,ScrollView, FlatList,} from 'react-native'
import OrderCard from '../components/OrderCard';
import { db } from '../../NoT';
import { Swipeable } from 'react-native-gesture-handler';
import {query, collection, getDocs ,documentId } from "firebase/firestore";
import { AuthContext } from '../navigation/AuthContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function AllDeliveries() {

    const [orders, setOrders] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const {user} = useContext(AuthContext)
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
            onPress={() => acceptOrder(props.id)}
            activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                        <Animated.Text style={{transform: [{scale: scale}]}}>
                        Accept
                        </Animated.Text>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.editBox}>
                    <Animated.Text style={{transform: [{scale: scale}]}}>
                        Reject
                    </Animated.Text>
                </View>
            </TouchableOpacity> */}
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
                        status = {props.status}
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
            .where("uid", "!=", user.uid)
            .where("status", "==", "Not Accepted")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    const {
                        productName,
                        price,
                        quantity,
                        image,
                        status,
                        
                    } = doc.data();
                    const documentId = doc.id
                    list.push({
                        productName,
                        price,
                        quantity,
                        image,
                        documentId,
                        status
                    
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

    const acceptOrder = (id) => {
        console.log('Current Order Id: ', id);
        

        db
          .collection('orders')
          .doc(id)
          .update({
            status: 'Accepted'
          })
          .then(() =>{
            console.log("Order accepted")
            onRefresh()
          })

    }

    return (
        
        <View style ={styles.container}>  
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
                            status = {item.status}
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
            backgroundColor: '#88F583',
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },

          editBox: {
            backgroundColor: '#F67469',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },
    
    })
           
       