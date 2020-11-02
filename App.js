

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/Telas/Login'
import Quest from './src/Telas/quest'
import Resultado from './src/Telas/resultado'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/Telas/tabs'

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
          <Tabs/>
      </NavigationContainer>
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