
import React, { createContext, useState, useEffect, useContext } from 'react';
//import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import services from '../services/services';

interface User {
  name: string;
  email: string;  
}

interface AuthContextData {
  provider: boolean;
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
  signOut(): void;
  token: string | null;
  rating: number;
  image: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(null);

     //const [setLoading] = useState(true);


  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@GAAuth:user');
      const storagedToken = await AsyncStorage.getItem('@GAToken:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));

        setToken(storagedToken)
        //setLoading(false);
        
      }
    }
    loadStoragedData();
  }, []);

  async function signIn(email, password) {
    const response = await services.postSession(email, password);

    setUser(response.user);
    setToken(response.token);
    console.log(response.user);
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
      setToken(null);
    });
  }
  

  return (
    <AuthContext.Provider value={{ signed: !!user, user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}