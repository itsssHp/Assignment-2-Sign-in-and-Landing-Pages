import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';

const CityInfo = ({ city, link }) => {
  const cityImage = city === "Calgary" ? require('../assets/calgary.jpg') : require('../assets/edmonton.jpg');
  
  return (
    <View style={styles.container}>
      <Image source={cityImage} style={styles.cityImage} />
      <Text style={styles.cityName}>Interesting facts about {city}</Text>
      <Text style={styles.cityDescription}>Learn more about {city} and explore all it has to offer.</Text>
      <TouchableOpacity onPress={() => Linking.openURL(link)} style={styles.linkButton}>
        <Text style={styles.linkText}>Go to city page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  cityImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cityDescription: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: '#666',
  },
  linkButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CityInfo;
