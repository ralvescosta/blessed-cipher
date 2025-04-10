import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CipherDisplayScreen = ({ route }) => {
  const { cipherText } = route.params;

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.cipherText}>{cipherText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  cipherText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default CipherDisplayScreen;