import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Clima = ({resultados}) => {
    const {name, main} = resultados
    if(!name) return null;
    const kelvin = 273.15;
  return (
    <View  style={styles.clima}>
            <Text>
                { parseInt(main.temp - kelvin)}
                <Text  style={styles.temperatura}>
                &#x2103;
                </Text>
                <Image  style={styles.img} source={{uri: `http://openweathermap.org/img/w/${resultados.weather[0].icon}.png`}}>

                </Image>
            </Text>

            <View  style={styles.minMax}> 
                <Text  style={styles.texto}>
                    Min{' '}
                    <Text style={styles.temperatura}>
                    { parseInt(main.temp_min - kelvin)} &#x2103;
                    </Text>
                </Text>
                <Text  style={styles.texto}> 
                    Max{' '}
                    <Text style={styles.temperatura}> 
                    { parseInt(main.temp_max - kelvin)} &#x2103;
                    </Text>
                </Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
        clima: {
          marginBottom: 20,
        },
        texto:{
          color: '#FFF',
          fontSize: 20,
          textAlign: 'center',
          marginRight: 20,
      
        },
        actual: {
          fontSize: 80,
          marginRight: 0,
          fontWeight: 'bold'
        },
        temperatura: {
          fontSize: 24,
          fontWeight: 'bold'
        },
        img:{
          width:66,
          height: 58,
        },
        minMax: {
          flexDirection: 'row',
          justifyContent: 'center'
        }
      
});

export default Clima