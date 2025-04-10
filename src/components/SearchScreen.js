import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';
import * as cheerio from 'cheerio'; 
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();


  const handleSearch = async () => { 
    try {
      console.log('Search button pressed');
      console.log('Search text:', searchText);
      const baseUrl = 'https://www.cifraclub.com.br/';
      const url = `${baseUrl}${searchText}`;
      const response = await axios.get(url);

      const $ = cheerio.load(response.data);
      const preText = $('pre').text();

      await AsyncStorage.setItem(searchText, preText);
      navigation.navigate('Cipher', { cipherText: preText });

      
    } catch (error) {
      console.error('Error fetching data:', error);
    }

   
  };

  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for a song or artist"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
});

export default SearchScreen;
