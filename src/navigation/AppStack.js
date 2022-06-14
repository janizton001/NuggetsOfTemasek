import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import EditProfileScreen from '../screens/EditProfileScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import ProductScreen from '../screens/ProductScreen';

const App = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({navigation}) => (
    <App.Navigator>
        <App.Screen
        name="HomeScreen"
        component={HomeScreen}
        options ={{
            headerShown: false,
          }} 
        />

         <App.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
        options ={{
            headerShown: false,
          }} 
        />

        <App.Screen
        name="ProductScreen"
        component={ProductScreen}
        options ={{
            headerShown: false,
          }} 
        />
      </App.Navigator>
)   

const OrderStack = ({navigation}) => (
    <App.Navigator>
        <App.Screen
        name ="MyOrdersScreen"
        component ={MyOrdersScreen}
        options ={{
            headerShown: false,
          }} 
        />
      </App.Navigator>
)

const AccountStack = ({navigation}) => (
    <App.Navigator>
        <App.Screen
        name ="MyAccount"
        component ={MyAccountScreen}
        options ={{
            headerShown: false,
          }} 
       
        />
        <App.Screen
        name = "EditProfileScreen"
        component={EditProfileScreen}
        options ={{
            headerShown: false,
          }} 
        />
      </App.Navigator>
)  
    

export default function AppStack(){

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name ="Home"
                component ={HomeStack}
                options ={
                    {   
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
            <Tab.Screen
                name = "Orders"
                component = {OrderStack}
                options ={
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
             <Tab.Screen
                name = "Account"
                component = {AccountStack}
                options ={
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
            />
        </Tab.Navigator>    
    )
}