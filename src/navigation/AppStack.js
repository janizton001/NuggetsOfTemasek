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
import MyDeliveriesScreen from '../screens/MyDeliveriesScreen';
import CanteenScreen from '../screens/CanteenScreen';
import MapScreen from '../screens/MapScreen';
import SearchScreen from '../screens/SearchScreen';
import EditOrderScreen from '../screens/EditOrderScreen';

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
        name="CanteenScreen"
        component={CanteenScreen}
        options ={{
            headerShown: false,
          }} 
        />

        <App.Screen
        name="MapScreen"
        component={MapScreen}
        options ={{
            headerShown: false,
          }} 
        />

        <App.Screen
        name="SearchScreen"
        component= {SearchScreen}
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
        <App.Screen
        name ="EditOrderScreen"
        component ={EditOrderScreen}
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
const DeliveryStack = ({navigation}) => (
    <App.Navigator>
        <App.Screen
        name ="MyDeliveries"
        component ={MyDeliveriesScreen}
        options ={{
            headerShown: false,
          }} 
        />
    </App.Navigator>
)

export default function AppStack(){

    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: {borderTopRightRadius: 5, borderTopLeftRadius: 5},
            tabBarActiveTintColor: 'orange',
            }}
            >
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
                        ),
                        unmountOnBlur: true
                    }
                }
            />

            <Tab.Screen
                name = "Deliveries"
                component = {DeliveryStack}
                options ={
                    {
                        tabBarLabel : "Deliveries",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='delivery-dining'
                                type = 'material'
                                color = {color}
                                size ={size} 
                            />
                        ),
                        unmountOnBlur: true
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