import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const Dashboard = () => {
  const {user, signOut} = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%',
      }}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 15,
          fontWeight: 'bold',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        {user?.name}
      </Text>
      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
