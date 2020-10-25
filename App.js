

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
import ListQuest from './src/Telas/ListQuest'
import Resultado from './src/Telas/resultado'
import quest from './src/Telas/quest';



export default class App extends Component{
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
          <Resultado/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1

  }
});