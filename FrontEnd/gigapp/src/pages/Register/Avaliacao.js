import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard
} from 'react-native';

const Avaliacao = ({navigation}) => {

  const [banda1] = useState(['selecione a nota','10,00','9,00','8,00','7,00','6,00','5,00','4,00', '3,00','2,00','1,00','0,00']);
  const [notaBanda1, setNotaBanda1] = useState([]);

  const [banda2] = useState(['selecione a nota','10,00','9,00','8,00','7,00','6,00','5,00','4,00', '3,00','2,00','1,00','0,00']);
  const [notaBanda2, setNotaBanda2] = useState([]);

  const [evento] = useState(['selecione a nota','10,00','9,00','8,00','7,00','6,00','5,00','4,00', '3,00','2,00','1,00','0,00']);
  const [notaEvento, setNotaEvento] = useState([]);


  const avaliarBandas = async () => {
    if (notaBanda1 && notaBanda2) {
      try {
        // const response = await api.post('/novasTarefas', { "nome": nomeLista, "descricao": descricaoLista, "data": dataLista });
        // console.log(JSON.stringify(response.data));
        
        console.log('Nota Banda 1:' + ' ' + notaBanda1);
        console.log('Nota Banda 2:' + ' ' + notaBanda2);
        

      } catch (error) {
        console.log('DEU RUIM' + error);
      }
    } else {
      console.log('Vazio');
    }
    Keyboard.dismiss();
    navigation.goBack();
  };

  const avaliarEvento = async () => {
    if (notaEvento) {
      try {
        // const response = await api.post('/novasTarefas', { "nome": nomeLista, "descricao": descricaoLista, "data": dataLista });
        // console.log(JSON.stringify(response.data));
        console.log('Nota Evento:' + ' ' + notaEvento);

      } catch (error) {
        console.log('DEU RUIM' + error);
      }
    } else {
      console.log('Vazio');
    }
    Keyboard.dismiss();
    navigation.goBack();
  };




function Perfils(perfil) {
  if (perfil == 'Banda') {
    return (
      <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

        <Text style={css.tittle}>Avalie o estabelecimento</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontSize: 15}}
            selectedValue={notaEvento}
            onValueChange={(itemValue, itemIndex) =>
              setNotaEvento(itemValue)
            }>
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
        <TouchableOpacity
          style={css.button}
          onPress={() => avaliarEvento()}>
          <Text style={css.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </>
    );
  }
  if (perfil == 'Estabelecimento') {
    return (
      <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

        <Text style={css.tittle}>Avalie a banda nº 1</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontSize: 15}}
            selectedValue={banda1}
            onValueChange={(itemValue, itemIndex) =>
              setNotaBanda1(itemValue)
            }>
            {banda1.map((itemValue, itemIndex) => {
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

        <Text style={css.tittle}>Avalie a banda nº 2</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontSize: 15}}
            selectedValue={notaBanda2}
            onValueChange={(itemValue, itemIndex) =>
              setNotaBanda2(itemValue)
            }>
            {banda2.map((itemValue, itemIndex) => {
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
        <TouchableOpacity
          style={css.button}
          onPress={() => avaliarBandas()}>
          <Text style={css.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </>
    );
  } else {
    return (
      <View>
        <Text style={css.error}>Error ao carregar</Text>
      </View>
    );
  }
}
return <>{Perfils('Estabelecimento')}</>;
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
    marginBottom: 5
  },
  error: {
    marginTop: '70%',
    textAlign: 'center',
  },
});

export default Avaliacao;