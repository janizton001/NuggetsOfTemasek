import React, {useState, useEffect, useContext} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList, Alert, KeyboardAvoidingView,Keyboard, KeyboardAvoidingViewBase, Animated} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import ProductCard from '../components/ProductCard';
import { parameter } from '../global/style';
import { db } from '../../NoT';
import { AuthContext } from '../navigation/AuthContext';

import { Button } from '@react-native-material/core';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function EditOrderScreen({navigation,route}) {

    const [product, setProduct] = useState(null) 

     
    const [count,setCount] = useState(0)
    const [location, setLocation] = useState("") 

    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    
    const deliveryFee = count == 0 ? 0 : (0.1 * count * product?.price);

    useEffect( () => {
        let {props} = route.params;
        setProduct(props)
        setCount(props.quantity)
        
    },[])

    
    function decreaseCount() {
        if (count != 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function increaseCount() {
        setCount(prevCount => prevCount + 1)
    }

    const onRefresh = () => {
        setLoading(true);
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
            setLoading(false);

        } catch (e) {
            console.log(e)
        }
    };
    
      useEffect(() => {
        getOrders();
        onRefresh();
    }, []);
    const editOrder = (id) => {
        console.log('Current Order Id: ', id);
    
        db
          .collection('orders')
          .doc(id)
          .update({
           quantity: count,
           deliveryFee: deliveryFee,
            
            })
           .then(() =>{
            Alert.alert("Order updated!", "Please wait for a deliverer to accept your order. You can view your order under My Orders")
            console.log("Order updated!")
            onRefresh()
          })
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
            <Text style ={styles.text1}>{product?.productName}</Text>
        </View>

        <ScrollView>
        <View style ={{justifyContent: 'flex-start', padding:5, marginTop: 5}}>
            <ProductCard 
                productName ={product?.productName}
                image ={product?.image}
                price ={product?.price}
                restaurant = {product?.restaurant}
                uid = {user.uid}
            />
        </View> 
        
        
        
        <View style = {{alignItems: 'flex-start', marginHorizontal: 20, alignItems: 'center'}}>
            <View style = {{flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
            <Text> Delivery Location:  </Text>
            <Text style ={{fontWeight: 'bold',fontSize: 16, flexWrap:'wrap',textAlign: 'center'}}> {location}</Text>
                {/* <TextInput
                    style = {{width: "60%",backgroundColor: 'white',height: 50, borderRadius: 15,justifyContent: 'flex-end'}}
                    placeholder = {restaurant?.deliveryLocation}
                    value={remarks}
                    onChangeText={text => setRemarks(text)}
                    
                /> */}
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
            title = "EDIT ORDER"
            contentContainerStyle = {{height: 70, width:150}}
            color = '#FF8C00'
            tintColor = 'white'
            onPress = {() => editOrder(product?.id)}
            variant = "contained"
           /> 
        </View>
        
        
        </ScrollView>
        {/* <View style = {{alignItems: 'center'}}>
            <Text>*Delivery Fee is fixed at $2 for all deliveries</Text>
        </View> */}


           
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