import React, {useState} from 'react';
import {
  StyleSheet, View, Text, ScrollView, Button
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import {isof, medf, cotasf, prevf, aborf, macf,
armaf, privf, amazf, indigf, penaf, trabf, calculo, amostragem } from './functions'

export default props =>  {
  var x = 0
  var re=0
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
    return(
        <ScrollView>
            <Text style={styles.Titulo}>Identificação</Text>
            <Text style={styles.subtitulo}>Responda as questões do questionário para definir
                qual político te representa, baseado em suas opiniões políticas,
                ideológicas e sobre propostas populares no governo.
            </Text>
            
            {/*<RadioForm radio_props={isolist} initial={isSelecteded} onPress={aoba}/>*/}
            
            <Text style={styles.perguntas}>Isolamento social devido a pandemia do corona vírus:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => isof(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />
            
            <Text style={styles.perguntas}>Uso de medicamentos como Cloroquina e Hidroxocloroquina:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => medf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Cotas para negros e pessoas de baixa renda em universidades públicas:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => cotasf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Reforma da Previdência:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => prevf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Legalização do aborto:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => aborf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Legalização da maconha:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => macf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Facilidade ao porte de armas:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => armaf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Privatização de empresas públicas como Correios e Eletrobras:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => privf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Exploração dos recursos e minérios da amazônia:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => amazf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Demarcação de territórios indígenas e quilombolas:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => indigf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Maioridade Penal:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => penaf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />

            <Text style={styles.perguntas}>Diminuição da idade minima para o trabalho infantil:</Text>
            <RadioButtonRN
              data={isolist}
              selectedBtn={(e) => trabf(e)}
              box={false}
              animationTypes = {['zoomIn']}
            />
            
            <Button title="Submit"
              onPress={calculo}/>

            
    
        </ScrollView>
        //Retornar da function amostragem para daqui chamar a tela resultado
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    checkbox: {
        alignSelf: "center",
      },
    subtitulo: {
        fontSize: 25,
        marginTop: 15,
        marginRight: 20,
        marginLeft: 20,
        
    },
    perguntas: {
        fontSize: 20,
        marginLeft: 20,
        
    },
    Titulo: {
        marginTop:10,
        fontSize: 40,
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'black'
    }

  });