

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Index from './src/nav/index'
import Login from './src/Telas/Login'
import Quest from './src/Telas/quest'



export default class App extends Component{
  
  render(){
    return(
      <SafeAreaView>
          <Quest/>
      </SafeAreaView>
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