import React, {useState, useEffect} from 'react';

import {SafeAreaView, View, Text, StyleSheet, Dimensions,TextInput,TouchableOpacity,ScrollView, FlatList,} from 'react-native'
import { Button, colors, Icon } from 'react-native-elements';
import { menuDetailedData } from '../global/Data';
import ProductCard from '../components/ProductCard';
import { parameter } from '../global/style';
import { db } from '../../NoT';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function ProductScreen({navigation,route}) {

    const [product, setProduct] = useState(null) 
    const [count,setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    function decreaseCount() {
        if (count != 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function increaseCount() {
        setCount(prevCount => prevCount + 1)
    }

    useEffect( () => {
        let {item} = route.params;
        setProduct(item)
    })

    const submitOrder = async () => {

        if(count != 0) {
        db
        .collection('orders')
        .add({
            productName:  product?.meal,
            image: product?.image,
            price: product?.price, 
            quantity: count
        })
        .then(() => {
            setLoading(false)
            console.log("Order added to db");
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
                    
                />
            </View> 

            <View style = {{justifyContent: 'center', marginTop: -70, alignItems: 'center',flexDirection: 'row'}}>
                <Button
                    title = "-"
                    buttonStyle = {{backgroundColor:'orange', width: 50}}
                    titleStyle = {parameter.buttonTitle}
                    onPress={() => decreaseCount()}
                />
                <View>
                <Text style = {{fontSize: 25, fontWeight: 'bold'}}>  {count}  </Text>
                </View>
                <Button
                    title = "+"
                    buttonStyle = {{backgroundColor:'orange', width: 50}}
                    titleStyle = {parameter.buttonTitle}
                    onPress={() => increaseCount()}
                />
                
            </View>
            

            <View style = {styles.view3}>
            <Button
                title = "ADD TO CART"
                buttonStyle = {parameter.styledButton}
                titleStyle = {parameter.buttonTitle}
                onPress = {submitOrder}
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