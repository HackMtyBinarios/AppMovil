import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Components
import Dashboard from '../../../Features/Dashboard/Views/Dashboard';
import Learning from '../../../Features/Learning/Views/Learning';
import Coach from '../../../Features/Coach/Views/Coach';

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Book"
          component={Learning}
        />
        <Stack.Screen
          name="Newspaper"
          component={Dashboard}
        />
        <Stack.Screen
          name="Home"
          component={Dashboard}
        />
        <Stack.Screen
          name="Search"
          component={Coach}
        />
        <Stack.Screen
          name="Trend"
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;