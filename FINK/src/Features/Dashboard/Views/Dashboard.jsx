import React from 'react';

import {View, Image, Text, ScrollView} from 'react-native';

const Dashboard = () => {
    return (
      <ScrollView>
      <View style={{height: 100, borderBottomWidth: 2, backgroundColor: 'white', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}}>
        <View style={{width: 200,  marginTop: 24, marginLeft:24}}>
        <Image source={require('./FINK.png')} style={{width: '70%', height: '70%'}}/>
        </View>
      </View>
      <Text style={{fontFamily: 'Chivo', fontSize: 40 ,fontWeight: 'bold', marginTop: 32, marginHorizontal: 24}}>¡Bienvenid@!</Text>
      <Text style={{fontFamily: 'Chivo', fontSize: 16, fontWeight: 'bold', marginTop: 16, marginHorizontal: 24, color: '#555555'}}>Juan José Salazar Cortés</Text>
      <Text style={{fontFamily: 'Chivo', fontSize: 24 ,fontWeight: 'bold', marginTop: 32, marginHorizontal: 24}}>Ganancias Actuales: </Text>
      <View style={{width: '100%', height: 170, paddingHorizontal: 24, marginTop: 24                                                                                                  }}>
        <Image source={require('../../../GlobalComponents/Navigation/Assets/trendGraph.png')} style={{width: '100%', height: '100%'}}/>
      </View>
      </ScrollView>
    );
  };

export default Dashboard;
