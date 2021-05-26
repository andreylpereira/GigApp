import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';


import Drawers from './Navigations/Drawers';
import Avaliacao from '../pages/Register/Avaliacao';
import SelecaoBanda from '../pages/Register/SelecaoBanda';
import EditarEvento from '../pages/Register/EditarEvento';



import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Drawers}
                  options={({navigation}) => ({
                    headerLeft: () => (
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginLeft: 1,
                          marginTop: 5,
                        }}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                          }>
                          <Icon name={'menu'} size={40} color={'white'} />
                        </TouchableOpacity>
                      </View>
                    ),
                    headerTitle: () => (
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'DancingScript-Bold',
                            fontSize: 30,
                          }}>
                          GigApp
                        </Text>
                        <Icon
                          name={'musical-notes'}
                          size={32}
                          color={'#FFF'}
                          style={css.imageLogo}
                        />
                      </View>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                      backgroundColor: '#FF7306',
                      borderBottomWidth: 1,
                      borderBottomColor: '#CDCCCE',
                    },
                  })}/>
        <AppStack.Screen name="Avaliacao"
          component={Avaliacao}
          options={{
            title: 'Avaliação',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}/>
        <AppStack.Screen name="SelecaoBanda"
          component={SelecaoBanda}
          options={{
            title: 'Seleção de Bandas',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}/>
        <AppStack.Screen name="EditarEvento"
          component={EditarEvento}
          options={{
            title: 'Editar Evento',
            headerTitleStyle: {fontFamily: 'Nunito-Bold'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#FF7306',
              borderBottomWidth: 1,
              borderBottomColor: '#CDCCCE',
            },
          }}/>
    </AppStack.Navigator>
)

const css = StyleSheet.create({
    imageLogo: {
      marginTop: 5,
      marginLeft: 5,
      borderWidth: 2,
      borderBottomColor: '#131313',
      borderRadius: 180,
      backgroundColor: '#131313',
    },
    personLogo: {
      marginTop: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#CDCCCE',
      display: 'flex',
      flexDirection: 'row',
    },
    personDescription: {
      marginLeft: 10,
      marginTop: 8,
      color: '#fff',
    },
    personName: {
      color: '#ffffff',
      fontSize: 15,
      fontFamily: 'Nunito-Black',
    },
    personType: {
      color: '#CDCCCE',
      fontSize: 13,
      fontFamily: 'Nunito-Bold',
      marginBottom: 2.5,
    },
    star: {
      marginLeft: 3,
      marginTop: 1,
      marginBottom: 5,
      opacity: 0.5,
    },
    starLine: {
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'row',
    },
    starLineText: {
      color: '#ffffff',
      fontSize: 11,
      fontFamily: 'Nunito-Regular',
      opacity: 0.5,
    },
    error: {
      marginTop: '70%',
      textAlign: 'center',
    },
    image: {
      width: 55,
      height: 55,
      borderWidth: 1,
      borderRadius: 100,
      marginLeft: 10,
      marginTop: 10,
    },
    buttonSair: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#DDDDDD',
      width: '92.5%',
      marginLeft: '4%',
      padding: 10,
      borderRadius: 5,
      marginTop: 4.0,
    },
    buttonText: {
      fontSize: 15,
      fontFamily: 'Nunito-Black',
      marginLeft: 20,
      marginTop: 3.5,
      color: '#FF7306'
    }
  });

export default AppRoutes;