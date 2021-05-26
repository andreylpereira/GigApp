import React from 'react';
import {useAuth} from '../../contexts/auth';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Agenda from '../../pages/Dashboards/Agenda';
import EditarPerfil from '../../pages/Dashboards/EditarPerfil';
import Sobre from '../../pages/Dashboards/Sobre';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

function Drawers() {
  const {user} = useAuth();

  function Content({...props}) {
    function LogOut() {
      props.navigation.navigate('Login');
    }
    if (user.perfil == 'banda') {
      return (
        <View>
          <View>
            <View style={css.personLogo}>
              {/* <Image
                style={css.image}
                source={require('../assets/fotos/dazaranha.jpg')}
              /> */}
              <View style={css.personDescription}>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personName}>
                  Dazaranha
                </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personType}>
                  Banda
                </Text>
                <View style={css.starLine}>
                  <Text style={css.starLineText}>10,0</Text>
                  <Icon
                    name="star"
                    color={'#FCC51C'}
                    size={11}
                    style={css.star}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <DrawerItemList {...props} />
          </View>
          <TouchableOpacity onPress={LogOut}>
            <View style={css.buttonSair}>
              <Icon name={'log-out'} size={28} color={'#FF7306'} />
              <Text style={css.buttonText}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (user.perfil == 'estabelecimento') {
      return (
        <View>
          <View>
            <View style={css.personLogo}>
              {/* <Image
                style={css.image}
                source={require('../assets/fotos/chopp.jpg')}
              /> */}
              {/* <Icon
                     name="person-circle"
                     color={'#FF7306'}
                     size={75}
                     style={{marginLeft: 5}}
                   /> */}
              <View style={css.personDescription}>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personName}>
                  Chopp do Gus
                </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={1}
                  style={css.personType}>
                  Estabelecimento
                </Text>
                <View style={css.starLine}>
                  <Text style={css.starLineText}>10,0</Text>
                  <Icon
                    name="star"
                    color={'#FCC51C'}
                    size={11}
                    style={css.star}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <DrawerItemList {...props} />
          </View>
          <TouchableOpacity onPress={LogOut}>
            <View style={css.buttonSair}>
              <Icon name={'log-out'} size={28} color={'#FF7306'} />
              <Text style={css.buttonText}>Sair</Text>
            </View>
          </TouchableOpacity>
        </View>
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

  return (
    <Drawer.Navigator
      drawerContent={Content}
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#131313',
      }}
      drawerContentOptions={{
        activeTintColor: '#DDDDDD',
        inactiveTintColor: '#FF7306',
        activeBackgroundColor: '#FF7306',
        inactiveBackgroundColor: '#DDDDDD',
        labelStyle: {fontSize: 15, fontFamily: 'Nunito-Black', marginLeft: -10},
      }}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        style={css.styleDrawers}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-sharp"
              size={focused ? 32 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Agenda"
        component={Agenda}
        options={{
          title: 'Minha Agenda',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="calendar"
              size={focused ? 32 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Editar Perfil"
        component={EditarPerfil}
        options={{
          title: 'Editar Perfil',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="person-sharp"
              size={focused ? 32 : 28}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre',
          drawerIcon: ({focused, size}) => (
            <Icon
              name="information-circle"
              size={focused ? 34 : 30}
              color={focused ? '#DDDDDD' : '#FF7306'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
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

export default Drawers;