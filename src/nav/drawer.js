import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Inicial from '../Telas/inicial'
import Identi from '../Telas/identi'
import Login from '../Telas/Login'
import Cadastro from '../Telas/Cadastro'

const RotasComeco ={
    Login: {
        name: 'Login',
        screen: Login
    },

    Cadastro: {
        name: 'Cadastro',
        screen: Cadastro
    },

    Home: {
        name: 'Home',
        screen: RotasApp
    }
}
const ComecoNav = createSwitchNavigator(RotasComeco, {initialRouteName: 'Login'})

const RotasApp ={
    Inicial: {
        name: 'Inicial',
        screen: Inicial
    },

    Identi: {
        name: 'Identi',
        screen: Identi
    },
}
const AppNav = createDrawerNavigator(RotasApp)

export default createAppContainer(ComecoNav)
