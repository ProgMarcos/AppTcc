import React, {useState} from 'react';
import {
  StyleSheet, View, Text, ScrollView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { set } from 'react-native-reanimated';

export default props =>  {
    const [isSelected, setSelection] = useState(false);
    const [isSelecteded, setSelectioned] = useState(false);
    var i = -1;

    function aoba () {
        setSelectioned
        console.warn(isSelecteded)
    }

    var isolist = [
        {label: 'A Favor', value: isSelecteded },
        {id: 2, label: 'Contra', value: isSelecteded },
        {id: 2, label: 'Indiferente', value: isSelecteded }
      ];
      var medicamento = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var cotas = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var prev = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var aborto = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var maconha = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var armas = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var priv = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var amaz = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var indig = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var penal = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];
      var trab = [
        {label: 'A Favor', value: isSelected },
        {label: 'Contra', value: isSelected },
        {label: 'Indiferente', value: isSelected }
      ];


    return(
        <ScrollView>
            <Text style={styles.Titulo}>Identificação</Text>
            <Text style={styles.subtitulo}>Responda as questões do questionário para definir
                qual político te representa, baseado em suas opiniões políticas,
                ideológicas e sobre propostas populares no governo.
            </Text>
            
            
            <Text style={styles.perguntas}>Isolamento social devido a pandemia do corona vírus:</Text>
            <RadioForm radio_props={isolist} initial={isSelecteded} onPress={aoba}
/>
            
            <Text style={styles.perguntas}>Uso de medicamentos como Cloroquina e Hidroxocloroquina:</Text>
            <RadioForm radio_props={medicamento} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Cotas para negros e pessoas de baixa renda em universidades públicas:</Text>
            <RadioForm radio_props={cotas} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Reforma da Previdência:</Text>
            <RadioForm radio_props={prev} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Legalização do aborto:</Text>
            <RadioForm radio_props={aborto} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Legalização da maconha:</Text>
            <RadioForm radio_props={maconha} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Facilidade ao porte de armas:</Text>
            <RadioForm radio_props={armas} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Privatização de empresas públicas como Correios e Eletrobras:</Text>
            <RadioForm radio_props={priv} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Exploração dos recursos e minérios da amazônia:</Text>
            <RadioForm radio_props={amaz} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Demarcação de territórios indígenas e quilombolas:</Text>
            <RadioForm radio_props={indig} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Maioridade Penal:</Text>
            <RadioForm radio_props={penal} initial={0} onPress={setSelection}/>

            <Text style={styles.perguntas}>Diminuição da idade minima para o trabalho infantil:</Text>
            <RadioForm radio_props={trab} initial={0} onPress={setSelection}/>
            
    
        </ScrollView>
        
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