import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const Formulario = ({busqueda, guardarBusqueda,guardarConsulta, mostrarAlerta})=> {
  const {ciudad, pais} = busqueda
  const consultarClima=()=>{
    if (pais.trim() ==='' || ciudad.trim() ==='' ) {
      mostrarAlerta('Agrega una ciudad')
      return;
      
    }
    guardarConsulta(true);
  }
  return (
    <View >
      <View style={styles.input}>
        <TextInput
          value = {ciudad}
          placeholder = "ciudad"
          placeholdertextColor = '#666'
          onChangeText={ciudad=> guardarBusqueda({...busqueda, ciudad})}
          >
        </TextInput>
      </View>
      
      <View >
        <Picker
                itemStyle={styles.picker}
                selectedValue = {pais}
                onValueChange={ pais => guardarBusqueda({...busqueda, pais})}
                >
        
  
            <Picker.Item label="seleccione el país" value=""/>
            <Picker.Item label="Estados Unidos" value="US"/>
            <Picker.Item label="México" value="MX"/>
            <Picker.Item label="Colombia" value="CO"/>
            <Picker.Item label="Francia" value="FR"/>
        </Picker>
    </View>


    <TouchableWithoutFeedback
    onPress={()=> consultarClima()}
    >

      <View style={styles.btnBuscar}>
        <Text style={styles.textoBuscar}>
          Buscar Clima
        </Text>
      </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  
    input: {
      padding: 10,
      height: 50,
      backgroundColor: '#fff',
      marginBottom: 20,
      textAlign: 'center'
    },
    picker: {
      height: 120,
      backgroundColor: '#fff'
    },
    btnBuscar:{
      marginTop: 50,
      backgroundColor: '#000',
      padding: 10,
      justifyContent: 'center'
    },
    textoBuscar: {
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 18
    }
    
  
  
});

export default Formulario