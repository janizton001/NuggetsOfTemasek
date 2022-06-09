import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen'
import MyAccountScreen from '../screens/MyAccountScreen'

const App = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Tab.Navigator>
      <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
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
                name ="MyOrdersScreen"
                component ={MyOrdersScreen}
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
                name ="MyAccount"
                component ={MyAccountScreen}
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
);

export default function AppStack(){

    return(
        <App.Navigator>
            <App.Screen 
                name ="App"
                component ={FeedStack}
            />
        </App.Navigator>    
    )
}