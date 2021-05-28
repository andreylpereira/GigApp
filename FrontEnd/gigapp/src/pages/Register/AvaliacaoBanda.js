import React, {useState} from 'react';
import {useAuth} from '../../context/auth';
import {FlatList} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AvaliacaoBanda = ({navigation}) => {
  const eventos_mock = [
    {
      id: 1,
      nome: 'The Strokes',
      estilo: 'indie-rock',
      nota: '10,0',
      image: "'../../assets/fotos/redlights.jpg'",
    },
    {
      id: 2,
      nome: 'Arctic Monkeys',
      estilo: 'indie',
      nota: '9,0',
      image: "'../../assets/fotos/redlights.jpg'",
    },
    {
      id: 3,
      nome: 'The Queens of Stone Age',
      estilo: 'rock',
      nota: '8,0',
      image: "'../../assets/fotos/redlights.jpg'",
    },
    {
      id: 4,
      nome: 'Massacration',
      estilo: 'Metal of Gods',
      nota: '7,0',
      image: "'../../assets/fotos/redlights.jpg'",
    },
  ];

  const {user} = useAuth();

  const AvaliarBanda = ({item}) => {
    return (
      <View>
        <View style={css.card}>
          <View>
            <View style={css.content}>
              <View>
                <View style={{alignSelf: 'center'}}>
                  <Image
                    style={css.image}
                    resizeMode="cover"
                    source={require('../../assets/fotos/redlights.jpg')}
                  />
                </View>
                <View style={{alignSelf: 'center'}}>
                  <Text style={css.tittle}>{item.nome}</Text>
                  <Text
                    multimultiline={true}
                    numberOfLines={2}
                    style={css.subtittle}>
                    {item.estilo}
                  </Text>
                  <View style={css.starLine}>
                    <Text style={css.starLineText}>{item.nota}</Text>
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
          </View>
          <View style={css.buttons}>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('Avaliacao')}>
              <Text style={css.buttonText}>Avaliar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={css.containerList}>
      <View style={css.scroll}>
        <FlatList
          removeClippedSubviews={false}
          data={eventos_mock}
          renderItem={AvaliarBanda}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    width: '75%',
    elevation: 7.5,
    borderRadius: 7.5,
  },
  content: {
    padding: 15,
    paddingBottom: 0,
  },
  tittle: {
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
    color: '#131313',
    textAlign: 'center',
    fontSize: 15,
  },
  subtittle: {
    fontFamily: 'Nunito-Black',
    color: '#A1A1A1',
    textAlign: 'center',
    fontSize: 13,
  },
  button: {
    borderWidth: 2,
    borderRadius: 21,
    borderColor: '#FF7306',
    width: '40%',
    height: 25,
    backgroundColor: '#FF6400',
    alignSelf: 'center',
    margin: 10,
    marginTop: 2.5,
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'Nunito-Black',
  },
  buttons: {
    alignSelf: 'center',
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerStar: {
    display: 'flex',
    flexDirection: 'row',
  },
  star: {
    marginLeft: 3,
    marginTop: 1,
    marginBottom: 5,
    opacity: 0.5,
  },
  starLine: {
    alignSelf: 'center',
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  starLineText: {
    textAlign: 'center',
    color: '#A1A1A1',
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
  },
  row: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerList: {
    width: '100%',
    height: '100%',
  },
  scroll: {
    marginTop: '8%',
    height: '90%',
    width: '100%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  }
});

export default AvaliacaoBanda;
