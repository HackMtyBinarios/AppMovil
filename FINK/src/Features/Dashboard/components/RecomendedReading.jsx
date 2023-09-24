import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, Linking} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const openWebPage = () => {
    const url = 'https://www.eleconomista.com.mx/mercados/Dolar-hoy-precio-del-22-de-septiembre-de-2023-20230922-0025.html'; // Replace with the desired URL
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred: ', err));
  };
  

  return (
    
    <TouchableOpacity style={styles.container} onPress={openWebPage}>
        <View style = {styles.imageContainer}><Image style = {{width: '100%',height: '100%'}} source={require('../assets/inversiones.png')}/>
        </View>
        <View style = {styles.principalView}>
          <View style = {styles.view1}>
            <Text style={{fontFamily: 'Chivo', fontSize: 14 ,fontWeight: 'normal', marginTop: 0, marginHorizontal: 24}}>2023 | Peso mexicano avanza tras Inflación; cierra negativo</Text>
          </View>
          <View style = {styles.view2}>
            <Text style={{fontFamily: 'arial', fontSize: 24 ,fontWeight: 'bold', marginTop: 0, marginHorizontal: 10}}>Leer</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: 170, 
    marginTop: 32,
    paddingHorizontal: 24, 
  },

  imageContainer: {
    borderWidth: 3,
    borderBottomWidth: 3,
  },

  principalView: {
    display: 'flex',
    flex: 1, // To make the container take up the entire screen
    flexDirection: 'row', // Arrange small containers horizontally
    alignItems: 'center', // Center small containers vertically
  },

  view1: {
    display: 'flex',
    flex: 3,
    height: 80,
    backgroundColor: '#E3E3E3',
    borderWidth: 3,
  },

  view2: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#9CFFDB',
    borderRightWidth: 3,
    borderLeftWidth: 0,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    height: 80,
  },
});

export default App;

