import React, {useState,useContext,useEffect} from 'react';
import {Modal,Pressable, View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,ScrollView, FlatList,} from 'react-native'
import OrderCard from '../components/OrderCard';
import { db } from '../../NoT';
import { Swipeable } from 'react-native-gesture-handler';
import { AuthContext } from '../navigation/AuthContext';


export default function AcceptedDeliveries() {

    const [orders, setOrders] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const {user} = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalNumber, setModalNumber] =  useState('');


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
            .where("status", "==", "Accepted")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    const {
                        productName,
                        price,
                        quantity,
                        image,
                        status,
                        mobileNo
                        
                    } = doc.data();
                    const documentId = doc.id
                    list.push({
                        productName,
                        price,
                        quantity,
                        image,
                        documentId,
                        status,
                        mobileNo
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

    const cancelOrder = (id) => {
        console.log('Current Order Id: ', id);
        

        db
          .collection('orders')
          .doc(id)
          .update({
            status: 'Not Accepted'
          })
          .then(() =>{
            console.log("Order accepted")
            onRefresh()
          })

    }
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
            onPress={() => cancelOrder(props.id)}
            activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                        <Animated.Text style={{transform: [{scale: scale}]}}>
                        Cancel
                        </Animated.Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => deleteOrder(props.id)}
            activeOpacity={0.6}>
                <View style={styles.editBox}>
                    <Animated.Text style={{transform: [{scale: scale}]}}>
                        Finish
                    </Animated.Text>
                </View>
            </TouchableOpacity>
            </View>
          );
        };
        return(
            <View>
            <Swipeable renderLeftActions={leftSwipe}>
                <View style = {{marginTop: 10}}>
                    <OrderCard 
                        productName ={props.productName}
                        image ={props.image}
                        price ={props.price}
                        quantity = {props.quantity}
                        status = {props.status}
                        onPressOrderCard = {() => {
                            setModalNumber(props.mobileNo);
                            setModalVisible(!modalVisible);
                        }}
                    />
                </View>
            </Swipeable>
            
            </View>

        )
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
                            mobileNo = {item.mobileNo}
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
                <Text style={{fontSize: 26,fontWeight: 'bold'}}>Delivery details </Text>
                <Text style={styles.modalText}>Mobile Number : {modalNumber}</Text>
                <Text style={styles.modalText}>Please text/call the above number to arrange meeting details</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
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
            backgroundColor: '#88F583',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: 60,
            height: '80%',
            marginTop: 15
          },
          centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
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
            textAlign: "center"
          },
          button: {
            borderRadius: 20,
            padding: 15,
            elevation: 2,
            
          },
          buttonClose: {
            backgroundColor: "orange",
          },
    })
           
       