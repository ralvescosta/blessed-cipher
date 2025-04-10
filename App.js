import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native'
import SearchScreen from './src/components/SearchScreen';
import CipherDisplayScreen from './src/components/CipherDisplayScreen';
import OfflineScreen from './src/components/OfflineScreen';

// Dummy screens for now








const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cipher" component={CipherDisplayScreen}/>
        <Stack.Screen name="Offline" component={OfflineScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;