import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image, Alert, ImageBackground, Dimensions
} from 'react-native';

export default props => {

    clicou = () => {
        Alert.alert("BOTAO", 'Clicaste')
    }

    

    return (
    <View style={styles.container}>
         <ImageBackground source={require('../Assets/estatua.jpg')} style={styles.fundo}/>
         <View style={styles.containerdois}>
        <Image source={require('../Assets/boassa.png')}
        style={styles.logo}/>
        <TextInput style={styles.input} placeholder="Digite seu email"/>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite sua senha"/>
        <TouchableOpacity style={styles.botao} onPress={ () => {this.clicou()}}>
            <Text style={styles.TxtBt}>Login</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerdois: {
        marginTop: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'flex-start',
        width: 180,
        height: 180,
        borderRadius: 100,
    },
    fundo: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    input: {
        marginTop: 10,
        width: 300,
        backgroundColor: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        padding: 10
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#007FFF',
        marginTop: 20,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TxtBt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }

  });