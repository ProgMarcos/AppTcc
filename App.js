

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './src/Login'



export default class App extends Component{
  
  render(){
    return(
      <View>
        <Login />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    flex: 1

  }
});