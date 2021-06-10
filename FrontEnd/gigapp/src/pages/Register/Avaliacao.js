import React, {useState} from 'react';
import {useAuth} from '../../context/auth';
import {Picker} from '@react-native-picker/picker';
import services from '../../services/services';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const Avaliacao = ({navigation}) => {
  const { user, token } = useAuth();

  const [evento] = useState([
    'selecione a nota',
    '10,00',
    '9,00',
    '8,00',
    '7,00',
    '6,00',
    '5,00',
    '4,00',
    '3,00',
    '2,00',
    '1,00',
    '0,00',
  ]);
  const [notaEvento, setNotaEvento] = useState([]);

function avaliarEvento() {
    // if (notaEvento) {
    //   try {
        // const response = await api.post('/novasTarefas', { "nome": nomeLista, "descricao": descricaoLista, "data": dataLista });
        // console.log(JSON.stringify(response.data));
        console.log('Nota:' + ' ' + notaEvento);
    //   } catch (error) {
    //     console.log('DEU RUIM' + error);
    //   }
    // } else {
    //   console.log('Vazio');
    // }
    Keyboard.dismiss();
    navigation.goBack();
  };


//====================================//

  

  //funções base para avaliar Bands
  async function handleRatingBands(id, token) {
    console.log(id);
    try {
      await services.ratingBands(id, token)

    } catch (error) {
      console.log('deu ruim ', error);
    }
  }


  //funções base para avaliar Venues
  async function handleRatingVenues(id, token) {
    console.log(id);
    try {
      await services.ratingVenues(id, token)

    } catch (error) {
      console.log('deu ruim ', error);
    }
  }


//===============================================//  

  if(!user.provider) {
    return (
      <>
        <StatusBar barStyle="dark-content" hidden={true} />
        <View style={css.container}>
          <Text style={css.tittle}>Avalie o estabelecimento</Text>
          <View style={css.input}>
            <Picker
              style={{marginTop: -15, fontSize: 15}}
              selectedValue={notaEvento}
              onValueChange={(itemValue, itemIndex) => setNotaEvento(itemValue)}>
              {evento.map((itemValue, itemIndex) => {
                return (
                  <Picker.Item
                    label={itemValue}
                    value={itemValue}
                    key={itemIndex}
                  />
                );
              })}
            </Picker>
          </View>
          <TouchableOpacity style={css.button} onPress={() => avaliarEvento()}>
            <Text style={css.buttonText}>Avaliar</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  if(user.provider) {
    return (
      <>
        <StatusBar barStyle="dark-content" hidden={true} />
        <View style={css.container}>
          <Text style={css.tittle}>Avalie a banda</Text>
          <View style={css.input}>
            <Picker
              style={{marginTop: -15, fontSize: 15}}
              selectedValue={notaEvento}
              onValueChange={(itemValue, itemIndex) => setNotaEvento(itemValue)}>
              {evento.map((itemValue, itemIndex) => {
                return (
                  <Picker.Item
                    label={itemValue}
                    value={itemValue}
                    key={itemIndex}
                  />
                );
              })}
            </Picker>
          </View>
          <TouchableOpacity style={css.button} onPress={avaliarEvento()}>
            <Text style={css.buttonText}>Avaliar</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

const css = StyleSheet.create({
  container: {
    // backgroundColor: '#131313',
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
    marginTop: 30,
    elevation: 9.5,
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
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    elevation: 9.5,
  },
  tittle: {
    fontFamily: 'Nunito-Black',
    fontSize: 18,
    marginBottom: 10,
  },
  error: {
    marginTop: '70%',
    textAlign: 'center',
  },
});

export default Avaliacao;
