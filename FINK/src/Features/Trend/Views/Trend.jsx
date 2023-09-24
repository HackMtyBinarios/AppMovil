import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

const Trend = () => {

    const navigation = useNavigation();
  const route = useRoute();

  const rutaActual = route.name;
  
  const Book = rutaActual === "Book";
  const Home = rutaActual === "Home";
  const Search = rutaActual === "Search";
  const Trend = rutaActual === "Trend";

  return (
    <>
    <ScrollView style={styles.container}>
        <Text style={{fontFamily: 'Chivo', fontSize: 32 ,fontWeight: 'bold', marginTop: 32, marginHorizontal: 24}}>Tendencias</Text>
        <Text style={{fontFamily: 'Chivo', fontSize: 20 ,fontWeight: 'regular', marginTop: 16, marginHorizontal: 24}}>Stock price semanal de Google entre 2010 y 2020 vs su predicción hecha 4 semanas previas: </Text>
        <View style={{width: '100%', height: 260, paddingHorizontal: 16, marginTop: 16}}>
             <Image source={require('../Assets/graphGoogle.jpeg')} style={{width: '100%', height: '100%'}}/>
        </View>
        <Text style={{fontFamily: 'Chivo', fontSize: 20 ,fontWeight: 'regular', marginTop: 16, marginHorizontal: 24}}>Stock price semanal de Microsoft entre 2010 y 2020 vs su predicción hecha 4 semanas previas: </Text>
        <View style={{width: '100%', height: 260, paddingHorizontal: 16, marginTop: 16}}>
             <Image source={require('../Assets/graphMicrosoft.jpeg')} style={{width: '100%', height: '100%'}}/>
        </View>
    </ScrollView>
    <View style={{borderTopWidth: 3, height: 88, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'white'}}>
    <TouchableOpacity style={{marginHorizontal: 8, width: 48, height: 34}} onPress={() => navigation.navigate('Book')}>
      <Image source={Book ? require('../../../GlobalComponents/Navigation/Assets/bookFilled.png') : require('../../../GlobalComponents/Navigation/Assets/book.png')} style={{width: '100%', height: '100%'}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginHorizontal: 8, width: 40, height: 40}} onPress={() => navigation.navigate('Home')}>
      <Image source={!Home ? require('../../../GlobalComponents/Navigation/Assets/home.png') : require('../../../GlobalComponents/Navigation/Assets/homeFilled.png')} style={{width: '100%', height: '100%'}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginHorizontal: 8, width: 40, height: 40}} onPress={() => navigation.navigate('Trend')}>
      <Image source={!Trend ? require('../../../GlobalComponents/Navigation/Assets/trends.png') : require('../../../GlobalComponents/Navigation/Assets/trendsFilled.png')} style={{width: '100%', height: '100%'}} />
    </TouchableOpacity>
  </View>
  </>
  );
};

const styles = StyleSheet.create({

});

export default Trend;

