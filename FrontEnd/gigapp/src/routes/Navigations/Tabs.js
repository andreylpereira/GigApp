import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useAuth} from '../../context/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Dashboards/Home';
import Evento from '../../pages/Dashboards/Evento';
import CadastroEvento from '../../pages/Register/CadastroEvento';

const Tab = createBottomTabNavigator();

function Tabs() {
  const {user} = useAuth();

  if (!user.provider) {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#CDCCCE',
          showLabel: false,
          style: {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopColor: '#CDCCCE',
            borderBottomColor: '#131313',
            backgroundColor: '#131313',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="home-outline"
                color={color}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Evento"
          component={Evento}
          options={{
            tabBarLabel: 'Evento',
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="calendar-outline"
                color={color}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  if (user.provider) {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#CDCCCE',
          showLabel: false,
          style: {
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderTopColor: '#CDCCCE',
            borderBottomColor: '#131313',
            backgroundColor: '#131313',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="home-outline"
                color={color}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Adicionar Evento"
          component={CadastroEvento}
          options={{
            tabBarLabel: 'Adicionar Evento',
            tabBarIcon: ({focused, size}) => (
              <Icon
                style={css.iconAdd}
                name="add-circle-sharp"
                color={focused ? '#131313' : '#FF7306'}
                size={45}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Evento"
          component={Evento}
          options={{
            tabBarLabel: 'Evento',
            tabBarIcon: ({color, focused}) => (
              <Icon
                name="calendar-outline"
                color={color}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <View>
        <View style={css.error}>
          <ActivityIndicator size="large" color="#FF7306" />
        </View>
      </View>
    );
  }
}

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
    color: '#FF7306',
  },
});

export default Tabs;
