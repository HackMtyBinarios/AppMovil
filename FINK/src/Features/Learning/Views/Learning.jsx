import React, {useState} from 'react';

import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Learning = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const rutaActual = route.name;

  const Book = rutaActual === 'Book';
  const Newspaper = rutaActual === 'Newspaper';
  const Home = rutaActual === 'Home';
  const Search = rutaActual === 'Search';
  const Trend = rutaActual === 'Trend';

  const learning = [
    'Conceptos finanzas personales',
    'Presupuesto y planificacion',
    'Ahorro y gestion de deudas',
    'Manejo de cuentas bancarias y tarjetas',
    'Ahorro a largo plazo e inversiones',
    'Ejercicios practicos',
  ];

  return (
    <>
      <ScrollView style={{margin: 24}} showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 24}}>
          Introducción a las Finanzas Personales
        </Text>
        {learning.map((x, idx) => {
          return (
            <View
              key={idx}
              style={{height: 64, marginVertical: 8, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#9CFFDB',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../GlobalComponents/Navigation/Assets/Lock.png')}
                />
              </View>
              <View
                style={{
                  flex: 6,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{x}</Text>
              </View>
            </View>
          );
        })}
        <TouchableOpacity
          style={{
            marginTop: 24,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}>
          <Text style={{backgroundColor: '#E3E3E3', fontSize: 18, padding: 16, width: '100%', borderRadius: 12, borderWidth: 2}}>
            Comenzar a Aprender ($99)
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          borderTopWidth: 3,
          height: 88,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{marginHorizontal: 8, width: 48, height: 34}}
          onPress={() => navigation.navigate('Book')}>
          <Image
            source={
              Book
                ? require('../../../GlobalComponents/Navigation/Assets/bookFilled.png')
                : require('../../../GlobalComponents/Navigation/Assets/book.png')
            }
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 8, width: 40, height: 40}}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={
              !Home
                ? require('../../../GlobalComponents/Navigation/Assets/home.png')
                : require('../../../GlobalComponents/Navigation/Assets/homeFilled.png')
            }
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 8, width: 40, height: 40}}
          onPress={() => navigation.navigate('Trend')}>
          <Image
            source={
              !Trend
                ? require('../../../GlobalComponents/Navigation/Assets/trends.png')
                : require('../../../GlobalComponents/Navigation/Assets/trendsFilled.png')
            }
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Learning;
