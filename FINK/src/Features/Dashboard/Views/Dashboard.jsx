import React, { useState } from 'react';

import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import RecomendedReading from '../Components/RecomendedReading';
const Dashboard = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const rutaActual = route.name;
  
  const Book = rutaActual === "Book";
  const Newspaper = rutaActual === "Newspaper";
  const Home = rutaActual === "Home";
  const Search = rutaActual === "Search";
  const Trend = rutaActual === "Trend";

    return (
      <>
      <ScrollView>
      <View style={{height: 100, borderBottomWidth: 2, backgroundColor: 'white', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}}>
        <View style={{width: 200,  marginTop: 24, marginLeft:24}}>
        <Image source={require('../assets/FINK.png')} style={{width: '70%', height: '70%'}}/>
        </View>
      </View>
      <Text style={{fontFamily: 'Chivo', fontSize: 40 ,fontWeight: 'bold', marginTop: 32, marginHorizontal: 24}}>¡Bienvenid@!</Text>
      <Text style={{fontFamily: 'Chivo', fontSize: 16, fontWeight: 'bold', marginTop: 16, marginHorizontal: 24, color: '#555555'}}>Juan José Salazar Cortés</Text>
      <Text style={{fontFamily: 'Chivo', fontSize: 24 ,fontWeight: 'bold', marginTop: 32, marginHorizontal: 24}}>Ganancias Actuales: </Text>
      <View style={{width: '100%', height: 170, paddingHorizontal: 24, marginTop: 16}}>
        <Image source={require('../../../GlobalComponents/Navigation/Assets/trendGraph.png')} style={{width: '100%', height: '100%'}}/>
      </View>
      <RecomendedReading/>
      </ScrollView>
      <View style={{borderTopWidth: 3, height: 88, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: 'white'}}>
        <TouchableOpacity style={{marginHorizontal: 8, width: 48, height: 34}} onPress={() => navigation.navigate('Book')}>
          <Image source={Book ? require('../../../GlobalComponents/Navigation/Assets/bookFilled.png') : require('../../../GlobalComponents/Navigation/Assets/book.png')} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8, width: 40, height: 40}} onPress={() => navigation.navigate('Newspaper')}>
          <Image source={!Newspaper ? require('../../../GlobalComponents/Navigation/Assets/newspaper.png') : require('../../../GlobalComponents/Navigation/Assets/newspaperFilled.png')} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8, width: 40, height: 40}} onPress={() => navigation.navigate('Home')}>
          <Image source={!Home ? require('../../../GlobalComponents/Navigation/Assets/home.png') : require('../../../GlobalComponents/Navigation/Assets/homeFilled.png')} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8, width: 40, height: 40}} onPress={() => navigation.navigate('Search')}>
          <Image source={!Search ? require('../../../GlobalComponents/Navigation/Assets/search.png') : require('../../../GlobalComponents/Navigation/Assets/searchFilled.png')} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 8, width: 40, height: 40}} onPress={() => navigation.navigate('Trend')}>
          <Image source={!Trend ? require('../../../GlobalComponents/Navigation/Assets/trends.png') : require('../../../GlobalComponents/Navigation/Assets/trendsFilled.png')} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
      </View>
      </>
      
    );
  };

export default Dashboard;
