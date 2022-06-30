import React, {useState, useEffect, useContext} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList, Alert, KeyboardAvoidingView,Keyboard, KeyboardAvoidingViewBase} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import ProductCard from '../components/ProductCard';
import { parameter } from '../global/style';
import { db } from '../../NoT';
import { AuthContext } from '../navigation/AuthContext';

import { Button } from '@react-native-material/core';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function ProductScreen({navigation,route}) {

    const [product, setProduct] = useState(null) 
    const [restaurant, setRestaurant] = useState(null) 
    const [stall, setStall] = useState(null) 
    const [count,setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState('');
    const [remarks, setRemarks] = useState('');
    const deliveryFee = count == 0 ? 0 : 2;

    
    const getUser = async() => {
        db
        .collection('user')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }
    
      useEffect(() => {
        getUser();
    }, []);

    
    function decreaseCount() {
        if (count != 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function increaseCount() {
        setCount(prevCount => prevCount + 1)
    }

    useEffect( () => {
        let {item,stall, restaurant} = route.params;
        setProduct(item)
        setStall(stall)
        setRestaurant(restaurant)
    })

    const submitOrder = async () => {

        if (remarks == '') {
            Alert.alert("Please include your location in the remarks box")
        }
        
        if(count != 0 && remarks != '') {
            setLoading(true)
        await db
        .collection('orders')
        .add({
            productName:  product?.meal,
            image: product?.image,
            price: product?.price,
            restaurant: restaurant.name, 
            quantity: count,
            uid: user.uid,
            status: "Not Accepted",
            mobileNo: userData.mobileNumber,
            remarks: remarks,
            deliveryFee: deliveryFee,
            stall: stall.stallName
        })
        .then(() => {
            
            Alert.alert("Order added!", "Please wait for a deliverer to accept your order. You can view your order under My Orders")
            console.log("Order added to db");
            setLoading(false)
            setRemarks(' ')
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    }
}
    return (
        
           
        <KeyboardAvoidingView behaviour= {'padding'} style = {{justifyContent: 'space-around', flex:1,backgroundColor:'#F7EDDC' }}>
             
                
            <View style ={styles.view1}>
                <Icon 
                    name ="arrow-left"
                    type = "material-community"
                    color = 'white'
                    size = {25}
                    onPress ={()=>navigation.goBack()}
                />
                <Text style ={styles.text1}>{product?.meal}</Text>
            </View>

            <ScrollView>
            <View style ={{justifyContent: 'flex-start', padding:5, marginTop: 5}}>
                <ProductCard 
                    productName ={product?.meal}
                    image ={product?.image}
                    price ={product?.price}
                    restaurant = {restaurant?.name}
                    uid = {user.uid}
                />
            </View> 
            
            
            
            <View style = {{alignItems: 'flex-start', marginHorizontal: 20, paddingLeft: 20}}>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Text> Delivery Location:  </Text>
                    <TextInput
                        style = {{width: "60%",backgroundColor: 'white',height: 50, borderRadius: 15,justifyContent: 'flex-end'}}
                        placeholder = "Location (Include any remarks here)"
                        value={remarks}
                        onChangeText={text => setRemarks(text)}
                        
                    />
                </View>
            </View>
            <View style = {{justifyContent: 'center', alignItems: 'center',flexDirection: 'row', marginTop: 20, marginBottom:10 }}>
                <Button
                    title = "-"
                    color = '#FF8C00'
                    titleStyle = {parameter.buttonTitle}
                    onPress={() => decreaseCount()}
                />
                <View>
                <Text style = {{fontSize: 25, fontWeight: 'bold'}}>  {count}  </Text>
                </View>
                <Button
                    title = "+"
                    color = '#FF8C00'
                    titleStyle = {parameter.buttonTitle}
                    onPress={() => increaseCount()}
                />
                
            </View>
            <View style = {styles.view3}>
                <Text style = {styles.text2}> Cost of Food: $ {(product?.price * count).toFixed(2)} </Text>
                <Text style = {styles.text2}> Delivery Fee: $ {deliveryFee.toFixed(2)}</Text>
                <Text style = {{fontWeight:"bold", color:'black', fontSize:20,  marginTop: 5}}> TOTAL COST: $ {(deliveryFee + product?.price * count).toFixed(2) }</Text>
            </View>
            
            <View style = {{alignItems: 'center', marginTop: 25}}>
                 
            <Button
                title = "ORDER NOW"
                contentContainerStyle = {{height: 70, width:150}}
                color = '#FF8C00'
                tintColor = 'white'
                loading = {loading}
                onPress = {submitOrder}
                variant = "contained"
               /> 
            </View>
            
            
            </ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Text>*Delivery Fee is fixed at $2 for all deliveries</Text>
            </View>
            
            </KeyboardAvoidingView>
            
          
        
        
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },
    
      container:{flex:1,
                 
         },
    
     view1:{
            flexDirection:"row",
            alignItems:"center",
            padding:10,
            backgroundColor:'orange',
            paddingTop:25,
            paddingBottom: 20
        },
    
    text1:{fontWeight:"bold",
          marginLeft:40,
          color:'white',
          fontSize:18
        },

    text2:{fontWeight:"bold",
        color:'grey',
        fontSize:18,
        marginTop: 5
      },
    
    view2:{marginTop:5,
          paddingBottom:5
        },
    
    view3: {    
        alignItems: 'center'


    }
    
   
})