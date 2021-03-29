import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Congratulation from './Pages/Congratulation';
import Students from './Pages/NameStudents';

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
                backgroundColor: '#ad573f'
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
          }
          initialParams={{ index: 0 }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={
            {
              headerTitle: <Header title="Citoplasma e Respiração Celular"/>,
              headerStyle: {
                backgroundColor: '#ad573f'
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
                backgroundColor: '#ad573f'
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
          name="Students"
          component={Students}
          options={
            {
              headerTitle: <Header title="Nome dos estudantes"/>,
              headerStyle: {
                backgroundColor: '#ad573f'
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;