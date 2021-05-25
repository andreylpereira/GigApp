import React from 'react';
import {View, Button} from 'react-native';
import {signIn} from '../../services/auth';
import { useAuth } from '../../contexts/auth';

const SignIn = () => {
    const {signed, user, signIn } = useAuth();
    
    console.log(signed);
    console.log(user);

  async function handleSignIn() {
    signIn();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
      }}>
      <Button title="entrar" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
