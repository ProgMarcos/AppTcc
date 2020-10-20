import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Inicial from '../Telas/inicial'
import Identi from '../Telas/identi'
import Login from '../Telas/Login'


const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Inicial" component={Inicial} />
        <Drawer.Screen name="Identi" component={Identi} />
    </Drawer.Navigator> 
    )

