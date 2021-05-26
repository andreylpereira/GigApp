import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const SelecaoBanda = ({navigation}) => {
  const [bandas1] = useState(['Selecione a banda 1','Barões da Pisadinha', 'Dazaranha', 'Tchê garotos']);
  const [bandaSelecionada1, setBandaSelecionada1] = useState([]);
  const [bandas2] = useState(['Selecione a banda 2','Barões da Pisadinha', 'Dazaranha', 'Tchê garotos']);
  const [bandaSelecionada2, setBandaSelecionada2] = useState([]);


  const selecionarBandas = async () => {
    if (bandaSelecionada1 && bandaSelecionada2) {
      try {
        // const response = await api.post('/novasTarefas', { "nome": nomeLista, "descricao": descricaoLista, "data": dataLista });
        // console.log(JSON.stringify(response.data));
        
        console.log('Banda 1:' + ' ' + bandaSelecionada1);
        console.log('Banda 2:' + ' ' + bandaSelecionada2);
      } catch (error) {
        console.log('DEU RUIM' + error);
      }
    } else {
      console.log('Vazio');
    }
    Keyboard.dismiss();
    navigation.goBack();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <View style={css.container}>

        <Text style={css.tittle}>Selecione a banda nº 1</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontSize: 15}}
            selectedValue={bandaSelecionada1}
            onValueChange={(itemValue, itemIndex) =>
              setBandaSelecionada1(itemValue)
            }>
            {bandas1.map((itemValue, itemIndex) => {
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
        <Text></Text>
        <Text style={css.tittle}>Selecione a banda nº 2</Text>
        <View style={css.input}>
          <Picker
            style={{marginTop: -15, fontSize: 15}}
            selectedValue={bandaSelecionada2}
            onValueChange={(itemValue, itemIndex) =>
              setBandaSelecionada2(itemValue)
            }>
            {bandas2.map((itemValue, itemIndex) => {
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
          onPress={() => selecionarBandas()}>
          <Text style={css.buttonText}>Selecionar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
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
  }
});

export default SelecaoBanda;