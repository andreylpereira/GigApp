import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Sobre = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>
        <Text style={css.title}>Sobre o App:</Text>
        <View style={css.card}>
          <Text style={css.text}>
            App desenvolvido por alunos no curso de Análise e Desenvolvimento de
            Sistema do Senai/SC com o objetivo de por em pratica o conhecimento
            desenvolvido durante o semestre através de uma situação de
            aprendizagem. A aplicação têm como objetivo diminuir barreiras
            conectando donos de estabelecimentos e músicos.
          </Text>
          <Text />
          <Text style={(css.text, {fontFamily: 'Nunito-Bold'})}>
            Desenvolvido por: Andrey, Marzeu, Raphael e Renan.
          </Text>
        </View>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 25,
    fontFamily: 'Nunito-Bold',
    fontSize: 21,
    elevation: 10,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '95%',
    padding: 10,
    elevation: 9.5,
    borderRadius: 7.5,
    textAlign: 'left',
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
});

export default Sobre;
