import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Favourite from '../screens/Favourite';
import Order from '../screens/Order';
import Account from '../screens/Account'

const Tab = createBottomTabNavigator();


export default function Route() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: '#fff'},
      tabBarShowLabel: false,
      headerShown: false,
    }}
    >
      <Tab.Screen 
      options={{
        tabBarIcon: ({focused}) => {
          return (
            focused ? <Entypo name="home" size={24} color="#F57D24" style={{backgroundColor: '#F1CAAD', padding: 8, borderRadius: 8}}/> : 
            <Entypo name="home" size={24} color="black"/>
          )
        }
      }}
      name="home" component={Home} />
      <Tab.Screen 
      options={{
        tabBarIcon: ({focused}) => {
          return (
            focused? <Feather name="heart" size={24} color="#F57D24" style={{backgroundColor: '#F1CAAD', padding: 8, borderRadius: 8}}/> :
            <Feather name="heart" size={24} color="black" />
          )
        }
      }}
      name="favourite" component={Favourite} />
       <Tab.Screen 
      options={{
        tabBarIcon: ({focused}) => {
          return (
            focused ? <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="#F57D24" style={{backgroundColor: '#F1CAAD', padding: 8, borderRadius: 8}}/> :
            <MaterialCommunityIcons name="clipboard-text-outline" size={24} color="black" />
          )
        }
      }}
      name="order" component={Order} />
       <Tab.Screen 
      options={{
        tabBarIcon: ({focused}) => {
          return (
            focused ? <MaterialCommunityIcons name="account-outline" size={24} color="#F57D24" style={{backgroundColor: '#F1CAAD', padding: 8, borderRadius: 8}}/> : 
            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
          )
        }
      }}
      name="account" component={Account} />
    </Tab.Navigator>
  )
}