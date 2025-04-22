import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Linking } from 'react-native';

function createSearchURLs(query) {
  const encodedQuery = query.trim().replace(/\s+/g, '+');

  const amazonURL = `https://www.amazon.com/s?k=${encodedQuery}`;
  const googleURL = `https://www.google.com/search?q=${encodedQuery}`;

  return {
    Amazon: amazonURL,
    Google: googleURL
  };
}

const MoviePlot = ({ route, navigation }) => {
  const { title, plot, poster } = route.params;
  const urls = createSearchURLs(title);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.plot}>{plot}</Text>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.link} onPress={() => Linking.openURL(urls.Amazon)}>
        Buy on Amazon
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(urls.Google)}>
        Search on Google
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#E1C6FF', 
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#444',
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  plot: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
    fontFamily: 'Helvetica Neue', 
  },
  poster: {
    width: 250,
    height: 400,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  link: {
    color: '#1e90ff',
    fontSize: 18,
    marginTop: 12,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default MoviePlot;
