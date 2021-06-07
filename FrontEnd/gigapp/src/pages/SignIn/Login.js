import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';

import {useAuth} from '../../context/auth';

const Login = ({navigation}) => {
  const {signed, user, signIn, signOut} = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //console.log(signed);
  //console.log(user);
  //signOut();

  async function handleSignIn() {
    if (email == null || password == null) {
      Alert.alert(
        'E-mail e/ou password em branco(s) !',
        'Favor preencher todos os campos.',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );
    } else {
      try {
        signIn(email, password);
      } catch (error) {
        console.log('deu ruim ', error);
      }
    }
  }

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 220, y: 220}));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 110,
        duration: 0.5,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 110,
        duration: 0.5,
        useNativeDriver: false,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 220,
        duration: 0.5,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 220,
        duration: 0.5,
        useNativeDriver: false,
      }),
    ]).start();
  }

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={true} />
      <KeyboardAvoidingView style={css.container}>
        <View>
          <Animated.Image
            style={{width: logo.x, height: logo.y}}
            source={require('../../assets/imagens/logo.png')}
          />

          <Text style={css.subtitle}>GigApp</Text>
        </View>
        <Animated.View
          style={{
            opacity: opacity,
            transform: [{translateY: offset.y}],
          }}>
          <TextInput
            style={css.input}
            placeholder="E-mail"
            onChangeText={email => setEmail(email)}
            textContentType={'emailAddress'}
            autoCorrect={false}
          />
          <TextInput
            style={css.input}
            placeholder="Senha"
            onChangeText={password => setPassword(password)}
            textContentType={'password'}
            secureTextEntry={true}
            autoCorrect={false}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={css.cadastrar}>Cadastrar-se</Text>
          </TouchableOpacity>

          <TouchableOpacity style={css.button} onPress={handleSignIn}>
            <Text style={css.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </Animated.View>
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
    width: 270,
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
    width: 320, //300?
    height: 40,
    borderRadius: 21,
    borderColor: '#000',
    padding: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
  },
  cadastrar: {
    textAlign: 'center',
    color: '#CDCCCE',
    fontFamily: 'Nunito-Bold',
    marginTop: 5,
    fontSize: 16,
  },
  logo: {
    width: 220,
    borderWidth: 3,
    borderRadius: 180,
    borderColor: '#CDCCCE',
    backgroundColor: '#FF6400',
  },
  subtitle: {
    marginBottom: 10,
    color: '#CDCCCE',
    fontSize: 38,
    fontFamily: 'DancingScript-Bold',
    alignSelf: 'center',
  },
});

export default Login;
