
import React, {useState} from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';

export default props => {
    
    return(
        
        <View style={styles.rectangle}>
            <View style={styles.viewtexto}>
                <Text style={styles.titulo}>Jair Messias Bolsonaro</Text>
                <Text style={styles.subtitulo}>Sem partido</Text>
            </View>
            <View style={styles.viewimg}>
                <Image source={require('../Assets/Candidatos/bolso.jpg')} style={styles.logo}/>
                </View>
            <View style={styles.viewbt}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Voltar</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    )
}


const styles = StyleSheet.create({

    rectangle: {
       // flex:1,
        flexDirection:'row-reverse',
        width: 350,
        height: 350,
        backgroundColor: 'rgba(127, 255, 212, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
    },
   viewimg:{
       // flexDirection:'column',
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        height:230,
        width: 350,
        //backgroundColor:'green'
    },
    viewtexto:{
       // flex:1,
        flexDirection:'column',
        alignItems:'center' ,
        justifyContent:'flex-start',
        height:230,
        width: 175,
       // backgroundColor: 'blue'
    },
    viewbt:{
       // flex:1,
        flexDirection:'column',
        alignItems:'center' ,
        justifyContent:'center',
        height:120,
        width: 300,
        //marginEnd:10,
       // backgroundColor: 'blue'
    },
    botao:{
        //flex:1,
        flexDirection:'column-reverse',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#87CEFA',
        width:280,
        height:50,
        marginTop:5
    },
    textobotao:{
        fontSize:20,
        fontFamily:'Retroica',
    },
    logo: {
       // justifyContent: 'flex-start',
       alignItems:'flex-start',
        width: 165,
        height: 210,
        marginLeft: 10,
        marginTop:10,
    },
    titulo:{
        textAlign:"center",
        fontWeight:'bold',
        fontSize: 35,
       // marginLeft:180,
        marginTop:10,
        fontFamily: "Retroica"
    },
    subtitulo:{
        textAlign:"center",
      // marginLeft:180,
       marginTop:20,
        fontSize: 25,
        fontFamily: "Retroica"
    },
    retangulo:{
        flex:1,
        width: 350,
        height: 200,
        //backgroundColor: 'red',
    },




})
    

