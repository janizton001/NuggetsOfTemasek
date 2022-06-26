import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,ScrollView, FlatList, Modal, Pressable} from 'react-native'
import { colors, parameter, Icon } from 'react-native-elements';
import OrderCard from '../components/OrderCard';
import { db } from '../../NoT';
import { ActivityIndicator, RefreshControl } from 'react-native-web';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import {query, collection, getDocs ,documentId } from "firebase/firestore";
import { AuthContext } from '../navigation/AuthContext';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function MyOrdersScreen() {

    const [orders, setOrders] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const {user} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalStatus, setModalStatus] =  useState('');
    const [modalDetail, setModalDetails] =  useState({
                                                productName:' ', 
                                                price: 0,
                                                restaurant: ' ', 
                                                remarks: ' ', 
                                                amount: 0, 
                                                deliveryFee: 0, 
                                                quantity: 0
                                            });
    

    const ItemBox = (props) => {
        const leftSwipe = (progress, dragX) => {
          const scale = dragX.interpolate({
            inputRange: [0, 50],
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

            {/* <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.editBox}>
                    <Animated.Text style={{transform: [{scale: scale}]}}>
                        Edit
                    </Animated.Text>
                </View>
            </TouchableOpacity> */}
            </View>
          );
        };
        return(
            <GestureHandlerRootView>
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
                            setModalStatus(props.status > 12 ? "Accepted ": "Not Accepted")
                            setModalVisible(!modalVisible);
                        }}
                    />
                </View>
            </Swipeable>
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
            .where("uid", "==", user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    const {
                        productName,
                        price,
                        quantity,
                        image,
                        status,
                        mobileNo,
                        remarks,
                        restaurant,
                        deliveryFee
                    } = doc.data();
                    const documentId = doc.id
                    list.push({
                        productName,
                        price,
                        quantity,
                        image,
                        documentId,
                        status,
                        mobileNo,
                        remarks,
                        restaurant,
                        deliveryFee
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
                    style ={{backgroundColor:'#F7EDDC', paddingTop: 5}}
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
                            mobileNo = {item.mobileNo}
                            remarks = {item.remarks}
                            restaurant = {item.restaurant}
                            deliveryFee = {item.deliveryFee}
                        />
                    )}

                
                />
                 <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontSize: 26,fontWeight: 'bold'}}>Order Details </Text>
                            <Text style={styles.modalText}> Order : {modalDetail.productName} from {modalDetail.restaurant}</Text> 
                            <Text style={styles.modalText}>Delivery Location : {modalDetail.remarks}</Text>
                            <View>
                            <Text style={{fontSize: 16, textAlign: 'center'}}>Total Amount Paid : $ {(modalDetail.amount).toFixed(2)}</Text>
                            <Text style={{color: 'grey', textAlign: 'center'}}>
                                Food price : {modalDetail.quantity} x ${modalDetail.price.toFixed(2)} 
                                = $ {(modalDetail.quantity * modalDetail.price).toFixed(2)}
                            </Text>
                            <Text style={{color: 'grey', textAlign: 'center'}}>
                                Delivery Fee : ${modalDetail.deliveryFee.toFixed(2)}
                            </Text>
                            </View>
                            <Text style={styles.modalText}>Status : {modalStatus}</Text>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{color: 'white'}}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
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
            backgroundColor: '#F67469',
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
          modalView: {
            margin: 30,
            height: '50%',
            width: '70%',
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            justifyContent: 'space-between'
          },
          modalText: {
            marginBottom: 15,
            textAlign: 'center',
            fontSize: 16
          },
          centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
          },
          button: {
            borderRadius: 10,
            padding: 15,
            elevation: 2,
            
          },
          buttonClose: {
            backgroundColor: "orange",
          },
    
    })
           
       