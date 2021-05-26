import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

const CadastroEstabelecimento = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <KeyboardAvoidingView style={css.container}>
        <TextInput style={css.input} placeholder="Nome" autoCorrect={false} />
        <TextInput style={css.input} placeholder="E-mail" autoCorrect={false} />
        <TextInput
          style={css.input}
          placeholder="Senha"
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <TextInput
          style={css.input}
          placeholder="Confirmar senha"
          textContentType={'password'}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <TextInput
          style={css.input}
          placeholder="Telefone"
          autoCorrect={false}
        />
        <TextInput
          style={css.input}
          placeholder="Endereço"
          autoCorrect={false}
        />
        <TextInput style={css.input} placeholder="Cidade" autoCorrect={false} />
        <TextInput style={css.input} placeholder="Estado" autoCorrect={false} />

        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={css.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    borderWidth: 2,
    borderRadius: 21,
    borderColor: '#FF7306',
    width: '70%',
    height: 45,
    backgroundColor: '#FF6400',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    fontSize: 21,
    fontFamily: 'Nunito-Black',
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    color: 'black',
    opacity: 0.95,
    width: '90%',
    height: 40,
    borderRadius: 21,
    borderColor: '#000',
    padding: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
  },
});

export default CadastroEstabelecimento;
