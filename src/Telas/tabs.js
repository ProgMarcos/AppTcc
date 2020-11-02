import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Quest from './quest'
import Noticias from './noticias'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props =>{

const Tab = createBottomTabNavigator();


return(
    <Tab.Navigator initialRouteName={Noticias} 
    tabBarOptions={{
      activeTintColor: '#4682B4',
      labelStyle:{fontSize:20, fontFamily:'Roboto', fontWeight:'bold'},
      style:{height:60}, activeBackgroundColor: '#E0FFFF'
    }}>
            <Tab.Screen name="Noticias" component={Noticias} 
            options={{tabBarLabel:'Noticias', 
            tabBarIcon: ({ color, size }) => (
              <Icon name='newspaper-o' size={30} color={color}/>
            )}}/>

            <Tab.Screen name="Questionario" component={Quest} 
            options={{tabBarLabel:'Questionario', 
            tabBarIcon: ({ color, size }) => (
              <Icon name='list' size={30} color={color}/>
            )}}/>
    </Tab.Navigator>
    
)
}
