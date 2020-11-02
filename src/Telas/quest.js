import React, {useRef, useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Button, Dimensions, ScrollTo} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Resultado from './resultado'
import {isof, medf, cotasf, prevf, aborf, macf,
armaf, privf, amazf, indigf, penaf, trabf, verif, zerar} from './functions'
import AwesomeButton from "react-native-really-awesome-button";



export default props =>  {
  var isolist = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var medicamento = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var cotas = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var prev = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var aborto = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var maconha = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var armas = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var priv = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var amaz = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var indig = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var penal = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];
  var trab = [
    {label: 'A Favor', id: 1 },
    {label: 'Contra', id: 2},
    {label: 'Indiferente', id: 3}
  ];

const [numero, setNumero] = useState(0)

  const teste= ()=>{
    setNumero(numero + verif())
  }

  const reiniciar=()=>{
    setNumero(numero*0)
    zerar()
  }


      return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.Titulo}>QUESTIONÁRIO</Text>
            <Text style={styles.subtitulo}>Responda as questões do questionário para definir
                qual político te representa.
            </Text>
            <Text style={styles.perguntas}>Isolamento social devido a pandemia do corona vírus:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => isof(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />
            
            <Text style={styles.perguntas}>Uso de medicamentos como Cloroquina e Hidroxocloroquina:</Text>
            <RadioButtonRN
              data={medicamento}
              selectedBtn={(e) => medf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Cotas para negros e pessoas de baixa renda em universidades públicas:</Text>
            <RadioButtonRN
              data={cotas}
              selectedBtn={(e) => cotasf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Reforma da Previdência:</Text>
            <RadioButtonRN
              data={prev}
              selectedBtn={(e) => prevf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Legalização do aborto:</Text>
            <RadioButtonRN
              data={aborto}
              selectedBtn={(e) => aborf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Legalização da maconha:</Text>
            <RadioButtonRN
              data={maconha}
              selectedBtn={(e) => macf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Facilidade ao porte de armas:</Text>
            <RadioButtonRN
              data={armas}
              selectedBtn={(e) => armaf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Privatização de empresas públicas como Correios e Eletrobras:</Text>
            <RadioButtonRN
              data={priv}
              selectedBtn={(e) => privf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Exploração dos recursos e minérios da amazônia:</Text>
            <RadioButtonRN
              data={amaz}
              selectedBtn={(e) => amazf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Demarcação de territórios indígenas e quilombolas:</Text>
            <RadioButtonRN
              data={indig}
              selectedBtn={(e) => indigf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Maioridade Penal:</Text>
            <RadioButtonRN
              data={penal}
              selectedBtn={(e) => penaf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />

            <Text style={styles.perguntas}>Diminuição da idade minima para o trabalho infantil:</Text>
            <RadioButtonRN
              data={trab}
              selectedBtn={(e) => trabf(e)}
              box={true}
              animationTypes = {['zoomIn']}
              textStyle={styles.textoRadio}
              boxStyle={styles.btRadio}
              activeColor='#4169E1'
              />
            <View style={styles.bt}>
              <AwesomeButton
                progress={true} onPress={next => { teste(); next()}}
                width={240} height={50} raiseLevel={3} textSize={20}
                backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                activeOpacity={10}>
                  ENVIAR
              </AwesomeButton>
            </View>



                <View style={styles.result}>
                {numero===1 ?<>
                   <AwesomeButton
                   progress={true} onPress={next => { reiniciar(); next() }}
                   width={240} height={50} raiseLevel={3} textSize={20}
                   backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                   activeOpacity={10} >
                    REINICIAR
                 </AwesomeButton>
                  <Resultado haddad /></>: false} 

                  {numero===2 ?<>
                   <AwesomeButton
                   progress={true} onPress={next => { reiniciar(); next() }}
                   width={240} height={50} raiseLevel={3} textSize={20}
                   backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                   activeOpacity={10} >
                    REINICIAR
                 </AwesomeButton>
                  <Resultado dino /></>: false} 

                  {numero===3 ?<>
                    <AwesomeButton
                    progress={true} onPress={next => { reiniciar(); next() }}
                    width={240} height={50} raiseLevel={3} textSize={20}
                    backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                    activeOpacity={10} >
                     REINICIAR
                  </AwesomeButton>
                  <Resultado ciro /></> : false} 

                  {numero===4 ?<>
                  <AwesomeButton
                  progress={true} onPress={next => { reiniciar(); next() }}
                  width={240} height={50} raiseLevel={3} textSize={20}
                  backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                  activeOpacity={10} >
                   REINICIAR
                </AwesomeButton>
                  <Resultado huck /></>: false} 

                  {numero===5 ?<>
                  <AwesomeButton
                  progress={true} onPress={next => { reiniciar(); next() }}
                  width={240} height={50} raiseLevel={3} textSize={20}
                  backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                  activeOpacity={10} >
                   REINICIAR
                </AwesomeButton>
                  <Resultado moro /></>: false} 

                  {numero===6 ?<>
                  <AwesomeButton
                  progress={true} onPress={next => { reiniciar(); next() }}
                  width={240} height={50} raiseLevel={3} textSize={20}
                  backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                  activeOpacity={10} >
                   REINICIAR
                </AwesomeButton>
                  <Resultado bolsonaro /></>: false} 

                  {numero===7 ? <>
                  <AwesomeButton
                  progress={true} onPress={next => { reiniciar(); next() }}
                  width={240} height={50} raiseLevel={3} textSize={20}
                  backgroundProgress={'#32CD32'} backgroundColor={'#4682B4'}
                  activeOpacity={10} >
                   REINICIAR
                </AwesomeButton>
                  <Resultado doria /></> : false} 
                </View>
                </ScrollView>
       ) 
      }




const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor:'#F0FFFF'
    },
    textoRadio: {
      fontSize:20,
      fontFamily:'Roboto',
    },
    result: {
      alignItems:'center',
      justifyContent:'center'
    },
    btRadio: {
      backgroundColor: '#F5F5DC',
      width: 250,
      marginLeft: 20
    },
    bt:{
      justifyContent:'center',
      alignItems:'center',
      marginTop: 20
    },
    checkbox: {
        alignSelf: "center",
      },
    subtitulo: {
        fontSize: 23,
        marginTop: 15,
        marginRight: 20,
        marginLeft: 20,
        fontFamily:'FontAwesome5_Solid',
        color:'#4682B4'
        
    },
    perguntas: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        fontFamily:'EvilIcons',
        fontWeight:'bold',
        color: '#363636'
    },
    Titulo: {
        marginTop:10,
        fontSize: 33,
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#4682B4',
        fontFamily: 'Roboto'
    }

  })