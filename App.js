import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Editar from './src/Editar';
import Listar from './src/listar';

const App = function () {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
          options={{
            title: 'Gerenciamento de Estoque',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} 
        options={{
          title: 'Cadastro de Produtos',
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen name="Editar" component={Editar}
        options={{
          title: 'Editar Produto',
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
        }}
         />
        <Stack.Screen name="Listar" component={Listar}
        options={{
          title: 'Lista de Produtos Cadastrados',
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff'
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;