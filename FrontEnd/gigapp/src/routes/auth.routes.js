import React from 'react';
import Login from '../pages/SignIn/Login';
import Cadastro from '../pages/Register/Cadastro';
import CadastroBanda from '../pages/Register/CadastroBanda';
import CadastroEstabelecimento from '../pages/Register/CadastroEstabelecimento';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="Cadastro"
      component={Cadastro}
      options={{
        headerTitleStyle: {fontFamily: 'Nunito-Bold'},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#FF7306',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCCCE',
        },
      }}
    />
    <AuthStack.Screen
      name="Banda"
      component={CadastroBanda}
      options={{
        headerTitleStyle: {fontFamily: 'Nunito-Bold'},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#FF7306',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCCCE',
        },
      }}
    />
    <AuthStack.Screen
      name="Estabelecimento"
      component={CadastroEstabelecimento}
      options={{
        headerTitleStyle: {fontFamily: 'Nunito-Bold'},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#FF7306',
          borderBottomWidth: 1,
          borderBottomColor: '#CDCCCE',
        },
      }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;