import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../context/auth';

import services from '../../services/services';

const Home = ({ navigation }) => {

  // const eventos_mock = [
  //   {
  //     id: 1,
  //     titulo: 'Show do Daza',
  //     estabelecimento: 'John Bull',
  //     data: '24/10/1950',
  //     descricao: 'das dasd asd',
  //     banda1: 'faf a2',
  //     banda2: 'd gsgs',
  //   },
  //   {
  //     id: 2,
  //     titulo: '142131 asda',
  //     estabelecimento: ' asd22',
  //     data: '25/10/1950',
  //     descricao: ' gdfgdf',
  //     banda1: ' dfgd2',
  //     banda2: ' sdasd',
  //   },
  //   {
  //     id: 3,
  //     titulo: 'Teste2',
  //     estabelecimento: 'Celulsdfsda',
  //     data: '26/10/1950',
  //     descricao: 'Último shsdfsdfsdw do Strokes nessa bagaça teste',
  //     banda1: 'Strokdsfsdfes',
  //     banda2: 'AfdsfsdfM',
  //   },
  //   {
  //     id: 4,
  //     titulo: 'teste4',
  //     estabelecimento: 'Celula',
  //     data: '27/10/1950',
  //     descricao: 'Úgfgfça',
  //     banda1: 'Stroke331s',
  //     banda2: 'AM2131',
  //   },
  // ];

  const [concerts, setConcerts] = useState();
  const { user } = useAuth();

  useEffect(async () => {
    const concerts = await services.getConcerts();
    setConcerts(concerts);

  }, []);

  //insert band (candidatar-se)
  //async 
  function handleInsert() {
    console.log('banda se candidatou')
    // try {
    //   await services.insertBandsInConcert(id, token)

    // } catch (error) {
    //   console.log('deu ruim ', error);
    // }
    
  }

  //console.log(concerts[0].venue)

  //=============================================

  if (!user.provider) {
    const EventoBanda = ({ item }) => {
      return (
        <View>
          <View style={css.icons}>
            <View style={css.iconMaps2}>
              <Icon
                name={'locate'}
                size={16}
                color={'#FF6400'}
                onPress={() => navigation.navigate('Maps',  item )}
              />
            </View>
          </View>
          <View style={css.card}>
            <View style={css.content}>
              <View style={css.rows}>
                <Text style={css.label}>Evento: </Text>
                <Text style={css.tittle}>{item.name}</Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Estabelecimento: </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={2}
                  style={css.tittle}>
                  {item.venue.name}
                </Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Data: </Text>
                <Text style={css.description}>{item.date}</Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Descrição: </Text>
                <Text
                  style={css.description}
                  multimultiline={true}
                  numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Banda: </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={2}
                  style={css.description}>
                  {/* {item.banda1}, {item.banda2} */}
                </Text>
              </View>
            </View>
            <View style={css.buttons}>
              <TouchableOpacity
                style={css.button}
                onPress={() => handleInsert()}>
                <Text style={css.buttonText}>Candidatar-se</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('Avaliacao')}>
              <Text style={css.buttonText}>Avaliar</Text>
            </TouchableOpacity> */}
            </View>
          </View>
        </View>
      );
    };
    return (
      <View style={css.containerList}>
        <Text style={css.title}>Eventos disponíveis</Text>
        <View style={css.scroll}>
          <FlatList
            removeClippedSubviews={false}
            data={concerts}
            renderItem={EventoBanda}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </View>
    );
  }
  if (user.provider) {
    const EventoEstabelecimento = ({ item }) => {
      return (
        <View>
          <View style={css.icons}>
            <View style={css.iconMaps2}>
              <Icon
                name={'locate'}
                size={16}
                color={'#FF6400'}
                onPress={() => navigation.navigate('Maps',  item )}
              />
            </View>
          </View>
          <View style={css.card}>
            <View style={css.content}>
              <View style={css.rows}>
                <Text style={css.label}>Evento: </Text>
                <Text style={css.tittle}>{item.name}</Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Estabelecimento: </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={2}
                  style={css.tittle}>
                  {item.venue.name}
                </Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Data: </Text>
                <Text style={css.description}>{item.date}</Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Descrição: </Text>
                <Text
                  style={css.description}
                  multimultiline={true}
                  numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
              <View style={css.rows}>
                <Text style={css.label}>Banda: </Text>
                <Text
                  multimultiline={true}
                  numberOfLines={2}
                  style={css.description}>
                  {/* {item.banda1}, {item.banda2} */}
                </Text>
              </View>
            </View>
            <View style={css.buttons}>
              {/* <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('SelecaoBanda')}>
              <Text style={css.buttonText}>Selecionar Banda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('Avaliacao')}>
              <Text style={css.buttonText}>Avaliar Banda</Text>
            </TouchableOpacity>*/}
            </View>
          </View>
        </View>
      );
    };
    return (
      <View style={css.containerList}>
        <Text style={css.title}>Eventos disponíveis</Text>
        <View style={css.scroll}>
          <FlatList
            removeClippedSubviews={false}
            data={concerts}
            renderItem={EventoEstabelecimento}
            keyExtractor={item => item.id}></FlatList>
        </View>
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
};

const css = StyleSheet.create({
  container: {
    marginTop: 100,
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    fontFamily: 'Nunito-Bold',
    fontSize: 21,
    elevation: 7.5,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 15,
    width: '90%',
    elevation: 7.5,
    borderRadius: 7.5,
  },
  content: {
    padding: 10,
    paddingBottom: 0,
  },
  label: {
    fontFamily: 'Nunito-Black',
    paddingRight: 5,
  },
  tittle: {
    fontFamily: 'Nunito-Regular',
    paddingRight: 65,
  },
  description: {
    fontFamily: 'Nunito-Regular',
    paddingRight: 65,
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
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  iconMaps: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 4.5,
    padding: 4,
    paddingLeft: 4,
    elevation: 7.5,
    marginRight: '1%',
  },
  iconMaps2: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 4.5,
    padding: 4,
    paddingLeft: 4,
    elevation: 7.5,
    marginRight: '5%',
  },
  iconEdit: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 4.5,
    padding: 2.5,
    paddingLeft: 4,
    elevation: 7.5,
    marginRight: '1%',
  },
  iconDelete: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 4.5,
    padding: 2.5,
    paddingLeft: 3,
    paddingRight: 3,
    elevation: 7.5,
    marginRight: '5%',
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
  },
  scroll: {
    height: 460,
    width: '97%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 9.5,
    borderColor: '#E1E1E1',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  containerList: {
    width: '100%',
    height: '100%',
  },
  scroll: {
    height: '90%',
    width: '100%',
  },
  error: {
    marginTop: '70%',
    textAlign: 'center',
  },
});

export default Home;