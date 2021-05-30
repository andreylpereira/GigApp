import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View,  TouchableOpacity, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../context/auth';


const Home = ({navigation}) => {

  const eventos_mock = [
    {
      id: 1,
      titulo: 'Show do Daza',
      estabelecimento: 'John Bull',
      data: '30/05/2021',
      descricao: 'Show de aniversario do dazaranha, entrada em dobro',
      banda1: 'Dazaranha',
      banda2: 'Amigos do Daza',
    },
    {
      id: 2,
      titulo: 'Show do John Bala Jones',
      estabelecimento: 'Chopp do Gus',
      data: '30/05/2021',
      descricao: 'Chop em dobro',
      banda1: ' John Bala Jones',
      banda2: 'Outros',
    },
    {
      id: 3,
      titulo: 'Teste2',
      estabelecimento: 'Chopp do Gus',
      data: '30/05/2021',
      descricao: 'Chop em dobro com classicos do rock',
      banda1: 'The Beatles',
      banda2: 'Oasis',
    },
    {
      id: 4,
      titulo: 'Show indie',
      estabelecimento: 'Celula',
      data: '30/05/2021',
      descricao: 'Show indie com AM e Strokes',
      banda1: 'Artic Monkeys',
      banda2: 'The Strokes',
    },
  ];
  
const [eventos, setEventos] = useState(eventos_mock);
const {user} = useAuth();

if (!user.provider) {
  const EventoBanda = ({item}) => {
    return (
      <View>
        <View style={css.icons}>
        <View style={css.iconMaps2}>
            <Icon
              name={'locate'}
              size={16}
              color={'#FF6400'}
              onPress={() => navigation.navigate('Maps')}
            />
          </View>
        </View>
        <View style={css.card}>
          <View style={css.content}>
            <View style={css.rows}>
              <Text style={css.label}>Evento: </Text>
              <Text style={css.tittle}>{item.titulo}</Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Estabelecimento: </Text>
              <Text
                multimultiline={true}
                numberOfLines={2}
                style={css.tittle}>
                {item.estabelecimento}
              </Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Data: </Text>
              <Text style={css.description}>{item.data}</Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Descrição: </Text>
              <Text
                style={css.description}
                multimultiline={true}
                numberOfLines={2}>
                {item.descricao}
              </Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Bandas: </Text>
              <Text
                multimultiline={true}
                numberOfLines={2}
                style={css.description}>
                {item.banda1}, {item.banda2}
              </Text>
            </View>
          </View>
          <View style={css.buttons}>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('SelecaoBanda')}>
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
          data={eventos_mock}
          renderItem={EventoBanda}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </View>
  );
}
if (user.provider) {
  const EventoEstabelecimento = ({item}) => {
    return (
      <View>
        <View style={css.icons}>
        <View style={css.iconMaps2}>
            <Icon
              name={'locate'}
              size={16}
              color={'#FF6400'}
              onPress={() => navigation.navigate('Maps')}
            />
          </View>
        </View>
        <View style={css.card}>
          <View style={css.content}>
            <View style={css.rows}>
              <Text style={css.label}>Evento: </Text>
              <Text style={css.tittle}>{item.titulo}</Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Estabelecimento: </Text>
              <Text
                multimultiline={true}
                numberOfLines={2}
                style={css.tittle}>
                {item.estabelecimento}
              </Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Data: </Text>
              <Text style={css.description}>{item.data}</Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Descrição: </Text>
              <Text
                style={css.description}
                multimultiline={true}
                numberOfLines={2}>
                {item.descricao}
              </Text>
            </View>
            <View style={css.rows}>
              <Text style={css.label}>Bandas: </Text>
              <Text
                multimultiline={true}
                numberOfLines={2}
                style={css.description}>
                {item.banda1}, {item.banda2}
              </Text>
            </View>
          </View>
          <View style={css.buttons}>
            {/* <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('SelecaoBanda')}>
              <Text style={css.buttonText}>Selecionar bandas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.navigate('Avaliacao')}>
              <Text style={css.buttonText}>Avaliar bandas</Text>
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
          data={eventos_mock}
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
