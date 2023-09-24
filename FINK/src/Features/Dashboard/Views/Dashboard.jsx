import React from 'react';

import {View, Image, Text} from 'react-native';

const Dashboard = () => {
    return (
      <>
      <View style={{height: 100, borderBottomWidth: 2, backgroundColor: 'white', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}}>
        <View style={{width: 200,  marginTop: 24, marginLeft:24}}>
        <Image source={require('./FINK.png')} style={{width: '70%', height: '70%'}}/>
        </View>
      </View>
      <Text style={{fontFamily: 'Chivo', fontSize: 40, fontWeight: 'bold', marginVertical: 32, marginHorizontal: 24}}>¡Bienvenid@!</Text>
      </>
    );
  };

export default Dashboard;
