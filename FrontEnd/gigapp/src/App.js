import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, View, Text, StyleSheet} from 'react-native';
import {AuthProvider} from './context/auth';

import Routes from './routes/index';

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />

        <NavigationContainer>
        <AuthProvider>
          <Routes />
          </AuthProvider>
        </NavigationContainer>
      
    </>
  );
};

const css = StyleSheet.create({});

export default App;
