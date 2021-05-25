import React, {createContext, useState, useEffect, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';


interface User {
    name: string;
    email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
//   const [setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@GAAuth:user');
      const storagedToken = await AsyncStorage.getItem('@GAToken:token');

        await new Promise ((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {

        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        // setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@GAAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem(
      '@GAToken:token',
      JSON.stringify(response.token),
    );
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

//   if (loading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator size="large" color="#DDDDDD" />
//       </View>
//     );
//   }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
