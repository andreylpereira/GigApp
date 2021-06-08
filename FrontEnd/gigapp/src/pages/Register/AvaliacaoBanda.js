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
      image: 'https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.6435-9/67085468_447690615812843_5370234486225108992_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=V11hCKO4aUEAX8Smios&_nc_ht=scontent.fbnu4-1.fna&oh=08d20d3c827f8f3b410fa598b82752f8&oe=60DBD764',
    },
    {
      id: 2,
      nome: 'Arctic Monkeys',
      estilo: 'indie',
      nota: '9,0',
      image: 'https://lh3.googleusercontent.com/QeW037SIb2_TdDiTyj25_yRHWMMKVWM4_sIVPkehyP9d7bnrdnrx9e89Fk6pKiUTjTk',
    },
    {
      id: 3,
      nome: 'The Queens of Stone Age',
      estilo: 'rock',
      nota: '8,0',
      image: 'http://crashtv.com.br/site/wp-content/uploads/zf-hvvgc.jpg',
    },
    {
      id: 4,
      nome: 'Massacration',
      estilo: 'Metal of Gods',
      nota: '7,0',
      image: 'https://scontent.fbnu4-1.fna.fbcdn.net/v/t31.18172-8/12828527_1072891716064981_1858112013587377217_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=2JmnBrHotigAX8qnNAp&_nc_ht=scontent.fbnu4-1.fna&oh=c00886c9fe0d882a0b81c4a1ee262e26&oe=60DC29A5',
    },
    {
      id: 5,
      nome: 'molejão',
      estilo: 'pagode',
      nota: '6,0',
      image: 'https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.6435-9/70426955_116623033058590_1922075543738515456_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=973b4a&_nc_ohc=6J7RXh3GnOIAX_DkGSi&_nc_ht=scontent.fbnu4-1.fna&oh=3fe453cc176796f9e9e06415d6437fae&oe=60DDEE39',
    },
    {
      id: 6,
      nome: 'Garotos de ouro',
      estilo: 'Forró',
      nota: '5,0',
      image: 'https://miro.medium.com/max/1232/1*6Ba5uj_WqMYePYYXENN8XA.jpeg',
    },
    {
      id: 7,
      nome: 'Garotos de ouro1',
      estilo: 'Forró',
      nota: '5,0',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIvZUsKDcRWcAKzteqsooUPNSloduC2ox7PmeFNPw3aT4i1-C',
    },
    {
      id: 8,
      nome: 'Garotos de ouro2',
      estilo: 'Forró',
      nota: '5,0',
      image: 'https://scontent.fbnu4-1.fna.fbcdn.net/v/t1.18169-9/11071540_822933687797692_6461748506729387990_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=SZOxkh9bhgUAX8AUFZl&_nc_ht=scontent.fbnu4-1.fna&oh=53fefede97dd5030417153f98f8b7c4e&oe=60DC8764',
    },
  ];

  const { user, token } = useAuth();

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
                    source={{uri: item.image}}
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
              // add  o ",{item}" após navigate('Avaliacao') 
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
    fontSize: 12,
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
