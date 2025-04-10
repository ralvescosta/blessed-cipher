import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OfflineScreen = () => {
  const [offlineCiphers, setOfflineCiphers] = useState([]);

  useEffect(() => {
    const loadOfflineCiphers = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const cipherPairs = await AsyncStorage.multiGet(keys);
        const ciphers = cipherPairs.map(([key, value]) => ({
          key: key,
          cipherText: value,
        }));
        setOfflineCiphers(ciphers);
      } catch (error) {
        console.error('Error loading offline ciphers:', error);
      }
    };

    loadOfflineCiphers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.cipherItem}>
      <Text style={styles.cipherKey}>{item.key}</Text>
      <Text style={styles.cipherText}>{item.cipherText}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={offlineCiphers}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cipherItem:{
    marginBottom:10
  },
  cipherText:{
    fontSize: 14,
  },
  cipherKey:{
    fontSize: 16,
    fontWeight:'bold'
  }
});

export default OfflineScreen;