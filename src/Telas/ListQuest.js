import React, {useState} from 'react';
import {
  StyleSheet, View, Text, ScrollView
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default props =>  {
const {isolamento} = props
const [isSelected, setSelection] = useState(false);
var isolamentolist = [
    {label: 'A Favor', value: isSelected },
    {label: 'Contra', value: isSelected },
    {label: 'Indiferente', value: isSelected }
   ]
  var medicamento = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var cotas = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var prev = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var aborto = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var maconha = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var armas = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var priv = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var amaz = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var indig = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var penal = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  var trab = [
    {label: 'A Favor', value: 1 },
    {label: 'Contra', value: 1 },
    {label: 'Indiferente', value: 1 }
  ];
  if (isolamento) {
    return(
        <RadioForm
            radio_props={isolamentolist}
            initial={0}
            onPress={setSelection}/>
    )
    }
}