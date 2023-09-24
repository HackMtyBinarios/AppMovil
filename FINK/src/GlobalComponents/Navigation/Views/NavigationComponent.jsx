import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Components
import Dashboard from '../../../Features/Dashboard/Views/Dashboard';

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;