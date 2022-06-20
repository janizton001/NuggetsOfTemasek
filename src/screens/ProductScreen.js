import React, {useState, useEffect, useContext} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList, Alert, KeyboardAvoidingViewBase,} from 'react-native'
import { colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import ProductCard from '../components/ProductCard';
import { parameter } from '../global/style';
import { db } from '../../NoT';
import { AuthContext } from '../navigation/AuthContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView } from 'react-native-web';
import { Button } from '@react-native-material/core';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function ProductScreen({navigation,route}) {

    const [product, setProduct] = useState(null) 
    const [restaurant, setRestaurant] = useState(null) 
    const [count,setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState('');

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
        let {item,restaurant} = route.params;
        setProduct(item)
        setRestaurant(restaurant)
    })

    const submitOrder = async () => {
        
        if(count != 0) {
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
            mobileNo: userData.mobileNumber
        })
        .then(() => {
            
            Alert.alert("Order added", "Check My Orders to see your order!")
            console.log("Order added to db");
            setLoading(false)
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    }
}
    return (
        
        <View style ={styles.container}>
            
            <View style ={styles.view1}>
                <Icon 
                    name ="arrow-left"
                    type = "material-community"
                    color = {colors.black}
                    size = {25}
                    onPress ={()=>navigation.goBack()}
                />
                <Text style ={styles.text1}>{product?.meal}</Text>
            </View>

            
            <View>
                <ProductCard 
                    productName ={product?.meal}
                    image ={product?.image}
                    price ={product?.price}
                    restaurant = {restaurant?.name}
                    uid = {user.uid}
                />
            </View> 
            
            <View style = {{justifyContent: 'center', marginTop: -120, alignItems: 'center',flexDirection: 'row'}}>
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
            <TextInput
                    style = {{width: "80%",backgroundColor: 'white',height: 50, borderRadius: 15}}
                    placeholder = "Remarks"
                    />
            </View>
            <View style = {styles.view3}>
                
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
    
    view1:{flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.buttons,
    top:0,
    left:0,
    right:0,
    paddingTop:15
    },
    
    text1:{fontWeight:"bold",
          marginLeft:40,
          color:colors.black,
          fontSize:18
        },
    
    view2:{marginTop:5,
          paddingBottom:5
        },
    
    view3: {    
        marginTop: 20,
        alignItems: 'center'


    }
    
   
})