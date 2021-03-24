import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Congratulation from './Pages/Congratulation';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              headerTitle: <Header title="BEM-VINDO"/>,
              headerStyle: {
                backgroundColor: '#875FC0'
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              }

            }
          }
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={
            {
              headerTitle: <Header title="1º pergunta"/>,
              headerStyle: {
                backgroundColor: '#875FC0'
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: null
            }
          }
        />
        <Stack.Screen
          name="Congratulation"
          component={Congratulation}
          options={
            {
              headerTitle: <Header title="Parabéns"/>,
              headerStyle: {
                backgroundColor: '#875FC0'
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: null
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;