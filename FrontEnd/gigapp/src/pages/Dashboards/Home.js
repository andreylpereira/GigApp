import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View,  TouchableOpacity, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../context/auth';

const Home = () => {
  const {user} = useAuth();
  console.log(user);


const Home = ({navigation}) => {


  if (user.provider) {
    return (
      <>
        <StatusBar barStyle="dark-content" hidden={true} />
        <View style={css.container}>
          <View style={css.containerMap}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={css.map}
              customMapStyle={mapLightStyle}
              region={{
                latitude: -27.601728,
                longitude: -48.56,
                latitudeDelta: 0.21,
                longitudeDelta: 0.042,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: -27.601728,
                  longitude: -48.525906,
                }}
                image={require('../../assets/maps/band.png')}
                title="teste"
                description="Teste">
                <MapView.Callout tooltip>
                  <View>
                    <View style={css.bubble}>
                      <View style={css.gridColunm}>
                        <View style={{alignSelf: 'center', marginBottom: 5}}>
                          <View style={css.gridRow}>
                            <Text style={css.mapTextTittle}>Dazaranha</Text>
                            <Text style={css.note}>10,0</Text>
                            <Icon
                              name="star"
                              color={'#FCC51C'}
                              size={12.5}
                              style={{
                                opacity: 0.5,
                                paddingTop: 3,
                                paddingLeft: 1,
                              }}
                            />
                          </View>
                        </View>
                        <View style={css.gridRow}>
                          <Text
                            style={{
                              height: 90,
                              width: 80,
                              marginTop: -20,
                              marginRight: -15,
                              borderRadius: 15,
                            }}>
                            <Image
                              style={css.image}
                              resizeMode="cover"
                              source={require('../../assets/fotos/redlights.jpg')}
                            />
                          </Text>

const eventos_mock = [
  {
    id: 1,
    titulo: 'Show do Daza',
    estabelecimento: 'John Bull',
    data: '24/10/1950',
    descricao: 'das dasd asd',
    banda1: 'faf a2',
    banda2: 'd gsgs',
  },
  {
    id: 2,
    titulo: '142131 asda',
    estabelecimento: ' asd22',
    data: '25/10/1950',
    descricao: ' gdfgdf',
    banda1: ' dfgd2',
    banda2: ' sdasd',
  },
  {
    id: 3,
    titulo: 'Teste2',
    estabelecimento: 'Celulsdfsda',
    data: '26/10/1950',
    descricao: 'Último shsdfsdfsdw do Strokes nessa bagaça teste',
    banda1: 'Strokdsfsdfes',
    banda2: 'AfdsfsdfM',
  },
  {
    id: 4,
    titulo: 'teste4',
    estabelecimento: 'Celula',
    data: '27/10/1950',
    descricao: 'Úgfgfça',
    banda1: 'Stroke331s',
    banda2: 'AM2131',
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

      </>
    );
  }
  if (!user.provider) {
    return (
      <>
        <StatusBar barStyle="dark-content" hidden={true} />
        <View style={css.container}>
          <View style={css.containerMap}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={css.map}
              customMapStyle={mapLightStyle}
              region={{
                latitude: -27.601728,
                longitude: -48.56,
                latitudeDelta: 0.21,
                longitudeDelta: 0.042,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: -27.600711,
                  longitude: -48.501234,
                }}
                image={require('../../assets/maps/drink.png')}
                title="teste"
                description="Teste">
                <MapView.Callout tooltip>
                  <View>
                    <View style={css.bubble}>
                      <View style={css.gridColunm}>
                        <View style={{alignSelf: 'center', marginBottom: 5}}>
                          <View style={css.gridRow}>
                            <Text style={css.mapTextTittle}>Chopp do Gus</Text>
                            <Text style={css.note}>10,0</Text>
                            <Icon
                              name="star"
                              color={'#FCC51C'}
                              size={12.5}
                              style={{
                                opacity: 0.5,
                                paddingTop: 3,
                                paddingLeft: 1,
                              }}
                            />
                          </View>
                        </View>
                        <View style={css.gridRow}>
                          <Text
                            style={{
                              height: 90,
                              width: 80,
                              marginTop: -20,
                              marginRight: -15,
                              borderRadius: 15,
                            }}>
                            <Image
                              style={css.image}
                              resizeMode="cover"
                              source={require('../../assets/fotos/underdogs.jpg')}
                            />
                          </Text>

                          <View style={css.gridColunm}>
                            <Text
                              multimultiline={true}
                              style={css.mapTextDescription}>
                              R. Sérgio Rogerio Beims, 89 - Santa Monica,
                              Florianópolis - SC, 88035-210
                            </Text>
                            <Text
                              multimultiline={true}
                              style={css.mapTextPhone}>
                              Tel: 99482-0120
                            </Text>
                          </View>
                        </View>
                        {/* <View style={(css.gridRow, {alignSelf: 'center'})}>
                          <Text style={css.mapTextDetails} onPress={() => navigation.navigate('Perfil')}>Ver mais</Text>

                                  <View style={(css.gridRow, {alignSelf: 'center'})}>
                      </View> */}
                      </View>
                    </View>
                    <View style={css.arrowBorder} />
                    <View style={css.arrow} />
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            </MapView>

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
