import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native' 

import Navegacao from './navegacao'

export default props => (

    <SafeAreaView>
       <NavigationContainer>
            <Navegacao />
        </NavigationContainer>
    </SafeAreaView>
)
    