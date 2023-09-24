import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Components
import Dashboard from '../../../Features/Dashboard/Views/Dashboard';
import Learning from '../../../Features/Learning/Views/Learning';
import Trend from '../../../Features/Trend/Views/Trend';

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Book"
          component={Learning}
        />
        <Stack.Screen
          name="Home"
          component={Dashboard}
        />
        <Stack.Screen
          name="Trend"
          component={Trend}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;