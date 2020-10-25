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

}