import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, View, Platform } from 'react-native';
import Clima from './componentes/Clima';
import Formulario from './componentes/Formulario';

const App = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
  })
  const {ciudad, pais} = busqueda
  const [consultar, guardarConsulta] = useState(false)
  const [datos, guardarDatos] = useState(false);

  useEffect(()=>{
      const consultarClima = async () =>{
        if(consultar){
          console.log(ciudad)
          console.log(pais)
          const apiKey = 'c62d1b64c7ff8a5b19a105e5293c498f'
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
          try{
            const respuesta = await fetch(url);
            const data = await respuesta.json();

            if (data.cod === '404') {
                mostrarAlerta('bryan hay ciudad');
              
            }else {
            guardarDatos(data);
            guardarConsulta(false);
          }

        }catch(err){
          console.log(err);
          mostrarAlerta('No hay ciudad');
        }
        }
      }
      consultarClima();
    },[consultar])

    const mostrarAlerta= (msg) =>{
      if (Platform.OS ==='web') {
        alert(msg)   
      }else{
      Alert.alert('Error', msg, [{text: 'Entendido'}])
      }
    }

  return (
    <View style={styles.app}  >
      <View style={styles.contenido} >
        <Clima  resultados={datos}></Clima>
        <Formulario 
              busqueda={busqueda} 
              guardarBusqueda={guardarBusqueda} 
              guardarConsulta={guardarConsulta}
              mostrarAlerta ={mostrarAlerta}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App