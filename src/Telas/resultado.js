
import React, {useState} from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, Dimensions
} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default props => {
    const {haddad, dino, ciro, huck, moro, bolsonaro, doria} = props

    if (haddad){
        return (
            <View style={styles.rectangle}>
            <View style={styles.viewtexto}>
                <Text style={styles.titulo}>Fernando Haddad</Text>
                <Text style={styles.subtitulo}>PT (Partido dos Trabalhadores)</Text>
            </View>
            <View style={styles.viewimg}>
                <Image source={require('../Assets/Candidatos/Haddad.jpg')} style={styles.logo}/>
            </View>
            <View style={styles.viewbt}>
            <AwesomeButton
                width={240} height={50} raiseLevel={3} textSize={20}
                backgroundColor={'#4169E1'}
                activeOpacity={10}>
                  PERFIL
              </AwesomeButton>
            </View>
        </View>
        )
    }


    if (dino){
        return (
            <View style={styles.rectangle}>
                <View style={styles.viewtexto}>
                    <Text style={styles.titulo}>Flávio Dino</Text>
                    <Text style={styles.subtitulo}>PC do B (Partido Comunista do Brasil)</Text>
                </View>
                <View style={styles.viewimg}>
                    <Image source={require('../Assets/Candidatos/Dino.jpg')} style={styles.logo}/>
                </View>
                <View style={styles.viewbt}>
                <AwesomeButton
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundColor={'#4169E1'}
                    activeOpacity={10}>
                    PERFIL
              </AwesomeButton>
                </View>
            </View>
        )
    }


    if (ciro){
        return (
            <View style={styles.rectangle}>
                <View style={styles.viewtexto}>
                    <Text style={styles.titulo}>Ciro Gomes</Text>
                    <Text style={styles.subtitulo}>PDT (Partido Democrático Trabalhista)</Text>
                </View>
                <View style={styles.viewimg}>
                    <Image source={require('../Assets/Candidatos/ciro.jpg')} style={styles.logo}/>
                </View>
                <View style={styles.viewbt}>
                <AwesomeButton
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundColor={'#4169E1'}
                    activeOpacity={10}>
                    PERFIL
              </AwesomeButton>
                </View>
            </View>
        )
    }


    if (huck){
        return (
            <View style={styles.rectangle}>
                <View style={styles.viewtexto}>
                    <Text style={styles.titulo}>Luciano Huck</Text>
                    <Text style={styles.subtitulo}>Sem partido</Text>
                </View>
                <View style={styles.viewimg}>
                    <Image source={require('../Assets/Candidatos/huck.jpg')} style={styles.logo}/>
                </View>
                <View style={styles.viewbt}>
                <AwesomeButton
                    
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundColor={'#4169E1'}
                    activeOpacity={10}>
                    PERFIL
              </AwesomeButton>
                </View>
            </View>
        )
    }


    if (moro){
        return (
            <View style={styles.rectangle}>
                <View style={styles.viewtexto}>
                    <Text style={styles.titulo}>Sérgio Moro</Text>
                    <Text style={styles.subtitulo}>Sem partido</Text>
                </View>
                <View style={styles.viewimg}>
                    <Image source={require('../Assets/Candidatos/moro.png')} style={styles.logo}/>
                </View>
                <View style={styles.viewbt}>
                <AwesomeButton
                    
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundColor={'#4169E1'}
                    activeOpacity={10}>
                    PERFIL
              </AwesomeButton>
                </View>
            </View>
        )
    }


    if (bolsonaro){
        return (
            <View style={styles.rectangle}>
                <View style={styles.viewtexto}>
                    <Text style={styles.titulo}>Jair Messias Bolsonaro</Text>
                    <Text style={styles.subtitulo}>Aliança Pelo Brasil</Text>
                </View>
                <View style={styles.viewimg}>
                    <Image source={require('../Assets/Candidatos/bolso.jpg')} style={styles.logo}/>
                </View>
                <View style={styles.viewbt}>
                <AwesomeButton
                    
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundColor={'#4169E1'}
                    activeOpacity={10}>
                    PERFIL
              </AwesomeButton>
                </View>
            </View>
        )
    }


    if (doria){
        return (
            <View style={styles.rectangle}>
                <View style={styles.viewtexto}>
                    <Text style={styles.titulo}>João Dória</Text>
                    <Text style={styles.subtitulo}>PSDB (Partido da Social Democracia Brasileira)</Text>
                </View>
                <View style={styles.viewimg}>
                    <Image source={require('../Assets/Candidatos/Doria.jpg')} style={styles.logo}/>
                </View>
                <View style={styles.viewbt}>
                <AwesomeButton
                    
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundColor={'#4169E1'}
                    activeOpacity={10}>
                    PERFIL
              </AwesomeButton>
                </View>
            </View>
        )
    }





    }


const styles = StyleSheet.create({

    rectangle: {
       // flex:1,
        marginTop:35,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        flexDirection:'row-reverse',
        width: Dimensions.get('window').width-10,
        height: 350,
        backgroundColor: '#F0FFFF',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        borderLeftWidth:5,
        borderBottomWidth:5,
        borderTopWidth:5,
        borderRightWidth:5,
        borderColor:'black'
    },
   viewimg:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        height:230,
        width: 350,
    },
    viewtexto:{
        flexDirection:'column',
        alignItems:'center' ,
        justifyContent:'flex-start',
        height:230,
        width: 200,
    },
    viewbt:{
        flexDirection:'column',
        alignItems:'center' ,
        justifyContent:'center',
        height:120,
        width: 300,
    },
    botao:{
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
        marginTop:10,
        fontFamily: "Retroica"
    },
    subtitulo:{
        textAlign:"center",
       marginTop:20,
        fontSize: 25,
        fontFamily: "Retroica"
    },
    retangulo:{
        flex:1,
        width: 350,
        height: 200,
    },
})